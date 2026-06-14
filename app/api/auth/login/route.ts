import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { errorResponse, successResponse } from "../../../../lib/apiResponse";
import db from "../../../../lib/db";
import { generateToken } from "../../../../lib/auth";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const email = data.email?.trim();
    const password = data.password?.trim();

    const errors: string[] = [];

    if (!email) {
      errors.push("Email is required.");
    }

    if (!password) {
      errors.push("Password is required.");
    }

    if (errors.length > 0) {
      return errorResponse(
        "Validation failed.",
        errors
      );
    }

    const [rows]: any = await db.query(
      `
      SELECT
        Id,
        FullName,
        Email,
        PasswordHash,
        Role,
        IsActive
      FROM Users
      WHERE Email = ?
      LIMIT 1
      `,
      [email]
    );

    if (rows.length === 0) {
      return errorResponse(
        "Invalid email or password.",
        ["Incorrect credentials."]
      );
    }

    const user = rows[0];

    if (!user.IsActive) {
      return errorResponse(
        "Account is inactive.",
        ["Please contact administrator."]
      );
    }

    const passwordMatched = await bcrypt.compare(
      password,
      user.PasswordHash
    );

    if (!passwordMatched) {
      return errorResponse(
        "Invalid email or password.",
        ["Incorrect credentials."]
      );
    }

    const token = await generateToken({
      id: user.Id,
      email: user.Email,
      role: user.Role,
    });

    // Update last login time
    await db.execute(
      `
      UPDATE Users
      SET LastLoginAt = NOW()
      WHERE Id = ?
      `,
      [user.Id]
    );

    // Set HttpOnly cookie
    (await cookies()).set({
      name: "admin_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return successResponse(
      {
        id: user.Id,
        fullName: user.FullName,
        email: user.Email,
        role: user.Role,
      },
      "Login successful."
    );
  } catch (error: any) {
    console.error(error);

    return errorResponse(
      "Something went wrong.",
      [error.message],
      500
    );
  }
}
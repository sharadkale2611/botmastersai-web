import { cookies } from "next/headers";
import { errorResponse, successResponse } from "../../../../lib/apiResponse";
import db from "../../../../lib/db";
import { verifyToken } from "../../../../lib/auth";

export async function GET() {
  try {
    const token = (await cookies()).get(
      "admin_token"
    )?.value;

    if (!token) {
      return errorResponse(
        "Unauthorized.",
        ["Not authenticated."],
        401
      );
    }

    const payload: any = await verifyToken(token);

    if (!payload) {
      return errorResponse(
        "Unauthorized.",
        ["Invalid or expired token."],
        401
      );
    }

    const [rows]: any = await db.query(
      `
      SELECT
        Id,
        FullName,
        Email,
        Role,
        IsActive,
        LastLoginAt,
        CreatedAt
      FROM Users
      WHERE Id = ?
      LIMIT 1
      `,
      [payload.id]
    );

    if (rows.length === 0) {
      return errorResponse(
        "Unauthorized.",
        ["User not found."],
        401
      );
    }

    const user = rows[0];

    if (!user.IsActive) {
      return errorResponse(
        "Unauthorized.",
        ["User account is inactive."],
        401
      );
    }

    return successResponse(
      {
        id: user.Id,
        fullName: user.FullName,
        email: user.Email,
        role: user.Role,
        lastLoginAt: user.LastLoginAt,
        createdAt: user.CreatedAt,
      },
      "User fetched successfully."
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
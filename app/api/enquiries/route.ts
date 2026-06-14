import { errorResponse, successResponse } from "../../../lib/apiResponse";
import db from "../../../lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      `
      SELECT
        Id,
        FullName,
        Email,
        Mobile,
        Subject,
        Message,
        Status,
        CreatedAt
      FROM Enquiries
      ORDER BY CreatedAt DESC
      `
    );

    return successResponse(
      rows,
      "Enquiries fetched successfully."
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

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const errors: string[] = [];

    // Trim values
    data.fullName = data.fullName?.trim();
    data.email = data.email?.trim();
    data.mobile = data.mobile?.trim();
    data.subject = data.subject?.trim();
    data.message = data.message?.trim();

    // Required validations
    if (!data.fullName)
      errors.push("Full name is required.");

    if (!data.email)
      errors.push("Email address is required.");

    if (!data.mobile)
      errors.push("Mobile number is required.");

    if (!data.subject)
      errors.push("Subject is required.");

    if (!data.message)
      errors.push("Message is required.");

    // Email validation
    if (
      data.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
    ) {
      errors.push("Invalid email address.");
    }

    // Mobile validation
    if (
      data.mobile &&
      !/^[0-9]{10}$/.test(data.mobile)
    ) {
      errors.push(
        "Mobile number must contain exactly 10 digits."
      );
    }

    // Message length validation
    if (
      data.message &&
      data.message.length < 10
    ) {
      errors.push(
        "Message should contain at least 10 characters."
      );
    }

    if (errors.length > 0) {
      return errorResponse(
        "Validation failed.",
        errors
      );
    }

    const [result]: any = await db.execute(
      `
      INSERT INTO Enquiries
      (
        FullName,
        Email,
        Mobile,
        Subject,
        Message
      )
      VALUES
      (?, ?, ?, ?, ?)
      `,
      [
        data.fullName,
        data.email,
        data.mobile,
        data.subject,
        data.message,
      ]
    );

    return successResponse(
      {
        id: result.insertId,
        status: "Pending",
      },
      "Your enquiry has been submitted successfully.",
      201
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
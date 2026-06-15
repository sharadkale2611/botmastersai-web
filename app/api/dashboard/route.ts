import { errorResponse, successResponse } from "../../../lib/apiResponse";
import db from "../../../lib/db";

export async function GET() {
  try {
    const [rows]: any = await db.query(`
      SELECT
        (SELECT COUNT(*) FROM Enquiries) AS Enquiries,
        (SELECT COUNT(*) FROM InternshipApplications) AS InternshipApplications
    `);

    return successResponse(
      {
        enquiries: rows[0].Enquiries,
        internshipApplications: rows[0].InternshipApplications,
        students: 0,
        courses: 0
      },
      "Dashboard data fetched successfully."
    );
  } catch (error: any) {
    console.error(error);

    return errorResponse(
      "Something went wrong.",
      [error.message]
    );
  }
}
import { successResponse, errorResponse } from "../../../lib/apiResponse";
import db from "../../../lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      `
      SELECT *
      FROM InternshipApplications
      ORDER BY CreatedAt DESC
      `
    );

    return successResponse(
      rows,
      "Applications fetched successfully."
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
    data.internshipProgram = data.internshipProgram?.trim();
    data.preferredStack = data.preferredStack?.trim();
    data.fullName = data.fullName?.trim();
    data.email = data.email?.trim();
    data.mobile = data.mobile?.trim();
    data.city = data.city?.trim();
    data.gender = data.gender?.trim();
    data.collegeName = data.collegeName?.trim();
    data.degree = data.degree?.trim();
    data.experienceLevel = data.experienceLevel?.trim();
    data.previousExperience = data.previousExperience?.trim();

    // Required validations
    if (!data.internshipProgram)
      errors.push("Internship program is required.");

    if (!data.preferredStack)
      errors.push("Preferred stack is required.");

    if (!data.fullName)
      errors.push("Full name is required.");

    if (!data.email)
      errors.push("Email is required.");

    if (!data.mobile)
      errors.push("Mobile number is required.");

    if (!data.city)
      errors.push("City is required.");

    if (!data.gender)
      errors.push("Gender is required.");

    if (!data.collegeName)
      errors.push("College name is required.");

    if (!data.degree)
      errors.push("Degree is required.");

    if (!data.passingYear)
      errors.push("Passing year is required.");

    if (!data.experienceLevel)
      errors.push("Experience level is required.");

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

    // Passing year validation
    const currentYear = new Date().getFullYear();

    if (
      data.passingYear &&
      (
        isNaN(Number(data.passingYear)) ||
        Number(data.passingYear) < 2000 ||
        Number(data.passingYear) > currentYear + 10
      )
    ) {
      errors.push("Invalid passing year.");
    }

    // Checkbox validations
    // if (!data.isInformationCorrect) {
    //   errors.push(
    //     "Please confirm that the information provided is correct."
    //   );
    // }

    // if (!data.isPrivacyAccepted) {
    //   errors.push(
    //     "You must accept the privacy policy."
    //   );
    // }

    // Return validation errors
    if (errors.length > 0) {
      return errorResponse(
        "Validation failed.",
        errors
      );
    }

    // Duplicate email check
    const [existingRows]: any = await db.query(
      `
      SELECT Id
      FROM InternshipApplications
      WHERE Email = ?
      `,
      [data.email]
    );

    if (existingRows.length > 0) {
      return errorResponse(
        "Validation failed.",
        ["An application with this email already exists."]
      );
    }

    // Insert record
    const [result]: any = await db.execute(
      `
      INSERT INTO InternshipApplications
      (
        InternshipProgram,
        PreferredStack,
        FullName,
        Email,
        Mobile,
        City,
        Gender,
        CollegeName,
        Degree,
        PassingYear,
        ExperienceLevel,
        PreviousExperience,
        IsInformationCorrect,
        IsCommunicationAllowed,
        IsPrivacyAccepted
      )
      VALUES
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        data.internshipProgram,
        data.preferredStack,
        data.fullName,
        data.email,
        data.mobile,
        data.city,
        data.gender,
        data.collegeName,
        data.degree,
        data.passingYear,
        data.experienceLevel,
        data.previousExperience || null,
        data.isInformationCorrect,
        data.isCommunicationAllowed,
        data.isPrivacyAccepted,
      ]
    );

    return successResponse(
      {
        id: result.insertId,
      },
      "Application submitted successfully.",
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
import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await db.execute(
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
        data.previousExperience,
        data.isInformationCorrect,
        data.isCommunicationAllowed,
        data.isPrivacyAccepted,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
    });
  } 
//   catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Something went wrong.",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
catch (error: any) {
  console.log("ERROR:", error);

  return NextResponse.json({
    success: false,
    message: JSON.stringify(error),
  });
}
}
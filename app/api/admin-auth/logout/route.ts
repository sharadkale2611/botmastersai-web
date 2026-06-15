import { cookies } from "next/headers";
import { errorResponse, successResponse } from "../../../../lib/apiResponse";

export async function POST() {
  try {
    (await cookies()).set({
      name: "admin_token",
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      expires: new Date(0),
      path: "/",
    });

    return successResponse(
      null,
      "Logout successful."
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
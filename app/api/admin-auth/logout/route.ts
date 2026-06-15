import { cookies } from "next/headers";
import { errorResponse, successResponse } from "../../../../lib/apiResponse";

export async function POST() {
  try {

    // (await cookies()).set({
    //   name: "admin_token",
    //   value: "",
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   expires: new Date(0),
    //   path: "/",
    // });

    // Set HttpOnly cookie
    // (await cookies()).set({
    //   name: "admin_token",
    //   value: token,
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   maxAge: 60 * 60 * 24 * 7, // 7 days
    //   path: "/",
    // });

  const cookieStore = await cookies();

  cookieStore.set({
    name: "admin_token",
    value: "",
    maxAge: 0,
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
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
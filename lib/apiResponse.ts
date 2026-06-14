import { NextResponse } from "next/server";

export function successResponse(
  data: any = null,
  message = "Success",
  status = 200
) {
  return NextResponse.json(
    {
      success: true,
      data,
      message,
      errors: null,
    },
    {
      status,
    }
  );
}

export function errorResponse(
  message = "Failed",
  errors: string[] = [],
  status = 400
) {
  return NextResponse.json(
    {
      success: false,
      data: null,
      message,
      errors,
    },
    {
      status,
    }
  );
}
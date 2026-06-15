import { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import AdminLayout from "../components/AdminLayout";
import { verifyToken } from "../../../lib/auth";

export default async function Layout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();

  const token = cookieStore.get("admin_token")?.value;

  if (!token) {
    redirect("/admin/login");
  }

  const payload = await verifyToken(token);

  if (!payload) {
    redirect("/admin/login");
  }

  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  );
}
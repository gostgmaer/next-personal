"use client";

import PrivateLayout from "@/components/global/privateLayout";
import { useAuthContext } from "@/contex/authContext";
import { useAxios } from "@/lib/interceptors";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const { userId } = useAuthContext();
  const route = useRouter();
  const [axios, spinner] = useAxios();
  if (!userId) {
    route.push("/auth/login");
  }
  return (
    <>
      <PrivateLayout>
        <h3>This is Dashboard</h3>
      </PrivateLayout>
      {spinner}
    </>
  );
}


import { cookies } from 'next/headers'
import PrivateLayout from "@/components/global/layout/privateLayout";
import Personal from "@/components/page/dashboard/profile/profileBlock";
import React from "react";
import { serverMethod } from '@/lib/servermethod';

const Page = async (props) => {

  const requestData= await fetchCurrentProfile()


  return (
    <>
      <PrivateLayout>
        <Personal data= {requestData} />
      </PrivateLayout>

    </>
  );
};

export default Page;



export const fetchCurrentProfile = async () => {

  const cookieStore = cookies()
  const tokendata = "Bearer " + cookieStore.get("headerPayload").value + "." + cookieStore.get("signature").value;
  const param = {
    method: "get",
    header: {
      Authorization: tokendata,
    },
  }
  const result = await serverMethod(`/authentication/user/current/profile`, param)
  return result
}
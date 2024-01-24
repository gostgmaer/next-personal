import PageLayout from "@/components/global/layout/pageLayout";
import { PortfolioBlock } from "@/components/projects/elements";
import { serverMethod } from "@/lib/servermethod";
import Head from "next/head";



const Index = async (props) => {
  const projects = await getAllRecord(props.searchParams)
  return (
    <PageLayout>
      <Head>
        <title>Kishor Sarkar Portfolio</title>
      </Head>

      <PortfolioBlock projects={projects} />
    </PageLayout>
  );
};

export default Index;


export const getAllRecord = async (query) => {

  const params = {
    method: "get",
    header: {},
    query: { ...query },
  };
  const result = await serverMethod(
    `/projects`,
    params
  );

  return result

}
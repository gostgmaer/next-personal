import PageLayout from "@/components/global/layout/pageLayout";
import { PortfolioBlock } from "@/components/projects/elements";
import { serverMethod } from "@/lib/servermethod";
import Head from "next/head";

export async function generateMetadata({ params }) {
  return {
    title: "Kishor Sarkar Portfolio",
    description: "Full stack web developer",
    openGraph: {
      type: "website",
      url: "l",
      title: "My Website",
      description: "My Website Description",
      siteName: "My Website",
      images: [
        {
          url: "https://example.com/og.png",
        },
      ],
    },
  };
}

const Index = async (props) => {
  // const projects = await getAllRecord(props.searchParams)
  return (
    <PageLayout>
      <Head>
        <title>Kishor Sarkar Portfolio</title>
      </Head>

      <PortfolioBlock  />
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
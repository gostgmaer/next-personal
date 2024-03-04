import PrivateLayout from "@/components/global/layout/privateLayout";
import { ExpenseSummery } from "@/components/page/expenses/elements";



export async function generateMetadata({ params }) {
  return {
    title: " Create Portfolio",
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

const Page = () => {
 

  return (
    <PrivateLayout>

      <div>
        <ExpenseSummery/>
      </div>
    
     
    </PrivateLayout>
  );
};

export default Page;

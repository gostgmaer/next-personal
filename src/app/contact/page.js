import { socialmedia, userInfo } from "@/assets/data/mock";
import { ContatForm } from "@/components/forms/contact";
import PageLayout from "@/components/global/layout/pageLayout";



const Index = () => {
  return (
    <PageLayout>
      <div className="  rounded-[20px]  shadow-md m-auto bg-gray-100 flex items-center justify-center my-5">
        <div className="min-h-max p-8 w-full flex">
          <div className="w-2/3 pr-8 ">
            <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
            <ContatForm />
          </div>
          <div className="w-1/3">
            <div className="bg-blue-500 text-white px-4 py-2 rounded">
              <h2 className="text-lg font-semibold mb-2">
                Contact Information
              </h2>
              <p className="mb-2">{userInfo.contact.street}</p>
              <p className="mb-2">
                {userInfo.contact.city}, {userInfo.contact.country}
              </p>
              <p className="mb-2">
                {" "}
                Email:{" "}
                <a href={`mailto:${userInfo.contact.email}`}>
                  {userInfo.contact.email}
                </a>
              </p>
              <p className="mb-2">
                Phone:{" "}
                <a
                  href={`tel:${
                    userInfo.contact.countryCode
                  }${userInfo.contact.phone.replace(/-/g, "")}`}
                >
                  {userInfo.contact.countryCode}-{userInfo.contact.phone}
                </a>
              </p>
              <div className="socialMedia">
                <h3 className=" font-medium mb-1 mt-2 text-lg">Social Media</h3>
                <nav className="flex gap-1">
                  {socialmedia.map((social) => (
                   <span key={social.id}>   {social.icon}</span>
                  ))}
                </nav>
              </div>
              {/* <div className="Coordinate">
              <h3 className=" font-medium mb-1 mt-2 text-lg">Coordinate</h3>
             <p><span>{userInfo}</span></p>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;


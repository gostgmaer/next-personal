"use client";
import PrivateLayout from "@/components/global/layout/privateLayout";
import ProjectForm from "@/components/page/dashboard/projects/form";
import { Formik, Form, Field, FieldArray, useFormik } from "formik";
import * as Yup from "yup";

const initialValue = {
  title: "",
  description: "",
  startDate: "",
  endDate: "",

  teamMembers: [],
  status: "",
  current_status: "",
  tasks: [
    {
      title: "",
      description: "",
      status: "Not Started",
    },
  ],
  client: {
    name: "",
    contactPerson: "",
    contactEmail: "",
  },
  budget: {
    currency: "",
    amount: 0,
  },
  duration: {
    value: 0,
    unit: "days",
  },
  milestones: [
    {
      title: "",
      description: "",
      dueDate: "",
    },
  ],
  attachments: [],
  notes: "",
  risks: [
    {
      description: "",
      probability: 0,
      impact: "",
      mitigation: "",
    },
  ],
  feedback: [
    {
      date: "",
      from: "",
      message: "",
    },
  ],
  projectLinks: [
    {
      title: "",
      url: "",
    },
  ],
  tags: [],
  privacy: "Public",
  completionPercentage: 0,
  repository: "",
  deploymentURL: "",
  toolsUsed: [
    {
      category: "",
      name: "",
      description: "",
      proficiency: "",
      version: "",
      documentationLink: "",
    },
  ],
  collaborators: [],
  communicationChannels: [
    {
      platform: "",
      link: "",
    },
  ],
  customFields: {
    field1: "",
    field2: 0,
    field3: false,
  },
  main_image: {
    fileName: "",
    url: "",
  },
  team_role: "",
};

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

      <Formik
        initialValues={{
          user: "", // Assuming userId will be filled dynamically
          incomes: [{ name: "", category: "", amount: "", description: "" }],
          expenses: [{ name: "", category: "", amount: "", description: "" }],
          savings: [{ name: "", category: "", amount: "", description: "" }],
        }}
        validationSchema={Yup.object({
          // Define your validation schema here
          // You can set validation rules for each field
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="incomes">
              {({ push, remove }) => (
                <div>
                  <h3>Incomes</h3>
                  {values.incomes.map((income, index) => (
                    <div key={index}>
                      <div className="flex flex-col w-full">
                        <label className=" block text-sm capitalize font-semibold  mb-1.5"></label>
                        <div
                          className={`flex items-center peer  w-full transition duration-200  rounded-md bg-transparent focus:ring-[0.6px] `}
                        >
                          <Field
                            name={`incomes.${index}.name`}
                            placeholder="Name"
                            className="rounded w-full  leading-tight focus:outline-none  border px-3.5 h-10 "
                          />
                        </div>
                      </div>
                      <div className="flex flex-col w-full">
                        <label className=" block text-sm capitalize font-semibold  mb-1.5"></label>
                        <div
                          className={`flex items-center peer  w-full transition duration-200  rounded-md bg-transparent focus:ring-[0.6px] `}
                        >
                          <Field
                            name={`incomes.${index}.category`}
                            placeholder="category"
                            className="rounded w-full  leading-tight focus:outline-none  border px-3.5 h-10 "
                          />
                        </div>
                      </div>
                      <div className="flex flex-col w-full">
                        <label className=" block text-sm capitalize font-semibold  mb-1.5"></label>
                        <div
                          className={`flex items-center peer  w-full transition duration-200  rounded-md bg-transparent focus:ring-[0.6px] `}
                        >
                          <Field
                            name={`incomes.${index}.amount`}
                            placeholder="amount"
                            className="rounded w-full  leading-tight focus:outline-none  border px-3.5 h-10 "
                          />
                        </div>
                      </div>
                      <div className="flex flex-col w-full">
                        <label className=" block text-sm capitalize font-semibold  mb-1.5"></label>
                        <div
                          className={`flex items-center peer  w-full transition duration-200  rounded-md bg-transparent focus:ring-[0.6px] `}
                        >
                          <Field
                            name={`incomes.${index}.description`}
                            placeholder="description"
                            className="rounded w-full  leading-tight focus:outline-none  border px-3.5 h-10 "
                          />
                        </div>
                      </div>
                    
                 
                      <button type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      push({
                        name: "",
                        category: "",
                        amount: "",
                        description: "",
                      })
                    }
                  >
                    Add Income
                  </button>
                </div>
                
              )}
            </FieldArray>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </PrivateLayout>
  );
};

export default Page;

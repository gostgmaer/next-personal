import PrivateLayout from "@/components/global/layout/privateLayout"
import ProjectForm from "@/components/page/dashboard/projects/form"
import { serverMethod } from "@/lib/servermethod"



const Page = async (props) => {

  const project = await getRecord(props.params.id)

  return (
    <PrivateLayout>

      <ProjectForm initialValues={project.result} />

    </PrivateLayout>
  )
}

export default Page



export const getRecord = async (id) => {

  const params = {
    method: "get",
    header: {},
    query: { },
  };
  const contacts = await serverMethod(
    `/projects/${id}`,
    params
  );
  return contacts

}
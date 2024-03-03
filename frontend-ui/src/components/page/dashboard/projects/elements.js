"use client"
import Table from '@/components/global/fields/Table';
import ProjectForm from '@/components/projects/projectForm';
import { generateUrlFromNestedObject } from '@/helper/function';
import { del } from '@/lib/http';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { MdDelete, MdEdit, MdPageview } from 'react-icons/md';

export const ProjectTable = (props) => {
 
   
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page

    const route = useRouter()


  

    const handleDelete = async (id) => {
        const req = await del(`/projects`, id);
        if (req.statusCode === 200) {
            loadprojects()
        }
    };

    const loadprojects = async () => {
        const query = {
            limit: itemsPerPage,
            page: currentPage,
        };
        const checkQuerydata = generateUrlFromNestedObject({ ...query });
        route.push(`/dashboard/projects${checkQuerydata}`);

    };

    useEffect(() => {
        loadprojects();
    }, [currentPage, itemsPerPage]);

    
    const columns = React.useMemo(
        () => [
            { Header: "ID", accessor: "_id", isSortable: true },
            { Header: "Name", accessor: "title" },
        ],
        []
    );
    const buttons = [
        {
            label: <MdEdit className=" w-5 h-5" />,
            onClick: (property) => {
                route.push(`/dashboard/projects/${property._id}/edit`);
            },
        },
        {
            label: <MdPageview className=" w-5 h-5" />,
            onClick: (property) => {
                route.push(`/dashboard/projects/${property._id}`);
            },
          
        },
        {
            label: <MdDelete className=" w-5 h-5" />,
            onClick: (property) => {
                handleDelete(property._id)
            },
        },
      
    ];



    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <div className="overflow-x-auto w-full  py-4 text-md  text-black text-right">
                    <Link href={'/dashboard/projects/create'}
                        // onClick={() => setOpen(!open)}
                        className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >

                        Add project
                    </Link>
                </div>
                <div className="overflow-x-auto">

                    <Table
                        columns={columns}
                        data={props?.data?.result}
                        buttons={buttons}
                        params={{
                            setPage: setCurrentPage,
                            setLimit: setItemsPerPage,
                            limit: itemsPerPage,
                            page: currentPage,
                            total: props?.data?.total_record,
                        }} ispagination={true}                    />
                </div>
            </div>
            {/* {open && (
                <ProjectForm id={id} setId={setId} setOpen={setOpen} loadprojects={loadprojects}></ProjectForm>
            )} */}

        </div>
    )
}


"use client"
import Table from '@/components/global/fields/Table';
import ProjectForm from '@/components/projects/projectForm';
import { generateUrlFromNestedObject } from '@/helper/function';
import { del } from '@/lib/http';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { MdDelete, MdEdit, MdPageview } from 'react-icons/md';

export const ProjectTable = (props) => {
 
   
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page

    const [id, setId] = useState(undefined);
    const [open, setOpen] = useState(false);
    const route = useRouter()


    const handleEdit = (id) => {
        setId(id);
        setOpen(true);
    };

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

        ],
        []
    );
    const buttons = [
        {
            label: <MdEdit className=" w-5 h-5" />,
            onClick: (property) => {
                route.push(`/dashboard/listing/${property._id}/update`);
            },
        },
        {
            label: <MdPageview className=" w-5 h-5" />,
            onClick: (property) => {
                handleEdit(property._id)
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
                    <button
                        onClick={() => setOpen(!open)}
                        className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >

                        Add project
                    </button>
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
                        }}
                    />
                </div>
            </div>
            {open && (
                <ProjectForm id={id} setId={setId} setOpen={setOpen} loadprojects={loadprojects}></ProjectForm>
            )}

        </div>
    )
}


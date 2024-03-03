"use client";
import { expenseData } from "@/assets/data/mock";
import Table, { BasicTable } from "@/components/global/fields/Table";
import Input from "@/components/global/fields/input";
import ProjectForm from "@/components/projects/projectForm";
import { arraySumByKey, generateUrlFromNestedObject } from "@/helper/function";
import { del } from "@/lib/http";
import { Field, FieldArray, Form, Formik, useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit, MdPageview } from "react-icons/md";

export const ProjectTable = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page

    const route = useRouter();
    const handleDelete = async (id) => {
        const req = await del(`/projects`, id);
        if (req.statusCode === 200) {
            loadprojects();
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
                handleDelete(property._id);
            },
        },
    ];

    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <div className="overflow-x-auto w-full  py-4 text-md  text-black text-right">
                    <Link
                        href={"/dashboard/projects/create"}
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
                        params={undefined}
                        ispagination={false}
                    />
                </div>
            </div>
            {/* {open && (
                <ProjectForm id={id} setId={setId} setOpen={setOpen} loadprojects={loadprojects}></ProjectForm>
            )} */}
        </div>
    );
};

export const ExpenseSummery = (props) => {
    return (
        <div>
            <div className=" grid grid-cols-10">
                <div className=" col-span-4">
                    <h3>Percentage of Income Spends</h3>
                    <div className="p-5">
                        <div className=" w-60 h-60 rounded-full bg-gray-500 border-10 border-green-600 flex items-center justify-center">
                            <span>8%</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <h3>Summery</h3>
                    <div className="p-5 flex gap-2 justify-between">
                        <div className="flex flex-col gap-5">
                            <div>
                                <p className=" text-sky-600 font-medium uppercase text-sm underline">
                                    Total Monthly Income
                                </p>
                                <p className=" text-2xl">$ {arraySumByKey(expenseData.incomes, 'amount')}</p>
                            </div>
                            <div>
                                <p className=" text-sky-600 font-medium uppercase text-sm underline">
                                    Total Monthly Expenses
                                </p>
                                <p className=" text-2xl">$ {arraySumByKey(expenseData.expenses, 'amount')}</p>
                            </div>
                            <div>
                                <p className=" text-sky-600 font-medium uppercase text-sm underline">
                                    Total Monthly Savings
                                </p>
                                <p className=" text-2xl">$ {arraySumByKey(expenseData.savings, 'amount')}</p>
                            </div>
                            <div>
                                <p className=" text-sky-600 font-medium uppercase text-sm underline">
                                    Current Balance
                                </p>
                                <p className=" text-2xl">$ {arraySumByKey(expenseData.incomes, 'amount') - (arraySumByKey(expenseData.expenses, 'amount') + arraySumByKey(expenseData.savings, 'amount'))}</p>
                            </div>
                        </div>
                        <div className="income-expense-chart">
                            <div className=" w-64 h-64 rounded-full bg-gray-500 border-4 border-green-600 flex items-center justify-center">
                                <span>8%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" grid grid-cols-3 gap-2">
                <div className=" col-span-1 p-2 ">
                    <h3>Monthly Income</h3>
                    <div className="">
                        <IncomeTable incomes={expenseData.incomes} />

                    </div>
                </div>
                <div className="col-span-1 p-2">
                    <h3>Monthly Expenses</h3>
                    <div className=" ">
                        <ExpenseTable incomes={expenseData.expenses} />
                    </div>
                </div>
                <div className=" col-span-1 p-2">
                    <h3>Monthly Savings</h3>
                    <div className="">
                        <SavingsTable incomes={expenseData.savings} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const IncomeTable = (props) => {
    const columns = React.useMemo(
        () => [
            //   { Header: "ID", accessor: "_id", isSortable: true },
            { Header: "Name", accessor: "name" },
            // { Header: "Category", accessor: "category" },
            { Header: "Amount", accessor: "amount" },
            { Header: "Date", accessor: "date" },
        ],
        []
    );

    const formik = useFormik({
        initialValues: { name: "", category: "", amount: "", description: "", date: "" },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <>
            <div>
                <BasicTable
                    columns={columns}
                    data={props?.incomes}
                    buttons={undefined}
                    params={undefined}
                    ispagination={false}
                />
            </div>
            <form onSubmit={formik.handleSubmit} className="w-full  grid grid-cols-1 gap-2 p-2">
                <div><Input label={undefined} type={'text'} additionalAttrs={{ ...formik.getFieldProps('name'), placeholder: "Name" }} classes={undefined} icon={undefined} id={"name"} /></div>
                {/* <div><Input label={undefined} type={'text'} additionalAttrs={{ ...formik.getFieldProps('category') }} classes={undefined} icon={undefined} id={"category"} /></div> */}
                <div><Input label={undefined} type={'text'} additionalAttrs={{ ...formik.getFieldProps('amount'), placeholder: "0.00" }} classes={undefined} icon={undefined} id={"amount"} /></div>
                <div><Input label={undefined} type={'date'} additionalAttrs={{ ...formik.getFieldProps('date'), placeholder: "MM/DD/YYYY" }} classes={undefined} icon={undefined} id={"date"} /></div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </button>
            </form>
        </>
    );
};

export const ExpenseTable = (props) => {
    const columns = React.useMemo(
        () => [
            //   { Header: "ID", accessor: "_id", isSortable: true },
            { Header: "Name", accessor: "name" },
            // { Header: "Category", accessor: "category" },
            { Header: "Amount", accessor: "amount" },
            { Header: "Date", accessor: "date" },
        ],
        []
    );
    const formik = useFormik({
        initialValues: { name: "", category: "", amount: "", description: "", date: "" },
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <>    <div>
            <BasicTable
                columns={columns}
                data={props?.expenses}
                buttons={undefined}
                params={undefined}
                ispagination={false}
            />
        </div>
            <form onSubmit={formik.handleSubmit} className="w-full  grid grid-cols-1 gap-2 p-2">
                <div><Input label={undefined} type={'text'} additionalAttrs={{ ...formik.getFieldProps('name'), placeholder: "Name" }} classes={undefined} icon={undefined} id={"name"} /></div>
                {/* <div><Input label={undefined} type={'text'} additionalAttrs={{ ...formik.getFieldProps('category') }} classes={undefined} icon={undefined} id={"category"} /></div> */}
                <div><Input label={undefined} type={'text'} additionalAttrs={{ ...formik.getFieldProps('amount'), placeholder: "0.00" }} classes={undefined} icon={undefined} id={"amount"} /></div>
                <div><Input label={undefined} type={'date'} additionalAttrs={{ ...formik.getFieldProps('date'), placeholder: "MM/DD/YYYY" }} classes={undefined} icon={undefined} id={"date"} /></div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </button>
            </form>
        </>
    );
};


export const SavingsTable = (props) => {
    const columns = React.useMemo(
        () => [
            //   { Header: "ID", accessor: "_id", isSortable: true },
            { Header: "Name", accessor: "name" },
            // { Header: "Category", accessor: "category" },
            { Header: "Amount", accessor: "amount" },
            { Header: "Date", accessor: "date" },
        ],
        []
    );

    const formik = useFormik({
        initialValues: { name: "", category: "", amount: "", description: "", date: "" },
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <>
            <div>
                <BasicTable
                    columns={columns}
                    data={props?.incomes}
                    buttons={undefined}
                    params={undefined}
                    ispagination={false}
                />
            </div>
            <form onSubmit={formik.handleSubmit} className="w-full  grid grid-cols-1 gap-2 p-2">
                <div><Input label={undefined} type={'text'} additionalAttrs={{ ...formik.getFieldProps('name'), placeholder: "Name" }} classes={undefined} icon={undefined} id={"name"} /></div>
                {/* <div><Input label={undefined} type={'text'} additionalAttrs={{ ...formik.getFieldProps('category') }} classes={undefined} icon={undefined} id={"category"} /></div> */}
                <div><Input label={undefined} type={'text'} additionalAttrs={{ ...formik.getFieldProps('amount'), placeholder: "0.00" }} classes={undefined} icon={undefined} id={"amount"} /></div>
                <div><Input label={undefined} type={'date'} additionalAttrs={{ ...formik.getFieldProps('date'), placeholder: "MM/DD/YYYY" }} classes={undefined} icon={undefined} id={"date"} /></div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </button>
            </form>

        </>
    );
};

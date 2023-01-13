import React, { useRef, useState, useEffect } from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer"
import 'react-loading-skeleton/dist/skeleton.css'
import Head from 'next/head'
import axios from "axios";
import useSWR, { mutate } from "swr";
import Image from "next/legacy/image";
import { useRouter } from 'next/router'
import { HiOutlineMail } from 'react-icons/hi'

export default function Psychiatrist(props) {
    const router = useRouter()
    const { data, error } = useSWR(router.query.id ? process.env.BACKEND + `/user/psychiatrist/${router.query.id}` : null, async url => await axios.get(url, { withCredentials: true }))
    console.log(data?.data)
    const psychiatristData = data?.data?.data
    const [errorMessage, setErrorMessage] = useState("")

    function imageLoader({ src }) {
        return src
    }

    const assignPsychiatrist = async () => {
        try {
            const data = await axios.post(process.env.BACKEND + `/user/psychiatrist/assign/${psychiatristData?.psychiatrist._id}`, {}, { withCredentials: true })
            mutate(process.env.BACKEND + `/user/psychiatrist/${router.query.id}`)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={`w-full h-screen bg-back pt-20 dark:bg-background text-white`}>
            <Head>
                <title>{`Psychiatrist | TeleCBT`}</title>
            </Head>
            <Header page="programmes" />
            <div className="mt-32 w-full min-h-full pb-20 px-10">
                <div className="flex flex-col justify-center gap-5 pb-10 items-center">
                    <div className="flex flex-col w-full gap-10">
                        <div className="flex flex-col gap-1 md:flex-row md:gap-16 justify-center">
                            <div className="m-auto md:m-0 border-2 border-transparent shadow-xl rounded-full dark:bg-slate-900 overflow-hidden w-[80px] md:w-[100px] h-[80px] md:h-[100px] relative">
                                <Image
                                    // objectFit="contain"
                                    layout="fill"
                                    objectFit="contain"
                                    alt={psychiatristData?.psychiatrist?.firstName}
                                    loader={imageLoader}
                                    src={psychiatristData?.psychiatrist?.profilePicture}
                                />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-center text-3xl">{psychiatristData?.psychiatrist?.firstName + " " + " " + psychiatristData?.psychiatrist?.lastName}</h1>
                                <div className="text-center text-md text-gray-400">psychiatrist</div>
                                <div className="flex justify-center gap-1 items-center">
                                    <span><HiOutlineMail className="text-blue-400" /></span>
                                    <a href={`mailto: ${psychiatristData?.psychiatrist?.email}`} className="text-center text-sm text-blue-400 cursor-pointer hover:underline">{psychiatristData?.psychiatrist?.email}</a>
                                </div>
                                <div className="text-sm text-center">+977-{psychiatristData?.psychiatrist?.phone}</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-1">
                                <div className="text-base">
                                    Status: {psychiatristData?.isAssigned ?
                                        "Assigned" :
                                        <>
                                            Not Assigned
                                            <button className="ml-2 bg-blue-800 p-1 px-2 rounded-md" onClick={assignPsychiatrist}>Assign</button>
                                        </>
                                    }
                                </div>
                                <div className="text-base">
                                    Speciality: {psychiatristData?.psychiatrist?.speciality}
                                </div>
                            </div>
                            <div className="">
                                {psychiatristData?.psychiatrist?.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import { createUser, logoutUser } from '../api/User'
import { getProfile } from '../api/Profile'
import { Avatar } from '@mui/material'
import useSWR from 'swr'
import { BiHide, BiShow } from 'react-icons/bi'
import Head from 'next/head'
import CircleLoader from "react-spinners/CircleLoader";
import Image from "next/legacy/image";

function Login() {
    const router = useRouter()
    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)
    const [logged, setLogged] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [pass, setPass] = useState({ pass1: "", pass2: "" })
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
    });
    const [loggedUser, setLoggedUser] = useState({
        username: "",
        avatar: ""
    })

    const createProfile = async () => {
        setLoading(true)
        const data = await createUser(process.env.BACKEND + "/user/create/", user)
        if (typeof data !== typeof undefined) {
            if (data.success) {
                router.push("/")
            } else {
                setErrorMessage(data?.message)
            }
        }
        setLoading(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (pass.pass1 !== pass.pass2) {
            setErrorMessage("Your passwords don't match")
        } else {
            createProfile();
        }
    }

    const logout = async (e) => {
        e.preventDefault()
        await logoutUser(process.env.BACKEND + "/user/logout/")
        router.reload()
    }

    const { data } = useSWR(process.env.BACKEND + "/user/profile", async url => await getProfile(url), { revalidateOnFocus: false, revalidateOnReconnect: true })

    useEffect(() => {
        async function getData() {
            if (typeof data !== typeof undefined) {
                if (data?.success) {
                    setLogged(true)
                    setLoggedUser({ username: data?.data?.firstName + " " + data?.data?.lastName, avatar: data?.data?.profilePicture })
                } else {
                    setLogged(false)
                }
            }
        }
        getData()
    }, [data])

    return (
        <div className="h-screen">
            <Head>
                <title>Signup | TeleCBT</title>
            </Head>
            <Header page="signup" />
            {logged ?
                <div className={`dark:bg-background w-full h-full flex items-center justify-center gap-20 pl-10 pr-10 bg-back`}>
                    <div className="flex flex-col gap-3 items-center">
                        <div className="dark:text-red-400 font-sans text-red-800">
                            Hey, you are already logged in as
                        </div>
                        <div className="dark:bg-formBox dark:text-mainText/75 bg-formBox flex flex-col gap-3 dark:md:border-0 md:border-2 shadow-lg p-10">
                            <div className="hover:cursor-pointer flex flex-col md:flex-row items-center gap-4 md:gap-10">
                                <div onClick={() => {
                                    router.push('/')
                                }} className="flex items-center gap-3">
                                    <div><Avatar alt="" src={loggedUser.avatar} /></div>
                                    <div className="font-sans text-blue-600 dark:text-mainText/75 text-xl hover:underline">
                                        {loggedUser.username}
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <span onClick={logout} className={` font-sans hover:underline text-gray-400`}>
                                        <Link
                                            href="/"
                                        >
                                            Log Out
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                :

                <div className={`dark:bg-background bg-back w-full h-full flex items-center justify-center gap-24 px-10 pt-28`}>
                    <div className="animate-moveDown select-none hidden lg:flex w-[550px] h-[500px] relative">
                        <Image objectFit="contain" layout="fill" alt="sign up" src="/exam.svg"></Image>
                    </div>
                    <div className="animate-jumpLeft w-full max-w-xs md:max-w-sm flex flex-col gap-10">
                        <div>
                            <form className={`dark:md:bg-formBox md:bg-blue-200 md:shadow-md rounded px-5 md:px-12 pb-8 mb-4`} onSubmit={handleSubmit}>
                                <div className="clear-both">
                                    <div className="flex flex-col lg:flex-row lg:gap-3 pt-10">
                                        <div className="mb-4">
                                            <input className="font-sans shadow appearance-none border focus:outline-blue-600 focus:shadow-none rounded w-full py-2 px-3 text-gray-700 leading-tight" type="text" placeholder="First Name"
                                                id="firstName"
                                                value={user.firstName}
                                                onChange={(e) =>
                                                    setUser((prev) => {
                                                        return { ...prev, firstName: e.target.value };
                                                    })} required />
                                        </div>
                                        <div className="mb-4">
                                            <input className="font-sans shadow appearance-none border focus:outline-blue-600 focus:shadow-none rounded w-full py-2 px-3 text-gray-700 leading-tight" type="text" placeholder="Last Name"
                                                id="lastName"
                                                value={user.lastName}
                                                onChange={(e) =>
                                                    setUser((prev) => {
                                                        return { ...prev, lastName: e.target.value };
                                                    })} />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <input className="font-sans shadow appearance-none border rounded focus:outline-blue-600 focus:shadow-none w-full py-2 px-3 text-gray-700 leading-tight" type="number" placeholder="Phone No"
                                            id="phone"
                                            value={user.phone}
                                            onChange={(e) =>
                                                setUser((prev) => {
                                                    return { ...prev, phone: e.target.value };
                                                })} required />
                                    </div>
                                    <div className="mb-4">
                                        <input className="font-sans shadow appearance-none border rounded focus:outline-blue-600 focus:shadow-none w-full py-2 px-3 text-gray-700 leading-tight" type="email" placeholder="Email"
                                            id="email"
                                            value={user.email}
                                            onChange={(e) =>
                                                setUser((prev) => {
                                                    return { ...prev, email: e.target.value };
                                                })} required />
                                    </div>
                                    <div className="mb-4 relative">
                                        <input className="font-sans shadow appearance-none border focus:outline-blue-800 focus:shadow-none border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight" type={`${showPassword1 ? "text" : "password"}`} placeholder="Enter Password"
                                            id="pass1"
                                            value={pass.pass1}
                                            onChange={(e) => {
                                                setPass({ ...pass, pass1: `${e.target.value}` })
                                                setUser((prev) => {
                                                    return { ...prev, password: e.target.value };
                                                })
                                            }} required />
                                        <span className="hover:cursor-pointer absolute right-1 bottom-[7px]">
                                            {showPassword1 ?
                                                <BiShow onClick={() => setShowPassword1(false)} size={25} />
                                                :
                                                <BiHide onClick={() => setShowPassword1(true)} size={25} />
                                            }
                                        </span>
                                    </div>
                                    <div className="mb-4 relative">
                                        <input className="font-sans shadow appearance-none border focus:outline-blue-800 focus:shadow-none border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight" type={`${showPassword2 ? "text" : "password"}`} placeholder="Confirm Password"
                                            id="pass2"
                                            value={pass.pass2}
                                            onChange={(e) => {
                                                setPass({ ...pass, pass2: `${e.target.value}` })
                                                setUser((prev) => {
                                                    return { ...prev, password: e.target.value };
                                                })
                                            }} required />
                                        <span className="hover:cursor-pointer absolute right-1 bottom-[18px]">
                                            {showPassword2 ?
                                                <BiShow onClick={() => setShowPassword2(false)} size={25} />
                                                :
                                                <BiHide onClick={() => setShowPassword2(true)} size={25} />
                                            }
                                        </span>
                                    </div>

                                    <div className={`mb-4 font-sans tracking-wide text-center text-red-500`}>
                                        {errorMessage}
                                    </div>
                                    <div className="flex flex-col gap-5 md:gap-8">
                                        <div className="flex gap-8 items-center">
                                            <button disabled={loading}
                                                className={`font-sans text-xl font-semibold transition-all ${loading ? "" : "hover:-translate-y-0.5 hover:bg-blue-700"} bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                                                type="submit"
                                            >
                                                Signup
                                            </button>
                                            <CircleLoader loading={loading} color="blue" size={40} />
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center">
                                            <div className="font-sans text-lg text-slate-500 text-center">
                                                Already got an account?
                                            </div>
                                            <span className="font-sans text-xl hover:underline transition-all text-blue-600">
                                                <Link href="/login">
                                                    Login
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p className="dark:text-white text-center text-gray-500 text-base">
                                TeleCBT © 2023 telecbt.org. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            }
            <Footer />
        </div>
    );
}

export default Login;
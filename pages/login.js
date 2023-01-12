import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../components//Header";
import Footer from "../components/Footer";
import { loginUser, logoutUser } from "../api/User";
import { getProfile } from "../api/Profile";
import { Avatar } from "@mui/material";
import useSWR from "swr";
import { BiHide, BiShow } from "react-icons/bi";
import CircleLoader from "react-spinners/CircleLoader";
import Head from 'next/head'
import Image from "next/legacy/image";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [logged, setLogged] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false)

    const [loggedUser, setLoggedUser] = useState({
        username: "",
        avatar: "",
    });

    const router = useRouter();

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const data = await loginUser(
            process.env.BACKEND + "/user/login/",
            user
        );
        if (data) setLoading(false)
        if (typeof data !== typeof undefined) {
            if (data?.success) {
                if (router.query.redirect_uri) {
                    router.replace(`/${router.query.redirect_uri}`).then(() => router.reload())
                } else
                    router.push("/");
            } else {
                setErrorMessage(data?.message);
            }
        }
    };

    const logout = async (e) => {
        e.preventDefault();
        await logoutUser(process.env.BACKEND + "/user/logout/");
        router.reload();
    };

    const { data } = useSWR(
        process.env.BACKEND + "/user/profile",
        async (url) => await getProfile(url), { revalidateOnFocus: false, revalidateOnReconnect: true }
    );

    useEffect(() => {
        async function getData() {
            if (typeof data !== typeof undefined) {
                if (data.success) {
                    setLogged(true);
                    setLoggedUser({
                        username: data?.data?.firstName + " " + data?.data?.lastName,
                        avatar: data?.data?.profilePicture,
                    });
                } else {
                    setLogged(false);
                }
            }
        }
        getData();
    }, [data]);

    return (
        <div className="h-screen">
            <Head>
                <title>Login | TeleCBT</title>
            </Head>
            <Header page="login" />
            {logged ? (
                <div
                    className={`bg-back dark:bg-background w-full h-full flex items-center justify-center gap-20 pl-10 pr-10`}
                >
                    <div className="flex flex-col gap-3 items-center">
                        <div className="dark:text-red-400 font-sans text-red-800">
                            Hey, you are already logged in as
                        </div>
                        <div className="dark:bg-formBox dark:text-mainText/75 md:bg-blue-200 flex flex-col gap-3 dark:md:border-0 md:border-2 shadow-lg p-10">
                            <div className="hover:cursor-pointer flex flex-col md:flex-row items-center gap-4 md:gap-10">
                                <div
                                    onClick={() => {
                                        router.push("/");
                                    }}
                                    className="flex items-center gap-3"
                                >
                                    <div>
                                        <Avatar alt="" src={loggedUser?.avatar} />
                                    </div>
                                    <div className="font-sans dark:text-mainText/75 text-blue-900 text-xl hover:underline">
                                        {loggedUser?.username}
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <span onClick={logout} className={` font-sans hover:underline`}>
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
            ) : (
                <div
                    className={`bg-back dark:bg-background w-full h-full flex items-center justify-center gap-20 px-10`}
                >
                    <div className="animate-moveRight select-none hidden lg:flex w-[550px] h-[500px] relative">
                        <Image objectFit="contain" layout="fill" alt="sign up" src="/teaching1.svg"></Image>
                    </div>
                    <div className="animate-jump w-full max-w-xs md:max-w-md flex flex-col gap-10 items-center">
                        <div>
                            <form
                                className={`dark:md:bg-formBox md:bg-blue-200 md:shadow-md rounded md:px-12 py-8 mb-4`}
                                onSubmit={handleSubmit}
                            >
                                <div className="mb-4 clear-both">
                                    <label
                                        className="dark:text-white block text-gray-700 font-sans text-lg mb-2"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="font-sans shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-600 focus:shadow-none"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        value={user.email}
                                        onChange={(e) =>
                                            setUser((prev) => {
                                                return { ...prev, email: e.target.value };
                                            })
                                        }
                                        required
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <label
                                        className="dark:text-white block font-sans text-lg text-gray-700 mb-2"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        className="font-sans shadow border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-800 focus:shadow-none"
                                        id="password"
                                        type={`${showPassword ? "text" : "password"}`}
                                        placeholder="Password"
                                        value={user.password}
                                        onChange={(e) =>
                                            setUser((prev) => {
                                                return { ...prev, password: e.target.value };
                                            })
                                        }
                                        required
                                    />
                                    <span className="hover:cursor-pointer absolute right-1 bottom-[18px]">
                                        {showPassword ? (
                                            <BiShow
                                                onClick={() => setShowPassword(false)}
                                                size={25}
                                            />
                                        ) : (
                                            <BiHide onClick={() => setShowPassword(true)} size={25} />
                                        )}
                                    </span>
                                </div>
                                <div
                                    className={`mb-4 font-sans tracking-wide text-center text-red-500`}
                                >
                                    {errorMessage}
                                </div>
                                <div className="flex flex-col gap-5 md:gap-7">
                                    <div className="flex gap-8 items-center justify-center md:justify-start">
                                        <button disabled={loading}
                                            className={`font-sans text-xl font-semibold transition-all ${loading ? "" : "hover:-translate-y-0.5 hover:bg-blue-700"} bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                        <CircleLoader color="blue" loading={loading} size={40} />
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center">
                                        <div className="font-sans text-lg text-slate-500 text-center">
                                            Haven't got an account?
                                        </div>
                                        <span className="font-sans text-xl hover:underline transition-all text-blue-600">
                                            <Link
                                                href="/signup"
                                            >
                                                Sign Up
                                            </Link>
                                        </span>
                                    </div>
                                    <span className="dark:hover:text-blue-400 text-center md:text-left font-sans inline-block align-baseline text-lg text-blue-500 hover:text-blue-800">
                                        <Link
                                            href="/forgot-password"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </span>
                                </div>
                            </form>

                            <p className="dark:text-white text-center text-gray-500 text-base">
                                TeleCBT © 2023 telecbt.org. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Login;
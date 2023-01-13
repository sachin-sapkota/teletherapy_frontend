import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Head from 'next/head'
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import useSWR from "swr";
import Image from "next/legacy/image";

export default function Psychiatrists(props) {
  const router = useRouter()
  const id1 = router.query.id1
  const { data, error } = useSWR(process.env.BACKEND + `/user/psychiatrist/list`, async url => await axios.get(url, { withCredentials: true }))

  const psychiatrists = data?.data?.data

  function imageLoader({ src }) {
    return src
  }

  return (
    <div className={`w-full h-screen bg-back pt-20 dark:bg-background`}>
      <Head>
        <title>{`Psychiatrists | TeleCBT`}</title>
      </Head>
      <Header page="programmes" />
      <div className="dark:bg-background bg-back flex w-full min-h-full pb-20 px-10 justify-center items-center">
        <div className="flex flex-wrap justify-center gap-10 py-20">
          {!data && !error ?
            <>
              {[...Array(2)].map((val, i) =>
                <div key={i} >
                  <div ><Skeleton width={240} height={180} baseColor='gray' /></div>
                </div>
              )}
            </>
            :
            <>
              {psychiatrists ?
                psychiatrists?.map((psychiatrist, i) =>
                  <Link href={`/psychiatrists/${psychiatrist?._id}`} legacyBehavior>
                    <a className={`max-w-sm lg:max-w-full flex cursor-pointer hover:translate-y-1 justify-center`}>
                      {psychiatrist?.profilePicture ?
                        <div className="ring-1 ring-opacity-5 ring-blue-900 h-full w-[160px] relative">
                          <Image
                            objectFit="contain"
                            layout="fill"
                            alt={psychiatrist?.firstName}
                            loader={imageLoader}
                            src={psychiatrist?.profilePicture}
                          />
                        </div>
                        :
                        <></>
                      }
                      <div className="relative shadow-xl h-[180px] w-[160px] md:h-[200px] md:w-[200px] border-transparent border-gray-400 dark:bg-gray-800 bg-back dark:text-mainText/80 rounded-md p-8 flex flex-col justify-between">
                        <div className="my-auto flex flex-col items-center justify-center">
                          <div className="font-bold text-2xl text-center text-white/70">{psychiatrist?.firstName + " " + " " + psychiatrist?.lastName}</div>
                        </div>
                      </div>
                    </a>
                  </Link>
                )
                :
                <div className="text-warningText text-xl">
                  {data?.message}
                </div>
              }
            </>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
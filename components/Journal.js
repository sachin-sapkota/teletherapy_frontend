import axios from 'axios'
import React, { useRef } from 'react'
import useSWR, { mutate } from 'swr'

export default function Journal() {

    const journalTitle = useRef(null)
    const journalText = useRef(null)

    const { data, error } = useSWR(process.env.BACKEND + "/journal/list", async (url) => await axios.get(url, { withCredentials: true }))

    const submitJournal = async (e) => {
        try {
            const submitted = await axios.post(process.env.BACKEND + `/journal/add`, {
                journal: {
                    title: journalTitle.current.value,
                    text: journalText.current.value
                }
            }, { withCredentials: true })

            mutate(process.env.BACKEND + "/journal/list")
        } catch (e) {
            console.log(e)
        }
        e.target.reset()
    }

    return (
        <div className='text-white flex flex-col justify-center items-center min-h-screen py-20 px-24'>
            <form onSubmit={submitJournal} className='w-[1080px] p-r-[20px] bg-gray-800 rounded-md my-5 p-8'>
                What do you wish to record?
                <div className='gap-3 mt-4 flex flex-col'>
                    <div>Title:&nbsp;&nbsp;<input ref={journalTitle} className='text-black bg-gray-200 rounded-sm w-[400px]' type="text" required></input></div>
                    <textarea ref={journalText} className='bg-gray-200 text-black rounded-sm' rows="4" cols="50" required></textarea>
                </div>
                <button type='submit' className='bg-blue-500 mt-4 float-right p-1 rounded-lg transition-all hover:bg-blue-600'>Save</button>
            </form>
            <div className="journalWrapper">
                <div className="center-line">
                    <a href="#" className="scroll-icon"><i className="fas fa-caret-up"></i></a>
                </div>
                {data?.data?.data?.map((journal, i) =>
                    <div className={`row ${i % 2 == 0 ? "row-1" : "row-2"}`}>
                        <section>
                            <i className="icon fas fa-home"></i>
                            <div className="details">
                                <span className="title">{journal.title}</span>
                            </div>
                            <p>{journal.text}</p>
                            <div className="bottom">
                                <a href="#">Read more</a>
                            </div>
                            <div className='italic text-sm font-light mt-4'>Updated:&nbsp;{Date(journal.updatedAt).toLocaleString().split(" ").slice(0, 4).join(" ")}</div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    )
}

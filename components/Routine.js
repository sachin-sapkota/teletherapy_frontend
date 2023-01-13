import axios from 'axios'
import React, { useRef } from 'react'
import useSWR, { mutate } from 'swr'

export default function Routine() {
    const routineTime = useRef(null)
    const routineText = useRef(null)

    const { data, error } = useSWR(process.env.BACKEND + "/routine/list", async (url) => await axios.get(url, { withCredentials: true }))

    const submitRoutine = async (e) => {
        try {
            const submitted = await axios.post(process.env.BACKEND + `/routine/add`, {
                routine: {
                    time: routineTime.current.value,
                    text: routineText.current.value
                }
            }, { withCredentials: true })

            mutate(process.env.BACKEND + "/routine/list")
        } catch (e) {
            console.log(e)
        }
        e.target.reset()
    }

    return (
        <div className='text-white flex flex-col justify-center items-center min-h-screen py-20 px-24'>
            <form onSubmit={submitRoutine} className='w-[1080px] p-r-[20px] bg-gray-800 rounded-md my-5 p-8'>
                Add an activity.
                <div className='gap-3 mt-4 flex flex-col'>
                    <div>Time:&nbsp;&nbsp;<input ref={routineTime} className='text-black bg-gray-200 rounded-sm w-[150px]' type="text" required></input></div>
                    <textarea ref={routineText} className='bg-gray-200 text-black rounded-sm' rows="4" cols="50" required></textarea>
                </div>
                <button type='submit' className='bg-blue-500 mt-4 float-right p-1 rounded-lg transition-all hover:bg-blue-600'>Save</button>
            </form>
            <div className="journalWrapper">
                <div className="center-line">
                    <a href="#" className="scroll-icon"><i className="fas fa-caret-up"></i></a>
                </div>
                {data?.data?.data?.map((routine, i) =>
                    <div className={`row ${i % 2 == 0 ? "row-1" : "row-2"}`}>
                        <section>
                            <i className="icon fas fa-home"></i>
                            <div className="details">
                                <span className="title">{routine.time}</span>
                            </div>
                            <p>{routine.text}</p>
                            <div className='italic text-sm font-light mt-4'>{Date(routine.updatedAt).toLocaleString().split(" ").slice(0, 4).join(" ")}</div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    )
}

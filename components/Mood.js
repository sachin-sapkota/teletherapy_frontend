import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useSWR from 'swr'

export default function Mood() {
    const [emojiValue, setEmojiValue] = useState(0)
    const [errorMessage, setErrorMessage] = useState("")

    const { data, error } = useSWR(process.env.BACKEND + "/user/get-emoji", async (url) => await axios.get(url, { withCredentials: true }))

    useEffect(() => {
        if (typeof data !== "undefined") {
            if (data?.emoji) {
                setEmojiValue(data?.emoji?.value)
            }
        }
    }, [])


    const emojis = {
        "yummy": "😋",
        "smiling heartily ": "😍",
        "neutral": "😐",
        "confused": "😕",
        "surprised": "😮",
        "anxious": "😰",
        "crying": "😢",
        "tired": "😫",
        "yawning ": "🥱",
        "disapointed": "😞",
        "angry ": "😠",
        "smiling wickedly": "😈",
        "sick": "🤒",
        "exploding head": "🤯",
        "sleepy": "😴",
    }

    const emojisMap = Object.keys(emojis)

    const submitFeeling = (e) => {
        e.preventDefault()
        try {
            const res = axios.post(process.env.BACKEND + "/user/update-emoji", { value: emojiValue }, { withCredentials: true })
        } catch (e) {
            setErrorMessage(e.response?.data?.message)
        }
    }

    return (
        <div>
            <div className='py-5'>
                <div className='flex flex-col items-center'>
                    <div>{emojis[emojisMap[emojiValue]]}</div>
                    <div className='flex items-center gap-2'>
                        <input className='' type="range" min="0" max="14" value={emojiValue} onChange={(e) => {
                            setEmojiValue(e.target.value)
                        }} />
                        <div>
                            <button className='text-xs rounded-lg p-1 bg-gray-300 hover:bg-gray-400' onClick={submitFeeling}>Save</button>
                        </div>
                    </div>
                </div>
                <div className='text-xs w-fit m-auto text-gray-900 bg-blue-300 rounded-lg p-1 border-l-4 border-t-4 border-black my-2'>{emojisMap[emojiValue]}</div>
                <div className="text-red-900 text-center mt-5">{errorMessage}</div>
            </div>
        </div>
    )
}

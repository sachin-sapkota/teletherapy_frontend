import { useState } from "react";
import axios from "axios";

export default function Form({ form }) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [errorMessage, setErrorMessage] = useState("")
    const [answers, setAnswers] = useState(Array(form.length).fill(null))

    const changeQuestionNext = (e) => {
        e.preventDefault()
        setCurrentQuestion(currentQuestion + 1)
    }

    const changeQuestionPrev = (e) => {
        e.preventDefault()
        setCurrentQuestion(currentQuestion - 1)
    }

    const submitForm = async (e) => {
        e.preventDefault()
        console.log(process.env.BACKEND)
        let score = 0
        answers.forEach((ans, i) => {
            if (typeof ans !== "null") {
                score += ans
            }
        })

        try {
            // Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.
            const updatedScore = await axios.post(process.env.BACKEND + "/user/update-score", { score: score })
            console.log(updatedScore)
        } catch (e) {
            setErrorMessage(e.response?.data?.message)
        }
    }

    return (
        <div className="flex flex-col w-[500px] my-10 bg-blue-500 m-auto p-10 rounded-xl">
            <div className="my-5">{form[currentQuestion].question}</div>

            <form className="flex flex-col gap-2 ml-5">
                {form[currentQuestion].options.map((option, j) =>
                    <div key={j} className={`${answers[currentQuestion] === j ? "bg-blue-300" : "bg-white cursor-pointer"} transition-all p-2 rounded-md flex gap-2 items-center`} onClick={() => {
                        const newAnswers = Object.assign([...answers], {
                            [currentQuestion]: j
                        });
                        setAnswers(newAnswers)
                    }}>
                        <div className="w-5 h-5 rounded-full bg-blue-800 relative">
                            <div className="absolute m-auto w-2 h-2 rounded-full bg-black">
                            </div>
                        </div>
                        {option}
                    </div>
                )
                }
            </form >

            <div className="flex my-5 relative">
                {currentQuestion > 0 ?
                    <button className="absolute left-0" onClick={changeQuestionPrev}>Prev</button>
                    :
                    <></>
                }
                {currentQuestion < form.length - 1 ?
                    <button className="absolute right-0" onClick={changeQuestionNext}>Next</button>
                    :
                    <></>
                }
            </div>
            {
                currentQuestion >= form.length - 1 ?
                    <button className="mt-5" onClick={submitForm} >Submit</button>
                    :
                    <></>
            }
            <div className="text-red-900 text-center mt-5">{errorMessage}</div>
        </div >
    )
} 
/* eslint-disable no-unused-vars */
import axios from "axios"
import { useEffect, useReducer, useState } from "react"

const initialData = {
    loading: true,
    questions: {},
    error: false
}

const reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_SUCCESS": 
            return {
                loading: false,
                questions: action.payload,
                error: false
            }
        case "FETCH_ERROR": 
            return {
                loading: false,
                questions: {},
                error: "Someting went wrong!"
            }
        default:
            return state
    }
}

const Questions = () => {
    const [state, dispatch] = useReducer(reducer, initialData)
    const [activeButtonIndex, setActiveButtonIndex] = useState(0)
    const [step, setStep] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: response.data.results,
                })
            } catch (error) {
                dispatch({
                    type: 'FETCH_ERROR',
                })
            }
        }
        
        const delay = 1500

        const timerId = setTimeout(() => {
            fetchData()
        }, delay)

        return () => clearTimeout(timerId)
    }, [])

    const next = () => {
        if(step === 0) {
            return
        }
        setStep(prevStep => prevStep + 1)
    }
      
    let answersArray = [
        {
            answers: ["loading", "loading", "loading", "loading"]
        }
    ]

    if(!state.loading) {
        let triviaData = state.questions
        const result = triviaData.map(item => {
        const shuffledAnswers = [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5);
        
            return {
                question: item.question,
                correctAnswer: item.correct_answer,
                answers: shuffledAnswers,
            };
        });

        answersArray = result
    }

   

    return (
        <>
            <div className="question">
                    <div className="question-wrapper bg-white rounded-lg my-3 px-4 py-6">
                        <p>{state.loading ? 'Loading' : state.questions[step].question}</p>
                    </div>
                    <div className="question-list">
                        <ul>
                        {
                             answersArray[step].answers.map((item, index) => (
                                <li key={index + 1}>
                                    <button onClick={() => {
                                        setActiveButtonIndex(index + 1)
                                    }} className={`cursor-pointer w-full rounded-lg px-4 py-2 my-2 ${activeButtonIndex == index + 1 ? 'bg-black text-slate-200 outline-none ring ring-white': 'bg-slate-200 '} hover:bg-black hover:text-slate-200`}>{item}</button>
                                </li>
                             ))
                        }
                        </ul>
                    </div>
                    <div className="action flex">
                        <div className="text-white">
                            <span className="mr-5">Questions: <span className="font-bold text-green-700">{state.questions.length}</span></span>
                            <span>No: {step + 1}</span>
                        </div>
                        <button className="w-20 bg-sky-500 rounded-lg px-4 py-2 font-bold text-white block ml-auto hover:bg-sky-950">Next</button>
                    </div>
                </div>
        </>
    )
}

export default Questions
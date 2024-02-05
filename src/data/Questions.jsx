/* eslint-disable no-unused-vars */
import axios from "axios"
import { decode } from "html-entities"
import { useEffect, useMemo, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"

const initialData = {
    loading: true,
    questions: [],
    error: false,
}

const reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_SUCCESS": 
            return {
                loading: false,
                questions: action.payload || [],
                error: false,
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
    const [score, setScore] = useState(0)
    const navigateTo = useNavigate()

    // API CALLS
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Check if savedUserData exists in localStorage
                const savedUserData = localStorage.getItem('savedUserData');
                if (savedUserData) {
                    const userData = JSON.parse(savedUserData);
                    dispatch({
                        type: 'FETCH_SUCCESS',
                        payload: userData.questions,
                    });
                    setStep(userData.step);
                } else {
                    const response = await axios.get('https://opentdb.com/api.php?amount=8&category=19&difficulty=easy&type=multiple');
                    dispatch({
                        type: 'FETCH_SUCCESS',
                        payload: response.data.results,
                    });
                }
            } catch (error) {
                dispatch({
                    type: 'FETCH_ERROR',
                });
            }
        }
        
        const delay = 1500

        const timerId = setTimeout(() => {
            fetchData()
        }, delay)

        return () => clearTimeout(timerId)
    }, [])


    const answersArray = useMemo(() => {
        if (!state.loading) {
          let triviaData = state.questions;
          const result = triviaData.map((item) => {
            const shuffledAnswers = [
              ...item.incorrect_answers,
              item.correct_answer,
            ];
    
            return {
              question: item.question,
              correctAnswer: item.correct_answer,
              answers: shuffledAnswers,
            };
          });
          return result;
        }
        return [
          {
            answers: ["loading", "loading", "loading", "loading"],
          },
        ];
      }, [state.loading, state.questions]);

      const handleNext = useMemo(() => () => {
        const answerIndex = activeButtonIndex - 1

        const isCorrect = answersArray[step].correctAnswer == answersArray[step].answers[answerIndex]

        setScore(prevScore => (isCorrect ? prevScore + 1 : prevScore))
        setActiveButtonIndex(0)

        const finalScore = score + (isCorrect ? 1 : 0)
        const scoreInfo = {
            rightScore: finalScore,
            wrongScore: (step + 1) - finalScore,
            totalAnswer: step + 1,
            totalQuestion: state.questions.length,
        }

        localStorage.setItem('userScore', JSON.stringify(scoreInfo));

        // Save user data in localStorage
        const userData = {
            questions: state.questions,
            step: step + 1,
        };
        localStorage.setItem('savedUserData', JSON.stringify(userData));

        if (step + 1 === state.questions.length) {
            navigateTo('/logout')
        }
        setStep(prevStep => prevStep + 1)
    }, [activeButtonIndex, answersArray, step, score, navigateTo, state])

    return (
        <>
            <div className="question">
                    <div className="question-wrapper bg-white rounded-lg my-3 px-4 py-6">
                        <p>{state.loading ? 'Loading' : decode(state.questions[step].question, {level: 'html5'})}</p>
                    </div>
                    <div className="question-list">
                        <ul>
                        {
                             answersArray[step].answers.map((item, index) => (
                                <li key={index + 1}>
                                    <button onClick={() => {
                                        setActiveButtonIndex(index + 1)
                                    }} className={`cursor-pointer w-full rounded-lg px-4 py-2 my-2 ${activeButtonIndex == index + 1 ? 'bg-black text-slate-200 outline-none ring ring-white': 'bg-slate-200 '} hover:bg-black hover:text-slate-200`}>{decode(item, {level: 'html5'})}</button>
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
                        <button
                            onClick={handleNext}
                            className="w-20 bg-sky-500 rounded-lg px-4 py-2 font-bold text-white block ml-auto hover:bg-sky-950"
                        >
                            {step + 1 == state.questions.length ? 'Submit' : 'Next'}
                        </button>
                    </div>
                </div>
        </>
    )
}

export default Questions

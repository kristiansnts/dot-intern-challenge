import { useNavigate } from "react-router-dom"
import Navbar from "../../component/Navbar"

const FinalScore = () => {
    const userScore = localStorage.getItem('userScore') ? JSON.parse(localStorage.getItem('userScore')) : ""
    const titleMessage = (userScore) ? (userScore.totalAnswer < userScore.totalQuestion ? 'Time out!! Your Score is :' : 'Conratulation, you have answered all the questions. Your Score is :') : ""
    const navigateTo = useNavigate()

    const handleClick = () => {
        localStorage.setItem('lastTime', 300)
        localStorage.removeItem('userScore')
        localStorage.removeItem('savedUserData')
        navigateTo('/quizes')
    }

    return ( 
        <>
            <Navbar />
            <div className="min-h-screen w-full flex flex-col justify-center items-center">
                <div className="wrapper p-4 w-96 bg-green-600 rounded-lg">
                    <h1 className="text-center text-white p-3 mb-1 text-2xl border-b">{ titleMessage }</h1>
                    <div className="info flex justift-center p-3 mb-5 border-b">
                        <div className="score">
                            <h1 className="text-2xl text-white">Score</h1>
                            <ul className="text-white">
                                <li>Right Answer : {userScore.rightScore ? userScore.rightScore : ""}</li>
                                <li>Wrong Answer : {userScore.wrongScore ? userScore.wrongScore : ""}</li>
                                <li>Total Answer : {userScore.totalAnswer ? userScore.totalAnswer : ""}</li>
                            </ul>
                        </div>
                    </div>
                    <button 
                        className="w-full bg-white px-4 py-2 rounded-lg hover:bg-green-700 hover:border-2 hover:border-white hover:text-white hover:font-bold"
                        onClick={handleClick}
                    >
                    Start Again
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default FinalScore;
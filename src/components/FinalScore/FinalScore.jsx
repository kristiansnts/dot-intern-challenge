const FinalScore = () => {
    const userScore = localStorage.getItem('userScore') ? JSON.parse(localStorage.getItem('userScore')) : ""

    const titleMessage = (userScore) ? (userScore.totalAnswer < userScore.totalQuestion ? 'Time out!! Your Score is :' : 'Conratulation, you have answered all the questions. Your Score is :') : ""

    return ( 
        <>
            <div className="wrapper p-4 w-96 bg-gray-700 rounded-lg">
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
                <button className="w-full bg-white px-4 py-2 rounded-lg hover:bg-red-700 hover:text-white hover:font-bold">Log out</button>
            </div>
        </>
     );
}
 
export default FinalScore;
const FinalScore = () => {
    return ( 
        <>
            <div className="wrapper p-4 w-96 bg-gray-700 rounded-lg">
                <h1 className="text-center text-white p-3 mb-1 text-2xl border-b">Congratulations! You Answer All the question</h1>
                <div className="info flex justift-center p-3 mb-5 border-b">
                    <div className="score">
                        <h1 className="text-2xl text-white">Score</h1>
                        <ul className="text-white">
                            <li>Right Answer : </li>
                            <li>Wrong Answer : </li>
                            <li>Total Answer : </li>
                        </ul>
                    </div>
                </div>
                <button className="w-full bg-white px-4 py-2 rounded-lg hover:bg-red-700 hover:text-white hover:font-bold">Log out</button>
            </div>
        </>
     );
}
 
export default FinalScore;
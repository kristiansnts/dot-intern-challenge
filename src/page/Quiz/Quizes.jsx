import Timer from "../Timer/Timer";
import Questions from "../../data/Questions";
import { useState } from "react";
import { TimerContext } from "../../services/TimerContext";
import Navbar from "../../component/Navbar";

const Quizes = () => {
    const [seconds, setSeconds] = useState(localStorage.getItem('lastTime') || 300)

    return ( 
        <>
            <Navbar />
            <div className="min-h-screen w-full flex flex-col justify-center items-center">
                <div className="wrapper p-4 w-96 bg-green-600 rounded-lg">
                    <TimerContext.Provider value={[seconds, setSeconds]}>
                        <Timer />
                        <Questions />
                    </TimerContext.Provider>
                </div>
            </div>
        </>
     );
}
 
export default Quizes;
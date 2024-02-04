import Timer from "../Timer/Timer";
import Questions from "../../data/Questions";
import { useState } from "react";
import { TimerContext } from "../../services/TimerContext";

const Quizes = () => {
    const [seconds, setSeconds] = useState(localStorage.getItem('lastTime') || 300)

    return ( 
        <>
            <div className="wrapper p-4 w-96 bg-gray-700 rounded-lg">
                <TimerContext.Provider value={[seconds, setSeconds]}>
                    <Timer />
                    <Questions />
                </TimerContext.Provider>
            </div>
        </>
     );
}
 
export default Quizes;
import { useEffect, useState } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(300)
    
    useEffect(() => {
        
        if(seconds <= 0) {
            return
        }

        const timer = setInterval(() => {
            setSeconds(prevSecond => prevSecond - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [seconds])

    const formatTime = (inSeconds) => {
        const minutes = Math.floor(inSeconds / 60)
                            .toString()
                            .padStart(2, '0')

        const seconds = (inSeconds % 60).toString().padStart(2, '0')
        return `${minutes}:${seconds}`
    }

    return ( 
        <>
            <div className="timer text-center w-full bg-slate-200 rounded-lg">
                <h1>{formatTime(seconds)}</h1>
            </div>
        </>
     );
}
 
export default Timer;
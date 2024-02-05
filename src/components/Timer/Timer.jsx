/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { TimerContext } from "../../services/TimerContext";

const Timer = () => {
    const [seconds, setSeconds] = useContext(TimerContext)
    const navigateTo = useNavigate()

    
    useEffect(() => {
        
        if(seconds <= 0) {
            navigateTo('/logout')
        }

        const timer = setInterval(() => {
            setSeconds(prevSecond => prevSecond - 1)
        }, 1000)

        const handleTabClose = event => {
            event.preventDefault()

            localStorage.setItem('lastTime', seconds)
        }
        window.addEventListener('beforeunload', handleTabClose)

        return () => {
            clearInterval(timer)
            window.removeEventListener('beforeunload', handleTabClose)
        }
    }, [seconds])
    

    const formatTime = useMemo(() => (inSeconds) => {
        const minutes = Math.floor(inSeconds / 60)
                            .toString()
                            .padStart(2, '0')

        const seconds = (inSeconds % 60).toString().padStart(2, '0')
        return `${minutes}:${seconds}`
    }, [])

    return ( 
        <>
            <div className="timer text-center w-full bg-slate-200 rounded-lg">
                <h1>{formatTime(seconds)}</h1>
            </div>
        </>
     );
}
 
export default Timer;
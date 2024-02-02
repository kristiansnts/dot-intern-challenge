import { useState } from "react";
import Timer from "../Timer/Timer";

const Quizes = () => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0)

    return ( 
        <>
            <div className="wrapper p-4 w-96 bg-gray-700 rounded-lg">
                <Timer />
                <div className="question">
                    <div className="question-wrapper bg-white rounded-lg my-3 px-4 py-6">
                        <p>is Suidward Octopus</p>
                    </div>
                    <div className="question-list">
                        <ul>
                            <li className=""><button onClick={() => {
                                setActiveButtonIndex(1)
                            }} className={`cursor-pointer w-full rounded-lg px-4 py-2 my-2 ${activeButtonIndex == 1 ? 'bg-black text-slate-200 outline-none ring ring-white': 'bg-slate-200 '} hover:bg-black hover:text-slate-200`}>Answer A</button></li>
                            <li className=""><button onClick={() => {
                                setActiveButtonIndex(2)
                            }} className={`cursor-pointer w-full rounded-lg px-4 py-2 my-2 ${activeButtonIndex == 2 ? 'bg-black text-slate-200 outline-none ring ring-white': 'bg-slate-200 '} hover:bg-black hover:text-slate-200`}>Answer B</button></li>
                            <li className=""><button onClick={() => {
                                setActiveButtonIndex(3)
                            }} className={`cursor-pointer w-full rounded-lg px-4 py-2 my-2 ${activeButtonIndex == 3 ? 'bg-black text-slate-200 outline-none ring ring-white': 'bg-slate-200 '} hover:bg-black hover:text-slate-200`}>Answer C</button></li>
                            <li className=""><button onClick={() => {
                                setActiveButtonIndex(4)
                            }} className={`cursor-pointer w-full rounded-lg px-4 py-2 my-2 ${activeButtonIndex == 4 ? 'bg-black text-slate-200 outline-none ring ring-white': 'bg-slate-200 '} hover:bg-black hover:text-slate-200`}>Answer D</button></li>
                        </ul>
                    </div>
                    <button className="w-20 bg-sky-500 rounded-lg px-4 py-2 font-bold text-white block ml-auto hover:bg-sky-950">Next</button>
                </div>
            </div>
        </>
     );
}
 
export default Quizes;
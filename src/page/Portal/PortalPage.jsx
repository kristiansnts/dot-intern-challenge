import { useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar";

const PortalPage = () => {
    const navigate = useNavigate()
    const lastTime = localStorage.getItem('lastTime')
    const user = localStorage.getItem('userAdmin') || localStorage.getItem('newUser')
    const userScore = localStorage.getItem('userScore') ? JSON.parse(localStorage.getItem('userScore')).totalAnswer : ""

    const handleClick = () => {
        if(user) {
            navigate('/quizes')
        } else {
            navigate('/login')
        }
    }

    const handleStart = () => {
        if(user) {
            localStorage.setItem('lastTime', 300)
            localStorage.removeItem('userScore')
            localStorage.removeItem('savedUserData')
            navigate('/quizes')
        } else {
            navigate('/login')
        }
    }

    return ( 
        <>
            <Navbar />
            <main>
                <div className="hero min-h-screen w-full flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold my-5 text-green-600">Dot Quiz Challenge</h1>
                    {user && lastTime && userScore < 8 && <a onClick={handleClick} className="bg-sky-600 px-20 py-4 text-2xl mb-6 rounded-md cursor-pointer text-white font-bold hover:bg-sky-400">Resume</a>}
                    <a onClick={handleStart} className="bg-green-600 px-20 py-4 text-2xl rounded-md cursor-pointer text-white font-bold hover:bg-green-500">Start</a>
                </div>
            </main>
        </>
     );
}
 
export default PortalPage;
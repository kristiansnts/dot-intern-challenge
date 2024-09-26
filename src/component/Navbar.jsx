import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [user, setUser] = useState('')
    const navigate = useNavigate()
    

    useEffect(() => {
        if(localStorage.getItem('userAdmin')) {
            setUser(localStorage.getItem('userAdmin'))
        } else if(localStorage.getItem('newUser')) {
            setUser(localStorage.getItem('newUser'))
        }
    }, [])

    const handleClick = () => {
        if(user){
            navigate('/')
            window.location.reload()
            localStorage.clear()
        } else {
            navigate('/login')
        }
    }

    return ( 
        <header className="w-full shadow-md fixed">
        <nav className="container p-3 flex justify-between items-center w-full">
            <a href="/" className="logo">
                <img src={"/dot-icon.png"} alt="Logo" className="w-32" />
            </a>

            <div className="flex items-center gap-3">
                {user && <p className="text-green-600 font-bold">{user}</p>}
                <a className="login bg-green-600 px-7 py-2 rounded-md text-white cursor-pointer text-base hover:bg-green-500" onClick={handleClick}>
                    {user ? 'Log out' : 'Login'}
                </a>
            </div>
        </nav>
    </header>
     );
}
 
export default Navbar;
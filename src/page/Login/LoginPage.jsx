import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {
        register,
        resetField,
        handleSubmit
    } = useForm()

    function reset() {
        resetField('username')
        resetField('password')
    }

    const navigateTo = useNavigate()

    const onSubmit = (data) => {
        if(data.username == 'admin' && data.password == 'admin') {
            localStorage.setItem('userAdmin', data.username)
            navigateTo('/')
        } else if (data.username.length !== 0 && data.password == '123456') {
            localStorage.setItem('newUser', data.username)
            navigateTo('/')
        }
        reset()
    }

    return ( 
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="wrapper py-14 px-20 max-w-md h-[360px] text-center rounded-xl bg-green-600 text-white">
                    <h1 className="text-xl font-bold uppercase">Login</h1>
                    <p className="my-5">back to <a href="/" className="text-white font-bold underline">portal</a></p>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            className="block mb-2 mx-auto p-2 text-black rounded-md outline-none" 
                            type="text" 
                            placeholder="Username" 
                            {...register("username")}
                            />
                        <input 
                            className="block mb-2 mx-auto p-2 text-black rounded-md outline-none" 
                            type="password" 
                            placeholder="Password" 
                            {...register("password")}
                        />
                        <p className="text-sm my-5">Password: 123456</p>
                        <button type="submit" className="w-1/2 p-2 bg-white text-green-600 rounded-md hover:bg-green-600 hover:text-white hover:border-2 hover:border-white">Login</button>
                        
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default Login;
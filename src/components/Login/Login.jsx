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
            navigateTo('quizes')
        } else if (data.username.length !== 0 && data.password == '123456') {
            localStorage.setItem('newUser', data.username)
            navigateTo('quizes')
        }
        reset()
    }

    return ( 
        <>
            <div className="wrapper p-5 bg-slate-300 w-80 h-60 text-center rounded-md">
                <h1 className="text-xl font-bold mb-5 uppercase">Quiz APP Sign in</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        className="block mb-2 mx-auto p-2" 
                        type="text" 
                        placeholder="Username" 
                        {...register("username")}
                        />
                    <input 
                        className="block mb-2 mx-auto p-2" 
                        type="password" 
                        placeholder="Password" 
                        {...register("password")}
                    />
                    <p className="text-sm mb-2"> Username: random username, pass: 123456</p>
                    <button type="submit" className="w-1/2 p-2 bg-white hover:bg-black hover:text-white">Sign in</button>
                </form>
            </div>
        </>
     );
}
 
export default Login;
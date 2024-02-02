const Login = () => {
    return ( 
        <>
            <div className="wrapper p-5 bg-slate-300 w-80 h-60 text-center rounded-md">
                <h1 className="text-xl font-bold mb-5 uppercase">Quiz APP Sign in</h1>
                <form>
                    <input className="block mb-2 mx-auto p-2" type="text" placeholder="Username"/>
                    <input className="block mb-2 mx-auto p-2" type="password" placeholder="Password"/>
                    <button type="submit" className="my-5 w-1/2 p-2 bg-white hover:bg-black hover:text-white">Sign in</button>
                </form>
            </div>
        </>
     );
}
 
export default Login;
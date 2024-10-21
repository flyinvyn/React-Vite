import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
    const { children, title, type } = props
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    console.log(isDarkMode);


    return (
        <div className={`flex justify-center items-center min-h-screen ${isDarkMode && 'bg-slate-900'}`}>
            <div className="w-full max-w-xs">
                <button
                    className="absolute right-2 top-2 bg-blue-600 text-white px-2 py-1 rounded"
                    onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ? 'Light' : 'Dark'}
                </button>
                <h1 className="text-3xl text-blue-600 font-bold mb-2">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">Welcome, please enter your details</p>
                {children}
                {/* <p className="text-sm mt-3 text-center">
                    {type === "login" ? "Don't have an account?" : "Already have an account?"}
                    {type === "login" && (<Link to="/register" className="font-bold text-blue-500 mx-1">
                        Register
                    </Link>)}
                    {type === "register" && (<Link to="/login" className="font-bold text-blue-500 mx-1">
                        Login
                    </Link>)}
                </p> */}
                <Navigation type={type} />
            </div>
        </div>
    )
}

const Navigation = ({ type }) => {
    if (type === "login") {
        return (
            <p className="text-sm mt-3 text-center">
                Don't have an account?
                <Link to="/register" className="font-bold text-blue-500 mx-1">Register</Link>
            </p>
        )
    } else {
        return (
            <p className="text-sm mt-3 text-center">
                Already have an account?
                <Link to="/login" className="font-bold text-blue-500 mx-1">Login</Link>
            </p>
        )
    }
}

export default AuthLayout
import { FaMoon, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { NavLink } from "react-router";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import useTheme from "../hooks/useTheme";


const GlobalHeader = () => {
    const {theme, toggleTheme} = useTheme();
    const handleToogleTheme = () => {
        toggleTheme()
    }

    return (
        <header className="bg-white py-4 outline-b outline-gray-600 shadow-sm sticky top-0 z-50">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                <NavLink to="/">
                    <div className="flex items-center gap-2">
                        <h3 className="text-2xl text-blue-600"><FaShoppingBag /></h3>
                        <h2 className="text-xl font-semibold">ShopNow</h2>
                    </div>
                </NavLink>
                <div className="flex items-center gap-8">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
                        <h3 className="text-2xl"><IoHome /></h3>
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
                        <h3 className="text-2xl"><BiSolidShoppingBagAlt /></h3>
                    </NavLink>
                    <NavLink to="/carts" className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
                        <h3 className="text-2xl"><FaShoppingCart /></h3>
                    </NavLink>
                    <button className="text-2xl cursor-pointer" onClick={handleToogleTheme}>
                        {theme === "light" ? <FaSun /> : <FaMoon/>} 
                    </button>
                    <h3 className="text-2xl"><FaUserCircle /></h3>
                </div>
            </div>
        </header>
    )
}

export default GlobalHeader
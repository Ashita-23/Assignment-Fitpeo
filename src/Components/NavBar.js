import { FiSearch } from "react-icons/fi";
import { PiHandWavingDuotone } from "react-icons/pi";
const NavBar = ()=>{
    return(<div className="flex h-[4rem] items-center justify-between bg-slate-100 px-12">
        <div className="flex items-center ml-4 " > <span className="text-lg text-gray-700 px-1 mr-2">User Name  </span><PiHandWavingDuotone className="text-xl"/></div>
        <div className="flex items-center bg-white border">
            <button className="px-1"><FiSearch className="text-xl  text-gray-600"/></button>
            <input type="text" placeholder="Search" className="p-2 outline-none"/>
        </div>
    </div>)
}

export default NavBar 
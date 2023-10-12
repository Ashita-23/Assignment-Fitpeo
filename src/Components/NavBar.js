import { FiSearch } from "react-icons/fi";
const NavBar = ()=>{
    return(<div className="flex h-[4rem] border border-green-600">
         <p>user Name </p>
        <div>
            <input type="text"/>
            <button><FiSearch/>search</button>
        </div>
    </div>)
}

export default NavBar 
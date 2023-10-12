import {TbSettings2 , TbMessage2Question , TbDiscount2, TbChevronRight , TbChevronDown ,TbChevronUp} from "react-icons/tb";
import {AiOutlineUser } from "react-icons/ai";
import { SiMonkeytie,  } from "react-icons/si";
import { BsBox , BsWallet2 } from "react-icons/bs";
import { FaUserCircle} from "react-icons/fa";
const SideBar = ()=>{
    return(
        <div className="flex flex-col items-center border border-blue-800 w-[15%] h-[100%]">
            <div className="flex border w-[90%] border-red-500 p-2 my-2 text-xl font-semibold  items-center"><TbSettings2/><span className="ml-2">Dashboard</span></div>
            <ul className="border border-green-500 my-2 p-0  w-[90%] text-lg items-center">
                <li className="flex border border-red-500 p-2 bg-blue-300 items-center"> <SiMonkeytie/> <span className="ml-2">Dashboard</span> </li>
                <li className="flex items-center justify-between  hover:bg-slate-300 border border-red-500 p-2" ><div className="flex items-center"><BsBox/> <span className="ml-2" >Product</span></div><TbChevronRight/></li>
                <li className="flex items-center justify-between hover:bg-slate-300  border border-red-500 p-2 " ><div className="flex items-center"><AiOutlineUser/> <span className="ml-2" >Customers</span></div><TbChevronRight/> </li>
                <li className="flex items-center justify-between hover:bg-slate-300  border border-red-500 p-2" ><div className="flex items-center"><BsWallet2/><span className="ml-2" >Income </span></div><TbChevronRight/> </li>
                <li className="flex items-center justify-between  hover:bg-slate-300 border border-red-500 p-2" ><div className="flex items-center"><TbDiscount2/> <span className="ml-2" >Promote</span></div><TbChevronRight/> </li>
                <li className="flex items-center justify-between hover:bg-slate-300  border border-red-500 p-2" ><div className="flex items-center"><TbMessage2Question/> <span className="ml-2" >Help</span></div><TbChevronRight/></li>
            </ul>
            <div className="flex  items-center p-2 text-lg w-[90%] justify-evenly border  border-red-400 ">
               <FaUserCircle className="text-2xl"/>
               <div className="flex flex-col   ">
               <span className="text-lg font-semibold">Name</span>
               <span className="text-base ">working position</span>
               </div>
               <div className="flex" ><TbChevronDown/><TbChevronUp/></div>
            </div>
        </div>
    )
}

export default SideBar
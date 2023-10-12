import {TbSettings2 , TbMessage2Question , TbDiscount2, TbChevronRight , TbChevronDown ,TbChevronUp} from "react-icons/tb";
import {AiOutlineUser } from "react-icons/ai";
import { SiMonkeytie,  } from "react-icons/si";
import { BsBox , BsWallet2 } from "react-icons/bs";
import user from "../Assets/user.jpg"
const SideBar = ()=>{
    return(
        <div className="flex flex-col items-center border pb-[4rem] bg-[#005073] text-white border-blue-800 w-[15%] h-[65rem]">
            <div className="flex w-[90%]  p-2 mb-2 mt-4 text-2xl  font-semibold  items-center"><TbSettings2/><span className="ml-2 tracking-wider">Dashboard</span></div>
            <ul className=" mt-2 p-0 mb-4 w-[90%] h-3/4 text-lg items-center">
                <li className="flex my-1 rounded-md p-2 bg-[#32728F]  items-center"> <SiMonkeytie/> <span className="ml-2">Dashboard</span> </li>
                <li className="flex my-1 items-center justify-between  hover:bg-[#32728F] rounded-md p-2" ><div className="flex items-center"><BsBox className="text-lg"/> <span className="ml-2" >Product</span></div><TbChevronRight/></li>
                <li className="flex my-1 items-center justify-between hover:bg-[#32728F]  rounded-md p-2 " ><div className="flex items-center"><AiOutlineUser className="text-xl"/> <span className="ml-2" >Customers</span></div><TbChevronRight/> </li>
                <li className="flex my-1 items-center justify-between hover:bg-[#32728F] rounded-md p-2" ><div className="flex items-center"><BsWallet2 className="text-lg"/><span className="ml-2" >Income </span></div><TbChevronRight/> </li>
                <li className="flex my-1 items-center justify-between  hover:bg-[#32728F] rounded-md p-2" ><div className="flex items-center"><TbDiscount2 className="text-xl" /> <span className="ml-2" >Promote</span></div><TbChevronRight/> </li>
                <li className="flex my-1 items-center justify-between  hover:bg-[#32728F]    rounded-md p-2" ><div className="flex items-center"><TbMessage2Question className="text-xl" /> <span className="ml-2" >Help</span></div><TbChevronRight/></li>
            </ul>
            <div className="flex items-center mt-4 p-2 text-lg w-[90%] justify-evenly bg-[#32728F] rounded-md  ">
              <img src={user} alt="user" className="w-[50px] rounded-full" />
               <div className="flex flex-col  ">
               <span className="text-lg font-medium leading-3">Name</span>
               <span className="text-base text-gray-300  ">Working position</span>
               </div>
               <div className="flex" ><TbChevronDown/><TbChevronUp/></div>
            </div>
        </div>
    )
}

export default SideBar
import NavBar from "./NavBar"
import { RiExchangeDollarLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BsBagCheck } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { AiOutlineArrowUp , AiOutlineArrowDown } from "react-icons/ai";


const  MainCounter = ()=>{
    return(<div className="w-[100%] border border-gray-900">
  <NavBar></NavBar>
  <div className="border border-pink-400  bg-slate-100">
  <div className="w-[100%]  h-[auto] my-4 flex justify-evenly  px-12">

  <div className="flex items-center rounded-md mx-4 p-2 bg-white h-[10rem] w-2/12">
  <div className="h-[100px] w-[100px] rounded-full bg-green-300 flex items-center justify-center ml-2"><RiExchangeDollarLine className="text-[60px] text-green-800"/></div>
  <div className=" p-2">
    <span className="text-gray-500">Earning</span>
    <p className="flex items-center font-semibold text-xl"><BiDollar/>198k</p>
    <p className="text-green-600 font-medium flex items-center"><AiOutlineArrowUp/> 37.8%<span className="text-black pl-1 font-normal">this month</span></p>
  </div>
  </div>

  <div className="flex items-center rounded-md  mx-4 p-2 bg-white h-[10rem] w-2/12">
  <span className="h-[100px] w-[100px] rounded-full bg-violet-300 flex items-center justify-center ml-2"><CgNotes className="text-[60px] text-violet-800"/></span>
  <div  className=" p-2">
    <span className="text-gray-500">Orders</span>
    <p className="flex items-center font-semibold text-xl"><BiDollar/>2.k</p>
    <p className="text-red-600 font-medium flex items-center"><AiOutlineArrowDown/>2%<span className="text-black pl-1 font-normal">this month</span></p>
  </div>
  </div>

 <div className="flex items-center rounded-md  mx-4 p-2 bg-white h-[10rem] w-2/12">
  <div className="h-[100px] w-[100px] rounded-full bg-blue-300 flex items-center justify-center ml-2"><MdOutlineAccountBalanceWallet className="text-[60px] text-blue-800"/></div>
  <div  className=" p-2">
    <span className="text-gray-500">Balance</span>
    <p className="flex items-center font-semibold text-xl"><BiDollar/>2.4k</p>
    <p className="text-red-600 font-medium flex items-center"><AiOutlineArrowDown/>2%<span className="text-black pl-1 font-normal">this month</span></p>
  </div>
  </div>

 <div className="flex items-center rounded-md  mx-4 p-2 bg-white h-[10rem] w-2/12">
  <div className="h-[100px] w-[100px] rounded-full bg-pink-300 flex items-center justify-center ml-2"><BsBagCheck className="text-[60px] text-pink-800"/></div>
  <div  className=" p-2">
    <span className="text-gray-500">Total Sales </span>
    <p className="flex items-center font-semibold text-xl"><BiDollar/>89k</p>
    <p className="text-green-600 font-medium flex items-center"><AiOutlineArrowUp/>11%<span className="text-black pl-1 font-normal">this week</span></p>
  </div>
  </div>

  </div>
  </div>
    </div>)
}

export default MainCounter
import NavBar from "./NavBar"
import DashboardCards from "./DashboardCards"
import DashboardBarGraph from "./DashboardBars"
import DashboardPaiChart from "./DashboardpaiCart"
import ProductCounter from "./productCounter"



const  MainCounter = ()=>{
    return(<div className="w-[100%] border border-gray-900">
  <NavBar></NavBar>
  <div className="border border-pink-400 w-[100%]  bg-slate-100">
<DashboardCards/>
<div className="flex justify-evenly border border-violet-400 m-2" >
<DashboardBarGraph/>
<DashboardPaiChart/>
</div>
<div>
  <ProductCounter />
</div>
  </div>
    </div>)
}

export default MainCounter
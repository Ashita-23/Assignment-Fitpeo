import { IoIosArrowDown } from "react-icons/io";
import {BarChart,Bar,XAxis,Tooltip} from "recharts"


const DashboardBarGraph = ()=>{
  
  const GraphData = [
    {
      months:"Jav",
      sales:5,
    },
    {
      months:"Feb",
      sales:4
    },
    {
      months:"Mar",
      sales:8
    },
    {
      months:"Apr",
      sales:6
    },
    {
      months:"May",
      sales:7
    },
    {
      months:"Jun",
      sales:3
    },
    {
      months:"Jul",
      sales:7
    },
    {
      months:"Aug",
      sales:9
    },
    {
      months: "Sep",
      sales:8
    },
    {
      months:"Oct",
      sales:7
    },
    {
      months:"Nov",
      sales:6
    },
    {
      months:"Dec",
      sales:7
    },
  ]

  // const barStyle = {
  //   fill:"#8199F8",
  //   borderRadius : "15px",
  // }

    return(<>
  <div className="border border-red-700 w-6/12 ml-8">
    <div className="flex border border-blue-950 items-center justify-between px-6 py-3">
    <div className="">
        <p className="text-2xl font-semibold">Overview</p>
        <p className="text-gray-500">Manthly Earning</p>
    </div>
    <button className="flex items-center bg-slate-300 px-3 py-2 rounded-md text-gray-600 font-medium ">Quaterly <IoIosArrowDown/></button>
    </div>
    <div className="border border-green-700 p-4 pl-5">
{/* <ResponsiveContainer width={400} height={600}> */}
<BarChart data={GraphData} width={850} height={400}>
<XAxis dataKey={"months"}></XAxis>
<Tooltip></Tooltip>
  <Bar dataKey={"sales"} fill="#8884d8"></Bar>
</BarChart>
{/* // </ResponsiveContainer> */}
</div>
  </div>
    </>)
}

export default DashboardBarGraph
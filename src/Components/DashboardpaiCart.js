import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const DashboardPaiChart = ()=>{

const PieChartData = [
    {     
        name:"C1"  ,
        sales:65,
    },
    {
        name:"C2"  ,
        sales:140,
    },
    {
        name:"C3"  ,
        sales:155,
    }
]
const COLORS = ['#ff1493', '#bcbcf2', '	#bf3eff'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
}

    return(<div className="border flex flex-col items-center border-purple-600 w-3/12">
        <div className="p-3 w-[100%] border border-b-2">
            <p className="font-semibold text-2xl">Customers</p>
            <p className="text-medium text-gray-500">Customers that buy products</p>
        </div>
        <div >
        <PieChart width={300} height={300}>
          <Pie className='relative'
            data={PieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="sales"
          >
           <Cell className='' key={`1001`} fill={'#ff1493'} />
           <Cell key={`0011`} fill={'#bcbcf2'} />
           <Cell key={`2001`} fill={'	#bf3eff'} />
            {/* {PieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />

            ))} */}
          </Pie>
        </PieChart>
        <div className='w-[120px] h-[120px] flex flex-col items-center justify-center bg-white absolute mt-[-210px] ml-[90px] rounded-full'>
    <p><span className='text-xl font-bold'>65%</span></p>
    <p className='text-base font-medium '>Total New </p>
    <p className='text-base font-medium'>Customers </p>
        </div>
        </div>
    </div>)
}

export default DashboardPaiChart
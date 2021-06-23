import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const data = [
  {name: 'Page A', uv: 4000, price: 2400, amt: 2400},
  {name: 'Page B', uv: -3000, price: 1398, amt: 2210},
  {name: 'Page C', uv: -2000, price: -9800, amt: 2290},
  {name: 'Page D', uv: 2780, price: 3908, amt: 2000},
  {name: 'Page E', uv: -1890, price: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, price: -3800, amt: 2500},
  {name: 'Page G', uv: 3490, price: 4300, amt: 2100},
];

const BarChartStackedBySign = () => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data} stackOffset="sign"
              margin={{top: 10, right: 0, left: -15, bottom: 0}}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend/>
      <ReferenceLine y={0} stroke='#000'/>
      <Bar dataKey="price" fill="#003366" stackId="stack"/>
      <Bar dataKey="uv" fill="#FE9E15" stackId="stack"/>
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartStackedBySign;

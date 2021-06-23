import React from "react";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import data from "./data";

const StackedAreaChart = () => (
  <ResponsiveContainer width="100%" height={200}>
    <AreaChart data={data}
               margin={{top: 10, right: 0, left: -15, bottom: 0}}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Area type='monotone' dataKey='uv' stackId="1" fillOpacity={1} stroke='#003366' fill='#003366'/>
      <Area type='monotone' dataKey="price" stackId="1" fillOpacity={1} stroke='#59AA2B' fill='#59AA2B'/>
      <Area type='monotone' dataKey='amt' stackId="1" fillOpacity={1} stroke='#FE9E15' fill='#FE9E15'/>
    </AreaChart>
  </ResponsiveContainer>
);

export default StackedAreaChart;

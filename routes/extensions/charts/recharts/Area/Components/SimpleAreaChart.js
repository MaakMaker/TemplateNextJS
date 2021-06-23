import React from "react";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import data from "./data";

const SimpleAreaChart = () => (
  <ResponsiveContainer width="100%" height={200}>
    <AreaChart data={data}
               margin={{top: 10, right: 0, left: -15, bottom: 0}}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Area type='monotone' dataKey='uv' fillOpacity={1} stroke='#003366' fill='#003366'/>
    </AreaChart>
  </ResponsiveContainer>
);

export default SimpleAreaChart;

import React from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import data from "./data";

const LineBarAreaComposedChart = () => (
  <ResponsiveContainer width="100%" height={200}>
    <ComposedChart data={data}
                   margin={{top: 10, right: 0, left: -15, bottom: 0}}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Tooltip/>
      <Legend/>
      <CartesianGrid stroke='#f5f5f5'/>
      <Area type='monotone' dataKey='amt' fill='#FE9E15' stroke='#FE9E15'/>
      <Bar dataKey="price" barSize={20} fill='#003366'/>
      <Line type='monotone' dataKey='uv' stroke='#59AA2B'/>
    </ComposedChart>
  </ResponsiveContainer>
);

export default LineBarAreaComposedChart;

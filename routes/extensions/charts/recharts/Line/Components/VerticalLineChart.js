import React from "react";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

import data from "./data";

const VerticalLineChart = () => (
  <ResponsiveContainer width="100%" height={200}>
    <LineChart layout="vertical" data={data}
               margin={{top: 10, right: 0, left: -13, bottom: 0}}>
      <XAxis type="number"/>
      <YAxis dataKey="name" type="category"/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend/>
      <Line dataKey="price" stroke="#003366"/>
      <Line dataKey="uv" stroke="#FE9E15"/>
    </LineChart>
  </ResponsiveContainer>
);

export default VerticalLineChart

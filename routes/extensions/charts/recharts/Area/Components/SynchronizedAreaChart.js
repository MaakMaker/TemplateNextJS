import React from "react";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import data from "./data";

const SynchronizedAreaChart = () => (
  <ResponsiveContainer width="100%">
    <div>
      <p className="mb-4">A demo of synchronized AreaCharts</p>
      <div className="mb-4">

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data} syncId="anyId"
                     margin={{top: 10, right: 0, left: -15, bottom: 0}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area type='monotone' dataKey='uv' fillOpacity={1} stroke='#003366' fill='#003366'/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="mb-4">Maybe some other content</p>
      <div className="mb-4">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data} syncId="anyId"
                     margin={{top: 10, right: 0, left: -15, bottom: 0}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area type='monotone' dataKey="price" fillOpacity={1} stroke='#FE9E15' fill='#FE9E15'/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  </ResponsiveContainer>
);

export default SynchronizedAreaChart;

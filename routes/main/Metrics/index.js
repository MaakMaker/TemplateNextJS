import React from "react";
import {Col, Row} from "antd";
import {Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip} from "recharts";

import IconWithTextCard from "../../../app/components/Metrics/IconWithTextCard";
import ChartCard from "../../../app/components/Metrics/ChartCard";
import GrowthCard from "../../../app/components/Metrics/GrowthCard";
import EcommerceStatus from "../../../app/components/Metrics/EcommerceStatus";
import TrafficRaiseCard from "../../../app/components/Metrics/TrafficRaiseCard";
import TotalEncomeCard from "../../../app/components/Metrics/TotalEncomeCard";
import QueriesCard from "../../../app/components/Metrics/QueriesCard";

import {
  growth2Data,
  increamentData,
  increamentRevenueData,
  lineData2,
  revenueData,
  trafficRaiseData
} from "../../../public/data/metricsData";

const Metrics = () => {
  return (
    <>
      <Row>
        <Col xl={6} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
          <IconWithTextCard icon="orders" iconColor="geekblue" title="2,380" subTitle="Orders this year"/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
          <IconWithTextCard icon="revenue-new" iconColor="primary" title="2,380" subTitle="Revenue this year"/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
          <IconWithTextCard icon="visits" iconColor="geekblue" title="2,380" subTitle="Visits this year"/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
          <IconWithTextCard icon="queries" iconColor="geekblue" title="2,380" subTitle="Queries this year"/>
        </Col>

        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard title="84" children={
            <ResponsiveContainer width="100%" height={75}>
              <AreaChart data={increamentData}
                         margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <Tooltip/>
                <defs>
                  <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#163469" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#FE9E15" stopOpacity={0.9}/>
                  </linearGradient>
                </defs>
                <Area dataKey="price" strokeWidth={0} stackId="2" stroke='#4D95F3' fill="url(#color3)" fillOpacity={1}/>
              </AreaChart>
            </ResponsiveContainer>} styleName="up" desc="Increament in Active users"/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard title="38" children={
            <ResponsiveContainer width="100%" height={75}>
              <AreaChart data={increamentRevenueData}
                         margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <Tooltip/>
                <defs>
                  <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#4ECDE4" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#06BB8A" stopOpacity={0.9}/>
                  </linearGradient>
                </defs>

                <Area dataKey="revenue" type='monotone' strokeWidth={0} stackId="2" stroke='#4D95F3' fill="url(#color4)"
                      fillOpacity={1}/>
              </AreaChart>
            </ResponsiveContainer>} styleName="up" desc="Extra revenue from last year"/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard title="38" children={
            <ResponsiveContainer width="100%" height={75}>
              <AreaChart data={increamentData}
                         margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <Tooltip/>
                <defs>
                  <linearGradient id="color5" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e81a24" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#FEEADA" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
                <Area dataKey="price" strokeWidth={0} stackId="2" stroke='#FEEADA' fill="url(#color5)" fillOpacity={1}/>
              </AreaChart>
            </ResponsiveContainer>} styleName="down" desc="Less orders from past year"/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard title="44" children={
            <ResponsiveContainer width="100%" height={75}>
              <LineChart data={lineData2}
                         margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                <Tooltip/>
                <Line dataKey="traffic" stroke="#038FDE" dot={{stroke: '#FEA931', strokeWidth: 2}}/>
              </LineChart>
            </ResponsiveContainer>} styleName="up" desc="Traffic raise from past year"/>
        </Col>

        <Col xl={4} lg={8} md={8} sm={12} xs={24}>
          <EcommerceStatus color="orange" icon="orders" title="2,380" colorTitle="geekblue"
                           subTitle="Orders this year" colorSubTitle="geekblue"/>
        </Col>
        <Col xl={4} lg={8} md={8} sm={12} xs={24}>
          <EcommerceStatus color="geekblue" icon="revenue-new" title="$9,623" colorTitle="primary"
                           subTitle="Revenue this year" colorSubTitle="grey"/>
        </Col>
        <Col xl={4} lg={8} md={8} sm={12} xs={24}>
          <EcommerceStatus icon="visits" title="32,567" colorTitle="primary" subTitle="Web visits this year"
                           colorSubTitle="grey"/>
        </Col>
        <Col xl={4} lg={8} md={8} sm={12} xs={24}>
          <GrowthCard bgColor="white" title="92" children={
            <ResponsiveContainer width="100%" height={130}>
              <AreaChart data={revenueData}
                         margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <Tooltip/>
                <defs>
                  <linearGradient id="color2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#06BC8D" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#05C9D0" stopOpacity={0.9}/>
                  </linearGradient>
                </defs>
                <Area type='monotone' strokeWidth={0} dataKey="revenue" stackId="2" stroke='#4D95F3' fill="url(#color2)"
                      fillOpacity={1}/>
              </AreaChart>
            </ResponsiveContainer>} styleName="up" desc="Growth in revenue"/>
        </Col>
        <Col xl={4} lg={8} md={8} sm={12} xs={24}>
          <GrowthCard textColor="white" bgColor="geekblue" title="07" children={
            <ResponsiveContainer width="100%" height={130}>
              <AreaChart data={trafficRaiseData}
                         margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <Tooltip/>
                <defs>
                  <linearGradient id="color1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#61B1E4" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#867AE5" stopOpacity={0.9}/>
                  </linearGradient>
                </defs>
                <Area dataKey="traffic" strokeWidth={0} stackId="2" stroke='#867AE5' fill="url(#color1)"
                      fillOpacity={1}/>
              </AreaChart>
            </ResponsiveContainer>} styleName="up" desc="Traffic raise"/>
        </Col>
        <Col xl={4} lg={8} md={8} sm={12} xs={24}>
          <GrowthCard bgColor="white" title="38" children={
            <ResponsiveContainer width="100%" height={130}>
              <AreaChart data={growth2Data}
                         margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <Tooltip/>
                <Area type='monotone' dataKey="revenue" stackId="2" stroke='#E81D27' fill="#E81D27" fillOpacity={1}/>
              </AreaChart>
            </ResponsiveContainer>} styleName="down" desc="Growth in revenue"/>
        </Col>

        <Col xl={8} lg={12} md={12} sm={12} xs={24}>
          <TrafficRaiseCard/>
        </Col>
        <Col xl={8} lg={12} md={12} sm={12} xs={24}>
          <TotalEncomeCard/>
        </Col>
        <Col xl={8} lg={12} md={12} sm={12} xs={24}>
          <QueriesCard/>
        </Col>
      </Row>

    </>
  );
};
export default Metrics;

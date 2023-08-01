"use client"
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data = [
    {
      name: 'T2',
      interest: 1000000,
    },
    {
      name: 'T3',
      interest:1500000,
    },
    {
      name: 'T4',
        interest: 1200000
    },
    {
      name: 'T5',
      interest: 2480000,
      
    },
    {
      name: 'T6',
      interest:3000000
    },
    {
      name: 'T7',
      interest: 6000000
    },
  ];

const CustomYAxisTick = (props:any) => {
    const { x, y, payload } = props;
    // Format the tick value (assuming payload.value is a number representing millions)
    const formattedValue = (payload.value / 1000000).toFixed(1) + 'M';
  
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={0} textAnchor="end" fill="#666" transform="rotate(0)">
          {formattedValue}
        </text>
      </g>
    );
};

const ChartComponents = () => {
    return (
        <div className='w-2/3 h-full bg-waikawa-gray-100 rounded-3xl 
                        flex justify-center items-center
                        shadow-2xl'
        >
            <ResponsiveContainer width="100%" height="100%" >
                <LineChart
                    width={600}
                    height={350}
                    data={data}
                    margin={{
                        top: 40,
                        right: 40,
                        left: 40,
                        bottom: 20,
                    }}
              
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tick={CustomYAxisTick}/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="interest" name="lãi" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartComponents
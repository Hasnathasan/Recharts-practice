import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const Charts = () => {
  let students = [
    { id: 1, name: "John Doe", physics: 85, chemistry: 68, math: 75 },
    { id: 2, name: "Jane Doe", physics: 99, chemistry: 80, math: 92 },
    { id: 3, name: "Alice Smith", physics: 70, chemistry: 85, math: 80 },
    { id: 4, name: "Bob Johnson", physics: 95, chemistry: 75, math: 90 },
    { id: 5, name: "Sarah Lee", physics: 80, chemistry: 85, math: 70 },
    { id: 6, name: "Tommy Lee", physics: 45, chemistry: 90, math: 85 },
    { id: 7, name: "Samantha Smith", physics: 85, chemistry: 50, math: 90 },
    { id: 8, name: "Michael Johnson", physics: 90, chemistry: 85, math: 75 },
    { id: 9, name: "Emily Davis", physics: 80, chemistry: 75, math: 90 },
    { id: 10, name: "Daniel Kim", physics: 95, chemistry: 70, math: 80 },
  ];

  return (
    <div className="w">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Charts;

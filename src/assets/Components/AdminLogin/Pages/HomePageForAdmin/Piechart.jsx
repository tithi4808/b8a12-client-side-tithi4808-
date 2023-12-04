import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";

const Pichart = () => {
  const [data, setData] = useState([]);
  const [totalReturnable, setTotalReturnable] = useState(0);
  const [totalNonReturnable, setTotalNonReturnable] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/allassets")
      .then((res) => res.json())
      .then((assets) => {
        const returnableItems = assets.filter(
          (item) => item.Asset_Type === "Returnable"
        );
        const nonReturnableItems = assets.filter(
          (item) => item.Asset_Type === "NonReturn"
        );

        setTotalReturnable(returnableItems.length);
        setTotalNonReturnable(nonReturnableItems.length);

        setData([
          { name: "Returnable", value: returnableItems.length },
          { name: "Non-Returnable", value: nonReturnableItems.length },
        ]);
      })
      .catch((error) =>
        console.error("Error fetching assets data:", error)
      );
  }, []);

  const COLORS = ["#cea9bc", "#0a417a"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="my-20">
        <h3 className="text-4xl font-bold mb-4 text-center">Returnable and Nonreturnable items percentage</h3>
      <div className="flex justify-center items-center">
        <div className="mt-10">
          <ResponsiveContainer width={400} height={400} className="text-center">
            <PieChart width="100%" height={600}>
              <Legend align="top" />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={140}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Pichart;

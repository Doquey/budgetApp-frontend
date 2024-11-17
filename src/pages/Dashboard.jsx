import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
// vou incluir o header e o footer em cada page.

function Dashboard() {
  const [data, setData] = useState([]);

  const myData = [
    {
      user: "Luis",
      creditCardExpenses: [
        {
          name: "Açai",
          category: "Comida Não essencial",
          value: 150,
        },
        {
          name: "Fogão",
          category: "Utilidades Casa",
          value: 800,
        },
        {
          name: "Geladeira",
          category: "Utilidades Casa",
          value: 2600,
        },
      ],
      otherExpenses: [
        {
          name: "Caderno",
          category: "Aprendizado",
          value: 20,
        },
        {
          name: "Ventilador",
          category: "Utilidades Casa",
          value: 50,
        },

        {
          name: "Mochila",
          category: "Aprendizado",
          value: 150,
        },
      ],
    },
  ];

  const fetchData = () => {
    setData(myData);
  };

  return (
    <>
      <div className="container">
        <div className="flex align-middle">
          <h1> Your Dashboard</h1>
          <Button>Show Data</Button>
          <BarChart
            xAxis={[
              { scaleType: "band", data: ["group A", "group B", "group C"] },
            ]}
            series={[
              { data: [4, 3, 5] },
              { data: [1, 6, 3] },
              { data: [2, 5, 6] },
            ]}
            width={500}
            height={300}
          ></BarChart>
        </div>
      </div>
      ;
    </>
  );
}

export default Dashboard;

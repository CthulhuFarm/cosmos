import ReactApexChart from "react-apexcharts";
import React, { useState } from "react";

const Chart = () => {
  const [ state, setState ] = useState({
    series: [30, 40, 20],
    options: {
      chart: {
        type: 'pie',
      },
      legend: {
        show: false
      }
    },
  });

  return (
    <div className="mr-2">
      <ReactApexChart 
        options={state.options}   
        series={state.series} 
        type="pie" 
        width={120}
      />
    </div>
  )
  }

  export default Chart


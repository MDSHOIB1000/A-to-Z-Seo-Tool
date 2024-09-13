import React, { useState } from 'react'
import Chart from 'react-apexcharts'
const ReportsCharts = () => {
 const [data, setdata]=useState({
    
series: [
    {
        name: "sales",
        data: [31, 40, 28, 51, 42, 82, 56]
    },
    {
        name: "Revenue",
        data: [11, 32, 45, 32, 34, 52, 41]
    },
    {
        name: "customers",
        data: [15, 11, 32, 18, 9, 24, 11]
    }
],
  options:{
    chart: {
        height: 350,
         type: 'area',
         toolbar: {
            show: false,
         }
    },
    markers: {
        size: 4,
    },
    // colors: ['#2E93fA', '#66DA26', '#546E7A','#ff771d'],
    colors: ['#4154f1', '#2eca6a','#546E7A'],
    fill: {
        type: 'gradient' ,
        gradient: {
            // shade: 'dark',
            // gradientToColors: [ '#FDD835'],
            shadeIntensity: 1,
            // type: 'horizontal',
            opacityFrom: 0.3,
            opacityTo: 0.4,
            stops: [0, 90, 100]
          },
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'datetime',
        categories: [
            '2023-01-01T00:00:00.000Z',
            '2023-02-01T00:00:00.000Z',
            '2023-03-01T00:00:00.000Z',
            '2023-04-01T00:00:00.000Z',
            '2023-05-01T00:00:00.000Z',
            '2023-06-01T00:00:00.000Z',
            '2023-07-01T00:00:00.000Z'
          ]
       
      },
      tooltip:{
        x: {
           
            format: 'dd/MM/yy hh:MM',
           
        },
      }
    
  }
  
 })

  return (
    <div className='apexChart'>
        <Chart 
        
        options={data.options}
        series={data.series}
        type={data.options.chart.type}
        height={data.options.chart.height}
        />

    </div>
  )
}

export default ReportsCharts
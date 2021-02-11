import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'
const data = {
  labels: ['Feb','Mar','Apr','May'],
  datasets: [
    {
      label: 'Total',
      data: [530,280,140,70],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Used',
      data: [380,250,110,50],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: 'Free',
      data: [280,210,80,25],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false
        }
      }
    ]
  },
}

const MemmoryUsage = () => (
  <>
    <div className='header custom-Card'>
      <h4 className='title text-left'>Memory Usage</h4>
    <Bar data={data} options={options} />
    </div>
  </>
)

export default MemmoryUsage
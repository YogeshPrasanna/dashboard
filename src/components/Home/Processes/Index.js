import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'

const data = {
  labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: 'processes',
      data: [...Array(30)].map(() => Math.floor(Math.random() * 9)),
      fill: false,
      lineTension: 0,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
    {
        datalabels: {
            labels: {
                title: null
            }
        }
    }
  ],
}

const options = {
    legend: {
        display: false
    },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        gridLines: {
            drawOnChartArea: false
          }
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

const Processes = () => (
  <>
    <div className='header'>
        <Line data={data} options={options} />
    </div>
  </>
)

export default Processes
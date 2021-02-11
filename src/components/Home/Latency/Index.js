import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'
import {  Row, Col } from "react-bootstrap";

const data = {
  labels: [...Array(30)].map(() => ""),
  datasets: [
    {
      label: '',
      data: [...Array(30)].map(() => Math.floor(Math.random() * 9) + 1 ),
      backgroundColor: [...Array(30)].map(() => "orange"),
      borderWidth: 1,
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
        gridLines: {
            drawOnChartArea: false
        },
        scaleLabel: {
            display: false,
            labelString: "Normalized/Indexed Data",
        },
      },
    ],
    xAxes: [
        {
            gridLines: {
                drawOnChartArea: false
            },
            scaleLabel: {
                display: false,
                labelString: "Normalized/Indexed Data",
            },
        }
      ]
  },
}

const Latency = () => (
  <>
    <div className='header custom-Card' style={{marginTop: "15px"}}>
    <Row>
        <Col xs={8} md={8} lg={8}>
            <h4 className='title text-left text-secondary'>Latency</h4>
        </Col>
        <Col xs={4} md={4} lg={4}>
            <h5 className='title text-info'>2.3 ms</h5>
        </Col>
    </Row>
      <Bar data={data} options={options} />
    </div>
  </>
)

export default Latency
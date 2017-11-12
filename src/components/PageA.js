import React, { Component } from 'react'
import {LineChart, XAxis, Tooltip, CartesianGrid, Line} from 'recharts'
// import {Button} from 'antd'
export default class PageA extends Component {
  render() {
    return (
      <div>
        页面 A
        {/* <Button>default</Button> */}
        <div>
        <LineChart
          width={400}
          height={400}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
        </div>
      </div>
    )
  }
}

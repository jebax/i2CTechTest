import React from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines
} from 'react-vis'

const TopLineChart = () => {
  return (
    <XYPlot
      height={300}
      width={600}
    >
    <XAxis />
    <YAxis />
    <VerticalGridLines />
    <HorizontalGridLines />
    </XYPlot>
  )
}

export default TopLineChart

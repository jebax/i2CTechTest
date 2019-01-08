import React from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries
} from 'react-vis'

const AisleChart = () => {
  return (
    <XYPlot
      height={300}
      width={500}
      xType={'time'}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      <LineMarkSeries />
      <LineMarkSeries />
    </XYPlot>
  )
}

export default AisleChart

import React from 'react'
import PropTypes from 'prop-types'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries
} from 'react-vis'

const ExposedControlChart = ({ exposed, control }) => {
  return (
    <XYPlot
      height={300}
      width={500}
      xType={'time'}
      margin={{
        left: 100,
        right: 100
      }}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      <LineMarkSeries
        className={'exposedData'}
        curve={'curveMonotoneX'}
        data={exposed}
      />
      <LineMarkSeries
        className={'controlData'}
        curve={'curveMonotoneX'}
        data={control}
      />
    </XYPlot>
  )
}

ExposedControlChart.propTypes = {
  exposed: PropTypes.array.isRequired,
  control: PropTypes.array.isRequired
}

export default ExposedControlChart

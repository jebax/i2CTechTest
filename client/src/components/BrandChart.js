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

const BrandChart = ({ exposed, control }) => {
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
      <LineMarkSeries
        className={'brandExposedData'}
        curve={'curveMonotoneX'}
        data={exposed}
      />
      <LineMarkSeries
        className={'brandControlData'}
        curve={'curveMonotoneX'}
        data={control}
      />
    </XYPlot>
  )
}

BrandChart.propTypes = {
  exposed: PropTypes.array.isRequired,
  control: PropTypes.array.isRequired
}

export default BrandChart

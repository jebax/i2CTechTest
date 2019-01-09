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

const AisleChart = ({ exposed, control }) => {
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
        className={'aisleExposedData'}
        curve={'curveMonotoneX'}
        data={exposed}
      />
      <LineMarkSeries
        className={'aisleControlData'}
        curve={'curveMonotoneX'}
        data={control}
      />
    </XYPlot>
  )
}

AisleChart.propTypes = {
  exposed: PropTypes.array.isRequired,
  control: PropTypes.array.isRequired
}

export default AisleChart

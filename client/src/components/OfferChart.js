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

const OfferChart = ({ exposed, control }) => {
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
        className={'offerExposedData'}
        curve={'curveMonotoneX'}
        data={exposed}
      />
      <LineMarkSeries
        className={'offerControlData'}
        curve={'curveMonotoneX'}
        data={control}
      />
    </XYPlot>
  )
}

OfferChart.propTypes = {
  exposed: PropTypes.array.isRequired,
  control: PropTypes.array.isRequired
}

export default OfferChart

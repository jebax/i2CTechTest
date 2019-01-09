import React from 'react'
import PropTypes from 'prop-types'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines
} from 'react-vis'

const TopLineChart = ({ spendData, unitsData, visitsData, totalCustsData }) => {
  return (
    <XYPlot
      height={300}
      width={600}
      xType={'time'}
    >
    <XAxis />
    <YAxis />
    <VerticalGridLines />
    <HorizontalGridLines />
    </XYPlot>
  )
}

TopLineChart.propTypes = {
  spendData: PropTypes.array.isRequired,
  unitsData: PropTypes.array.isRequired,
  visitsData: PropTypes.array.isRequired,
  totalCustsData: PropTypes.array.isRequired
}

export default TopLineChart

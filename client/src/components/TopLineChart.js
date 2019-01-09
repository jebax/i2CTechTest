import React from 'react'
import PropTypes from 'prop-types'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  ChartLabel
} from 'react-vis'

const TopLineChart = ({ spendData, unitsData, visitsData, totalCustsData }) => {
  return (
    <XYPlot
      height={300}
      width={600}
      xType={'ordinal'}
    >
      <XAxis />
      <YAxis />
      <VerticalGridLines />
      <HorizontalGridLines />
      <ChartLabel
        text="Uplift (%)"
        className="top-axis-label"
        includeMargin={false}
        xPercent={0.06}
        yPercent={0.06}
        style={{
          transform: 'rotate(-90)',
          textAnchor: 'end'
        }}
      />
      <VerticalBarSeries
        data={spendData}
      />
      <VerticalBarSeries
        data={unitsData}
      />
      <VerticalBarSeries
        data={visitsData}
      />
      <VerticalBarSeries
        data={totalCustsData}
      />
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

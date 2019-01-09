import React from 'react'
import PropTypes from 'prop-types'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  ChartLabel,
  LineMarkSeries
} from 'react-vis'

const ExposedControlChart = ({ exposed, control }) => {
  return (
    <figure
      className='exposedControlChart'
    >
    <XYPlot
      height={300}
      width={350}
      xType={'time'}
      margin={{
        left: 50
      }}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis
        tickLabelAngle={-30}/>
      <YAxis
        tickLabelAngle={-30}
      />
      <ChartLabel
        text="Week Commencing"
        includeMargin={false}
        xPercent={0.025}
        yPercent={1.01}
      />
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
    </figure>
  )
}

ExposedControlChart.propTypes = {
  exposed: PropTypes.array.isRequired,
  control: PropTypes.array.isRequired
}

export default ExposedControlChart

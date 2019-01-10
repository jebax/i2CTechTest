import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  DiscreteColorLegend
} from 'react-vis'

const ExposedControlChart = ({ exposed, control }) => {
  return (
    <Paper
      elevation={3}
      data-id='exposedControlChart'
    >
      <div
        className='chartWrapper'
      >
        <XYPlot
          height={300}
          width={350}
          xType={'time'}
          margin={{
            left: 60
          }}
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis
            tickLabelAngle={-30}/>
          <YAxis
            tickLabelAngle={-30}
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
        <DiscreteColorLegend
          orientation='vertical'
          items={['Exposed', 'Control']}
        />
      </div>
    </Paper>
  )
}

ExposedControlChart.propTypes = {
  exposed: PropTypes.array.isRequired,
  control: PropTypes.array.isRequired
}

export default ExposedControlChart

import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  ChartLabel,
  DiscreteColorLegend,
} from 'react-vis'


const TopLineChart = ({ spendData, unitsData, visitsData, totalCustsData }) => {
  return (
    <Paper
      elevation={3}
      id='topLineChart'
    >
      <div
        className='chartWrapper'
      >
        <Typography
          variant='h6'
          color='inherit'
        >
          Top Line Data
        </Typography>
        <XYPlot
          height={300}
          width={600}
          xType={'ordinal'}
          margin={{
            left: 100
          }}
        >
          <XAxis />
          <YAxis
            tickLabelAngle={-30}
          />
          <VerticalGridLines />
          <HorizontalGridLines />
          <ChartLabel
            text="Uplift (%)"
            className="top-chart-label"
            includeMargin={false}
            xPercent={-0.1}
            yPercent={0.6}
            style={{
              transform: 'rotate(-90)',
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
        <DiscreteColorLegend
          orientation='vertical'
          items={[
            {
              title: 'Spend',
              strokeWidth: 14
            },
            {
              title: 'Units',
              strokeWidth: 14
            },
            {
              title: 'Visits',
              strokeWidth: 14
            },
            {
              title: 'Total Customers',
              strokeWidth: 14
            }
          ]}
          style={{
            'paddingTop': '19%'
          }}
        />
      </div>
    </Paper>
  )
}

TopLineChart.propTypes = {
  spendData: PropTypes.array.isRequired,
  unitsData: PropTypes.array.isRequired,
  visitsData: PropTypes.array.isRequired,
  totalCustsData: PropTypes.array.isRequired
}

export default TopLineChart

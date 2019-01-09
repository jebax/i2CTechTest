import React from 'react'
import { shallow } from 'enzyme'
import TopLineChart from '../components/TopLineChart'

describe('Top line chart', () => {
  var topLineChart
  var spendData
  var unitsData
  var visitsData
  var totalCustsData

  beforeAll(() => {
    spendData = [{ x: 'Aisle', y: '0.01' }]
    unitsData = [{ x: 'Aisle', y: '0.02' }]
    visitsData = [{ x: 'Aisle', y: '0.03' }]
    totalCustsData = [{ x: 'Aisle', y: '0.04' }]

    topLineChart = shallow(
      <TopLineChart
        spendData={spendData}
        unitsData={unitsData}
        visitsData={visitsData}
        totalCustsData={totalCustsData}
      />
    )
  })

  it('renders correctly', () => {
    expect(topLineChart).toMatchSnapshot()
  })

  it('renders a react-vis chart', () => {
    expect(topLineChart.find('XYPlot').length).toEqual(1)
  })

  it('displays the time on its x-axis', () => {
    const plot = topLineChart.find('XYPlot')
    expect(plot.props().xType).toEqual('time')
  })
})

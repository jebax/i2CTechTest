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

  it('displays ordinal data on its x-axis', () => {
    const plot = topLineChart.find('XYPlot')
    expect(plot.props().xType).toEqual('ordinal')
  })

  it('renders four VerticalBarSeries', () => {
    expect(topLineChart.find('VerticalBarSeries').length).toEqual(4)
  })

  it('should display the spend data in the first bar series', () => {
    const firstSeries = topLineChart.find('VerticalBarSeries').first()

    expect(firstSeries.props().data).toEqual(spendData)
  })

  it('should display the units data in the second bar series', () => {
    const secondSeries = topLineChart.find('VerticalBarSeries').at(1)

    expect(secondSeries.props().data).toEqual(unitsData)
  })

  it('should display the visits data in the third bar series', () => {
    const thirdSeries = topLineChart.find('VerticalBarSeries').at(2)

    expect(thirdSeries.props().data).toEqual(visitsData)
  })

  it('should display the total customers data in the fourth bar series', () => {
    const fourthSeries = topLineChart.find('VerticalBarSeries').at(3)

    expect(fourthSeries.props().data).toEqual(totalCustsData)
  })

  it('renders a chart label for the percentage uplift', () => {
    const label = topLineChart.find('ChartLabel')

    expect(label.props().text).toEqual('Uplift (%)')
  })

  it('renders a DiscreteColorLegend item', () => {
    expect(topLineChart.find('DiscreteColorLegendItem').length).toEqual(1)
  })
})

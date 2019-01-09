import React from 'react'
import { shallow } from 'enzyme'
import TopLineChart from '../components/TopLineChart'

describe('Top line chart', () => {
  var topLineChart

  beforeAll(() => {
    topLineChart = shallow(
      <TopLineChart />
    )
  })

  it('renders correctly', () => {
    expect(topLineChart).toMatchSnapshot()
  })

  it('renders an XYPlot', () => {
    expect(topLineChart.find('XYPlot').length).toEqual(1)
  })
})

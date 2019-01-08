import React from 'react'
import { shallow } from 'enzyme'
import AisleChart from '../components/AisleChart'

describe('Aisle data chart', () => {
  var aisleChart

  beforeAll(() => {
    aisleChart = shallow(<AisleChart />)
  })

  it('renders correctly', () => {
    expect(aisleChart).toMatchSnapshot()
  })

  it('renders a react-vis chart', () => {
    expect(aisleChart.find('XYPlot').length).toEqual(1)
  })

  it('displays time on the x-axis', () => {
    const plot = aisleChart.find('XYPlot')
    expect(plot.props().xType).toEqual('time')
  })

  it('renders two LineMarkSeries components', () => {
    expect(aisleChart.find('LineMarkSeries').length).toEqual(2)
  })
})

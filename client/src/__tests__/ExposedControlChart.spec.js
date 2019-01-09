import React from 'react'
import { shallow } from 'enzyme'
import ExposedControlChart from '../components/ExposedControlChart'

describe('exposedControl chart', () => {
  var exposedControlChart
  var exposed
  var control

  beforeAll(() => {
    exposed = [{ x: new Date('2018-01-01'), y: '444' }]
    control = [{ x: new Date('2018-01-01'), y: '333' }]

    exposedControlChart = shallow(
      <ExposedControlChart
        exposed={exposed}
        control={control}
      />
    )
  })

  it('renders correctly', () => {
    expect(exposedControlChart).toMatchSnapshot()
  })

  it('renders a react-vis chart', () => {
    expect(exposedControlChart.find('XYPlot').length).toEqual(1)
  })

  it('displays time on the x-axis', () => {
    const plot = exposedControlChart.find('XYPlot')
    expect(plot.props().xType).toEqual('time')
  })

  it('renders two LineMarkSeries components', () => {
    expect(exposedControlChart.find('LineMarkSeries').length).toEqual(2)
  })

  it('renders the exposed data correctly', () => {
    const firstLine = exposedControlChart.find('LineMarkSeries').first()

    expect(firstLine.props().className).toEqual('exposedData')
    expect(firstLine.props().data).toEqual(exposed)
  })

  it('renders the control data correctly', () => {
    const secondLine = exposedControlChart.find('LineMarkSeries').at(1)

    expect(secondLine.props().className).toEqual('controlData')
    expect(secondLine.props().data).toEqual(control)
  })
})

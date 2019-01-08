import React from 'react'
import { shallow } from 'enzyme'
import AisleChart from '../components/AisleChart'

describe('Aisle data chart', () => {
  var aisleChart
  var exposed
  var control

  beforeAll(() => {
    exposed = [{ x: new Date('2018-01-01'), y: '222' }]
    control = [{ x: new Date('2018-01-01'), y: '111' }]

    aisleChart = shallow(
      <AisleChart
        exposed={exposed}
        control={control}
      />
    )
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

  it('renders the exposed data correctly', () => {
    const firstLine = aisleChart.find('LineMarkSeries').first()

    expect(firstLine.props().className).toEqual('aisleExposedData')
    expect(firstLine.props().data).toEqual(exposed)
  })

  it('renders the control data correctly', () => {
    const secondLine = aisleChart.find('LineMarkSeries').at(1)

    expect(secondLine.props().className).toEqual('aisleControlData')
    expect(secondLine.props().data).toEqual(control)
  })
})

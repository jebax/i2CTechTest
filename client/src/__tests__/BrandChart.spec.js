import React from 'react'
import { shallow } from 'enzyme'
import BrandChart from '../components/BrandChart'

describe('Brand chart', () => {
  var brandChart
  var exposed
  var control

  beforeAll(() => {
    exposed = [{ x: new Date('2018-01-01'), y: '444' }]
    control = [{ x: new Date('2018-01-01'), y: '333' }]

    brandChart = shallow(
      <BrandChart
        exposed={exposed}
        control={control}
      />
    )
  })

  it('renders correctly', () => {
    expect(brandChart).toMatchSnapshot()
  })

  it('renders a react-vis chart', () => {
    expect(brandChart.find('XYPlot').length).toEqual(1)
  })

  it('displays time on the x-axis', () => {
    const plot = brandChart.find('XYPlot')
    expect(plot.props().xType).toEqual('time')
  })

  it('renders two LineMarkSeries components', () => {
    expect(brandChart.find('LineMarkSeries').length).toEqual(2)
  })

  it('renders the exposed data correctly', () => {
    const firstLine = brandChart.find('LineMarkSeries').first()

    expect(firstLine.props().className).toEqual('brandExposedData')
    expect(firstLine.props().data).toEqual(exposed)
  })

  it('renders the control data correctly', () => {
    const secondLine = brandChart.find('LineMarkSeries').at(1)

    expect(secondLine.props().className).toEqual('brandControlData')
    expect(secondLine.props().data).toEqual(control)
  })
})

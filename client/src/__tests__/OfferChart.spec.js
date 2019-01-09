import React from 'react'
import { shallow } from 'enzyme'
import OfferChart from '../components/OfferChart'

describe('Offer chart', () => {
  var offerChart
  var exposed
  var control

  beforeAll(() => {
    exposed = [{ x: new Date('2018-01-01'), y: '444' }]
    control = [{ x: new Date('2018-01-01'), y: '333' }]

    offerChart = shallow(
      <OfferChart
        exposed={exposed}
        control={control}
      />
    )
  })

  it('renders correctly', () => {
    expect(offerChart).toMatchSnapshot()
  })

  it('renders a react-vis chart', () => {
    expect(offerChart.find('XYPlot').length).toEqual(1)
  })

  it('displays time on the x-axis', () => {
    const plot = offerChart.find('XYPlot')
    expect(plot.props().xType).toEqual('time')
  })

  it('renders two LineMarkSeries components', () => {
    expect(offerChart.find('LineMarkSeries').length).toEqual(2)
  })

  it('renders the exposed data correctly', () => {
    const firstLine = offerChart.find('LineMarkSeries').first()

    expect(firstLine.props().className).toEqual('offerExposedData')
    expect(firstLine.props().data).toEqual(exposed)
  })

  it('renders the control data correctly', () => {
    const secondLine = offerChart.find('LineMarkSeries').at(1)

    expect(secondLine.props().className).toEqual('offerControlData')
    expect(secondLine.props().data).toEqual(control)
  })
})

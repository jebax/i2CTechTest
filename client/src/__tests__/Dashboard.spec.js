import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from '../components/Dashboard'

describe('i2C Dashboard', () => {
  var dashboard

  beforeAll(() => {
    dashboard = shallow(<Dashboard />)
  })

  it('renders correctly', () => {
    expect(dashboard).toMatchSnapshot()
  })

  it('renders the WeeklyChart', () => {
    expect(dashboard.find('WeeklyCharts').length).toEqual(1)
  })
})

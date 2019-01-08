import React from 'react'
import { shallow } from 'enzyme'
import WeeklyChart from '../components/WeeklyChart'

describe('Weekly data chart', () => {
  var weeklyChart

  beforeAll(() => {
    weeklyChart = shallow(<WeeklyChart />)
  })

  it('renders correctly', () => {
    expect(weeklyChart).toMatchSnapshot()
  })
})

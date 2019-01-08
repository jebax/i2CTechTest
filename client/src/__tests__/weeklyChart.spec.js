import React from 'react'
import { shallow } from 'enzyme'
import axios from 'axios'
import WeeklyChart from '../components/WeeklyChart'

jest.mock('axios')

describe('Weekly data chart', () => {
  var weeklyChart

  beforeAll(() => {
    weeklyChart = shallow(<WeeklyChart />)
  })

  it('renders correctly', () => {
    expect(weeklyChart).toMatchSnapshot()
  })

  it('makes the correct API request', () => {
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(process.env.REACT_APP_WEEKLY_URL)
  })
})

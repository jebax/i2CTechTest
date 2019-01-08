import React from 'react'
import { shallow } from 'enzyme'
import axios from 'axios'
import WeeklyCharts from '../components/WeeklyCharts'

jest.mock('axios')

describe('Weekly data charts', () => {
  var weeklyCharts

  beforeAll(() => {
    weeklyCharts = shallow(<WeeklyCharts />)
  })

  it('render correctly', () => {
    expect(weeklyCharts).toMatchSnapshot()
  })

  it('make the correct API request', () => {
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(process.env.REACT_APP_WEEKLY_URL)
  })
})

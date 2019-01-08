import React from 'react'
import { shallow, mount } from 'enzyme'
import axios from 'axios'
import WeeklyCharts from '../components/WeeklyCharts'

jest.mock('axios')

describe('Weekly charts wrapper', () => {
  var weeklyCharts
  var weeklyData

  beforeAll(() => {
    weeklyData = [
      {
        PRODUCT: 'Aisle',
        WEEK_COMMENCING: '2018-01-01',
        EXPOSED: '222',
        CONTROL: '111'
      },
      {
        PRODUCT: 'Brand',
        WEEK_COMMENCING: '2018-01-01',
        EXPOSED: '444',
        CONTROL: '333'
      },
      {
        PRODUCT: 'Offer',
        WEEK_COMMENCING: '2018-01-01',
        EXPOSED: '666',
        CONTROL: '555'
      }
    ]

    axios.get.mockResolvedValue({ data: weeklyData })

    weeklyCharts = shallow(<WeeklyCharts />)
  })

  it('renders correctly', () => {
    expect(weeklyCharts).toMatchSnapshot()
  })

  it('makes the correct API request', () => {
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(process.env.REACT_APP_WEEKLY_URL)
  })

  it('includes the AisleChart', () => {
    expect(weeklyCharts.find('AisleChart').length).toEqual(1)
  })

  it('passes the correct props to the AisleChart', () => {
    const aisleChart = weeklyCharts.find('AisleChart')

    const exposedData = [{ x: new Date('2018-01-01'), y: '222' }]
    const controlData = [{ x: new Date('2018-01-01'), y: '111' }]

    expect(aisleChart.props().exposed).toEqual(exposedData)
    expect(aisleChart.props().control).toEqual(controlData)
  })
})

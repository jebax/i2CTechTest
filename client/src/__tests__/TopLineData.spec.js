import React from 'react'
import { shallow } from 'enzyme'
import axios from 'axios'
import TopLineData from '../components/TopLineData'

jest.mock('axios')

describe('Top line data', () => {
  var topLineData
  var fetchedData

  beforeAll(() => {
    fetchedData = [
      {
        METRIC: 'Spend',
        PRODUCT: 'Aisle',
        PCT_UPLIFT: '0.01'
      },
      {
        METRIC: 'Units',
        PRODUCT: 'Aisle',
        PCT_UPLIFT: '0.02'
      },
      {
        METRIC: 'Visits',
        PRODUCT: 'Aisle',
        PCT_UPLIFT: '0.03'
      },
      {
        METRIC: 'Total_custs',
        PRODUCT: 'Aisle',
        PCT_UPLIFT: '0.04'
      }
    ]

    axios.get.mockResolvedValue({ data: fetchedData })

    topLineData = shallow(<TopLineData />)
  })

  it('renders correctly', () => {
    expect(topLineData).toMatchSnapshot()
  })

  it('makes the correct API request', () => {
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(process.env.REACT_APP_TOP_URL)
  })

  it('renders the TopLineChart', () => {
    expect(topLineData.find('TopLineChart').length).toEqual(1)
  })

  it('renders the TopLineChart with the correct data', () => {
    const chart = topLineData.find('TopLineChart')

    const spendData = [{ x: 'Aisle', y: '0.01' }]
    const unitsData = [{ x: 'Aisle', y: '0.02' }]
    const visitsData = [{ x: 'Aisle', y: '0.03' }]
    const totalCustsData = [{ x: 'Aisle', y: '0.04' }]

    expect(chart.props().spendData).toEqual(spendData)
    expect(chart.props().unitsData).toEqual(unitsData)
    expect(chart.props().visitsData).toEqual(visitsData)
    expect(chart.props().totalCustsData).toEqual(totalCustsData)
  })
})

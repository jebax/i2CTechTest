import React from 'react'
import { shallow } from 'enzyme'
import axios from 'axios'
import TopLineData from '../components/TopLineData'

jest.mock('axios')

describe('Top line data', () => {
  var topLineData
  var fetchedData

  beforeAll(() => {
    fetchedData = {

    }
    axios.get.mockResolvedValue(fetchedData)
    
    topLineData = shallow(<TopLineData />)
  })

  it('renders correctly', () => {
    expect(topLineData).toMatchSnapshot()
  })

  it('makes the correct API request', () => {
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(process.env.REACT_APP_TOP_URL)
  })
})

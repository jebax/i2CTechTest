import React from 'react'
import { shallow } from 'enzyme'
import TopLineData from '../components/TopLineData'

describe('Top line data', () => {
  var topLineData

  beforeAll(() => {
    topLineData = shallow(<TopLineData />)
  })

  it('renders correctly', () => {
    expect(topLineData).toMatchSnapshot()
  })
})

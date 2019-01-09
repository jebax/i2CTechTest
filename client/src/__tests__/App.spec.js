import React from 'react'
import { shallow } from 'enzyme'
import App from '../components/App'

describe('App', () => {
  var app

  beforeAll(() => {
    app = shallow(<App />)
  })

  it('renders correctly', () => {
    expect(app).toMatchSnapshot()
  })

  it('renders the Dashboard', () => {
    expect(app.find('Dashboard').length).toEqual(1)
  })
})

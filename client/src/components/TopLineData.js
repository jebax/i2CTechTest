import React, { Component } from 'react'
import axios from 'axios'
import TopLineChart from './TopLineChart'

export default class TopLineData extends Component {
  componentDidMount() {
    axios.get(process.env.REACT_APP_TOP_URL).then(response => {
      console.log(response.data)
    })
  }

  render() {
    return(
      <div
        className='topDataWrapper'
      >
        <TopLineChart />
      </div>
    )
  }
}

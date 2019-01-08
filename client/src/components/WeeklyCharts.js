import React, { Component } from 'react'
import axios from 'axios'

export default class WeeklyCharts extends Component {
  componentDidMount() {
    axios.get(process.env.REACT_APP_WEEKLY_URL)
  }

  render() {
    return(
      <div></div>
    )
  }
}

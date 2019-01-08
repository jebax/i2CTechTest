import React, { Component } from 'react'
import axios from 'axios'

export default class WeeklyChart extends Component {
  componentDidMount() {
    axios.get(process.env.REACT_APP_WEEKLY_URL)
  }
  
  render() {
    return(
      <div></div>
    )
  }
}

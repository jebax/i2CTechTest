import React, { Component } from 'react'
import axios from 'axios'
import '../../node_modules/react-vis/dist/style.css'
import AisleChart from './AisleChart'

export default class WeeklyCharts extends Component {
  componentDidMount() {
    axios.get(process.env.REACT_APP_WEEKLY_URL)
  }

  render() {
    return(
      <div>
        <AisleChart />
      </div>
    )
  }
}

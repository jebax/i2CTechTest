import React, { Component } from 'react'
import axios from 'axios'
import '../../node_modules/react-vis/dist/style.css'
import AisleChart from './AisleChart'

export default class WeeklyCharts extends Component {
  state = {
    aisleExposed: [],
    aisleControl: []
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_WEEKLY_URL).then(response => {
      this.formatData(response.data)
    })
  }

  formatData = data => {
    let aisleExposed = []
    let aisleControl = []

    data.forEach(entry => {
      if (entry.PRODUCT === 'Aisle') {
        this.appendFormattedData(aisleExposed, aisleControl, entry)
      }
    })

    this.setState(prevState => ({
      aisleExposed: aisleExposed,
      aisleControl: aisleControl
    }))
  }

  appendFormattedData = (exposedCollection, controlCollection, entry) => {
    exposedCollection.push(
      {
        x: new Date(entry.WEEK_COMMENCING),
        y: entry.EXPOSED
      }
    )
    controlCollection.push(
      {
        x: new Date(entry.WEEK_COMMENCING),
        y: entry.CONTROL
      }
    )
  }

  render() {
    return(
      <div>
        <AisleChart
          exposed={this.state.aisleExposed}
          control={this.state.aisleControl}
        />
      </div>
    )
  }
}

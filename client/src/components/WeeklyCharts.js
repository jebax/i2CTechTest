import React, { Component } from 'react'
import axios from 'axios'
import '../../node_modules/react-vis/dist/style.css'
import AisleChart from './AisleChart'

export default class WeeklyCharts extends Component {
  state = {
    aisleData: []
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_WEEKLY_URL).then(response => {
      this.formatData(response.data)
    })
  }

  formatData = data => {
    let aisleData = []

    data.forEach(entry => {
      if (entry.PRODUCT === 'Aisle') {
        this.appendFormattedData(aisleData, entry)
      }
    })

    this.setState(prevState => ({
      aisleData: aisleData
    }))
  }

  appendFormattedData = (dataCollection, entry) => {
    dataCollection.push(
      {
        x: new Date(entry.WEEK_COMMENCING),
        y: entry.EXPOSED
      },
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
          data={this.state.aisleData}
        />
      </div>
    )
  }
}

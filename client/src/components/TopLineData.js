import React, { Component } from 'react'
import axios from 'axios'
import TopLineChart from './TopLineChart'

export default class TopLineData extends Component {
  state = {
    spendData: [],
    unitsData: [],
    visitsData: [],
    totalCustsData: []
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_TOP_URL).then(response => {
      this.formatData(response.data)
    })
  }

  formatData = data => {
    let spendData = []
    let unitsData = []
    let visitsData = []
    let totalCustsData = []

    data.forEach(entry => {
      switch (entry.METRIC) {
        case 'Spend':
          this.appendFormattedData(spendData, entry)
          break
        case 'Units':
          this.appendFormattedData(unitsData, entry)
          break
        case 'Visits':
          this.appendFormattedData(visitsData, entry)
          break
        case 'Total_custs':
          this.appendFormattedData(totalCustsData, entry)
          break
        default:
          break
      }
    })

    this.setState(prevState => ({
      spendData: spendData,
      unitsData: unitsData,
      visitsData: visitsData,
      totalCustsData: totalCustsData
    }))
  }

  appendFormattedData = (dataCollection, entry) => {
    dataCollection.push({
      x: entry.PRODUCT,
      y: entry.PCT_UPLIFT
    })
  }

  render() {
    return(
      <div
        className='topDataWrapper'
      >
        <TopLineChart
          spendData={this.state.spendData}
          unitsData={this.state.unitsData}
          visitsData={this.state.visitsData}
          totalCustsData={this.state.totalCustsData}
        />
      </div>
    )
  }
}

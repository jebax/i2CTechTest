import React, { Component } from 'react'
import axios from 'axios'
import TopLineChart from './TopLineChart'
import Paper from '@material-ui/core/Paper'

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
      if (entry.METRIC === 'Spend') {
        this.appendFormattedData(spendData, entry)
      } else if (entry.METRIC === 'Units') {
        this.appendFormattedData(unitsData, entry)
      } else if (entry.METRIC === 'Visits') {
        this.appendFormattedData(visitsData, entry)
      } else {
        this.appendFormattedData(totalCustsData, entry)
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
      <Paper elevation={3} id='topLineChart'>
        <TopLineChart
          spendData={this.state.spendData}
          unitsData={this.state.unitsData}
          visitsData={this.state.visitsData}
          totalCustsData={this.state.totalCustsData}
        />
      </Paper>
    )
  }
}

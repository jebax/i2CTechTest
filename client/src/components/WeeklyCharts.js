import React, { Component } from 'react'
import axios from 'axios'
import '../../node_modules/react-vis/dist/style.css'
import ExposedControlChart from './ExposedControlChart'

export default class WeeklyCharts extends Component {
  state = {
    aisleExposed: [],
    aisleControl: [],
    brandExposed: [],
    brandControl: [],
    offerExposed: [],
    offerControl: []
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_WEEKLY_URL).then(response => {
      this.formatData(response.data)
    })
  }

  formatData = data => {
    let aisleExposed = []
    let aisleControl = []

    let brandExposed = []
    let brandControl = []

    let offerExposed = []
    let offerControl = []

    data.forEach(entry => {
      if (entry.PRODUCT === 'Aisle') {
        this.appendFormattedData(aisleExposed, aisleControl, entry)
      } else if (entry.PRODUCT === 'Brand') {
        this.appendFormattedData(brandExposed, brandControl, entry)
      } else {
        this.appendFormattedData(offerExposed, offerControl, entry)
      }
    })

    this.setState(prevState => ({
      aisleExposed: aisleExposed,
      aisleControl: aisleControl,
      brandExposed: brandExposed,
      brandControl: brandControl,
      offerExposed: offerExposed,
      offerControl: offerControl
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
        <ExposedControlChart
          exposed={this.state.aisleExposed}
          control={this.state.aisleControl}
        />
        <ExposedControlChart
          exposed={this.state.brandExposed}
          control={this.state.brandControl}
        />
        <ExposedControlChart
          exposed={this.state.offerExposed}
          control={this.state.offerControl}
        />
      </div>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios'
import '../../node_modules/react-vis/dist/style.css'
import AisleChart from './AisleChart'
import BrandChart from './BrandChart'

export default class WeeklyCharts extends Component {
  state = {
    aisleExposed: [],
    aisleControl: [],
    brandExposed: [],
    brandControl: []
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

    data.forEach(entry => {
      if (entry.PRODUCT === 'Aisle') {
        this.appendFormattedData(aisleExposed, aisleControl, entry)
      } else if (entry.PRODUCT === 'Brand') {
        this.appendFormattedData(brandExposed, brandControl, entry)
      }
    })

    this.setState(prevState => ({
      aisleExposed: aisleExposed,
      aisleControl: aisleControl,
      brandExposed: brandExposed,
      brandControl: brandControl
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
        <BrandChart
          exposed={this.state.brandExposed}
          control={this.state.brandControl}
        />
      </div>
    )
  }
}

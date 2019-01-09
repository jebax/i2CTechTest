import React from 'react'
import WeeklyCharts from './WeeklyCharts'
import TopLineData from './TopLineData'

const Dashboard = () => {
  return(
    <div
      className='dashboard'
    >
      <WeeklyCharts />
      <TopLineData />
    </div>
  )
}

export default Dashboard

import React from 'react'
import Dashboard from './Dashboard'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const App = () => {
  return (
    <div
      className="App"
    >
      <header
        className="App-header"
      >
        <AppBar
          position='static'
          id='appBar'
        >
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
            >
              i2C Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <Dashboard />
    </div>
  )
}

export default App

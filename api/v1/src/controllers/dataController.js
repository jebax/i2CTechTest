const converter = require('csvtojson')
const appRoutePath = require('app-root-path')

class DataController {
  static getWeeklyData(req, res) {
    converter()
      .fromFile(appRoutePath + '/data/weekly.csv')
      .then(jsonObj => {
        return res.status(200).send(jsonObj)
      })
  }
}

export default DataController

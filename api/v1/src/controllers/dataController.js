const converter = require('csvtojson')
const appRootPath = require('app-root-path')

class DataController {
  static getWeeklyData(req, res) {
    converter()
      .fromFile(appRootPath + '/data/weekly.csv')
      .then(jsonObj => {
        return res.status(200).send(jsonObj)
      })
  }

  static getTopData(req, res) {
    converter()
      .fromFile(appRootPath + '/data/top.csv')
      .then(jsonObj => {
        return res.status(200).send(jsonObj)
      })
  }
}

export default DataController

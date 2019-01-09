import converter from 'csvtojson'
import appRootPath from 'app-root-path'

class DataController {
  static getWeeklyData(req, res) {
    converter()
      .fromFile(appRootPath + '/data/weekly.csv')
      .then(parsedFile => {
        return res.status(200).send(parsedFile)
      })
  }

  static getTopData(req, res) {
    converter()
      .fromFile(appRootPath + '/data/top.csv')
      .then(parsedFile => {
        return res.status(200).send(parsedFile)
      })
  }
}

export default DataController

import { Router } from 'express'
import DataController from '../controllers/dataController'

const routes = Router()

routes.get('/api/v1/weekly', DataController.getWeeklyData)
routes.get('/api/v1/top', DataController.getTopData)

export default routes

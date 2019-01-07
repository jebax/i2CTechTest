import { Router } from 'express'
import DataController from '../controllers/dataController'

const routes = Router()

routes.get('/weekly', DataController.getWeeklyData)
routes.get('/top', DataController.getTopData)

export default routes

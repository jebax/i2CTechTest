import express from 'express'
import routes from './routes/index'

const api = express()

const port = process.env.PORT || 4000

api.use('/', routes)

api.listen(port, () => {
  console.log(`Listening on port ${port}.`)
})

export default api

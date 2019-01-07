import chai from 'chai'
import chaiHttp from 'chai-http'
import api from '../src/server'

chai.use(chaiHttp)
chai.should()

describe('API', () => {
  describe('GET /api/v1/weekly', () => {
    it('should get a JSON array', (done) => {
      chai.request(api)
          .get('/api/v1/weekly')
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('array')
            res.body[0].should.be.a('object')
            done()
          })
    })
  })

  describe('GET /api/v1/top', () => {
    it('should get a JSON array', (done) => {
      chai.request(api)
          .get('/api/v1/top')
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('array')
            res.body[0].should.be.a('object')
            done()
          })
    })
  })
})

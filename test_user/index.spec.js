const request = require('supertest')
const app = require('../users/index')

describe('GET /users', () => {
    it('responds with "No user in the system"', (done) => {
        request(app).get('/users').expect('No user in the system', done)
    })
})
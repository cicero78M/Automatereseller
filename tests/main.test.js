const request = require('supertest');
const app = require('../app/server');

describe('GET /', () => {
  it('returns welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Automate Reseller API' });
  });
});

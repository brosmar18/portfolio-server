const { app } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('API Server', () => {
    test('handles the root path', async () => {
        const response = await mockRequest.get('/');

        expect(response.status).toBe(200);
        expect(response.text).toBeTruthy();
        expect(response.text).toEqual('Logger middleware!');
    });

    test('handles invalid requests', async () => {
        const response = await mockRequest.get('/green');

        expect(response.status).toEqual(404);
    });
});
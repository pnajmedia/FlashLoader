const startServer = require('../../server/index')
const request = require('supertest');

describe('Test if my graphQL api is working as expected ', () => {
    let serverInfo;

    beforeAll(async () => {
        serverInfo = startServer();
    });

    afterAll(async () => {
        await serverInfo.server.close();
    });

    it('This should return data from GraphQL server', async () => {
        const queryData = {
            query: `
          query getAllUsers {
                name
                phone
                email
                occupation
          }`,
        };

        const response = await request(serverInfo.url).get('/').send(queryData);
        expect(response.status).toBe(200);
        expect(response.errors).toBeUndefined();
        expect(response.body.data).not.toBeNull();
    });
});
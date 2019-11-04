const rp = require('request-promise');

describe('apiTestingTag - api tests', () => {
  test('expect get status code to equal 200', async () => {
    const response = await rp.get('https://api.publicapis.org/entries', { resolveWithFullResponse: true });
    expect(response.statusCode).toBe(200);
  });
});

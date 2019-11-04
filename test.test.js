const rp = require('request-promise');

test('expect true = true', async () => {
  expect(true).toBe(true);
  const response = await rp.get('https://api.publicapis.org/entries');
  console.log(response);
});

describe('matthew', () => {
  test('expect true = true', async () => {
    expect(true).toBe(true);
    const response = await rp.get('https://api.publicapis.org/entries');
    console.log(response);
  });
});

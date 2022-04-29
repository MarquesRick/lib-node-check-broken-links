const getFileAsync = require('../index');

test('get file', () => {
  expect(typeof getFileAsync).toBe('function');
});

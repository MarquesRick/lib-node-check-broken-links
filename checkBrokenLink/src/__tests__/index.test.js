const getFileAsync = require('../index');

const arrayMock = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList',
  },
];

describe('getFileAsync::', () => {
  it('must return array result', async () => {
    expect(
      JSON.parse(
        await getFileAsync(
          '/Users/hmarques/work/Cursos/Alura/nodejs/node-lib-checkBrokenLink/checkBrokenLink/src/__tests__/files/text.md'
        )
      )
    ).toEqual(arrayMock);
  });
});

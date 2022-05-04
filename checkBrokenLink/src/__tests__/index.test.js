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
  it('must return "there are no links"', async () => {
    const result = JSON.parse(
      await getFileAsync(
        '/Users/hmarques/work/Cursos/Alura/nodejs/node-lib-checkBrokenLink/checkBrokenLink/src/__tests__/files/text_nolink.md'
      )
    );
    expect(result).toBe('not found link');
  });
  it('must return error when there is no file', async () => {
    await expect(
      getFileAsync(
        '/Users/hmarques/work/Cursos/Alura/nodejs/node-lib-checkBrokenLink/checkBrokenLink/src/__tests__/files'
      )
    ).rejects.toThrow('No file in path!');
  });
});

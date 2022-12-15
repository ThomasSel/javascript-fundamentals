const Github = require('./githubAwait');

describe(Github, () => {
  it('fetches the correct repo data', async () => {
    const mockedClient = {
      fetchRepositoryData: (urlSuffix) => {
        return Promise.resolve({
          name: urlSuffix,
          description: 'Some fake description'
        });
      }
    };

    const github = new Github(mockedClient);

    await github.fetch('ThomasSel/javascript-fundamentals')
    expect(github.getRepoData()).toEqual({
      name: 'ThomasSel/javascript-fundamentals',
      description: 'Some fake description'
    });
  });
});
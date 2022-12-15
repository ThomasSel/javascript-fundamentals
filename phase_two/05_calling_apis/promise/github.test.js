const Github = require('./githubFetch');

describe(Github, () => {
  it('fetches the correct repo data', (done) => {
    const mockedClient = {
      fetchRepositoryData: (urlSuffix) => {
        return Promise.resolve({
          name: urlSuffix,
          description: 'Some fake description'
        });
      }
    };

    const github = new Github(mockedClient);

    github.fetch('ThomasSel/javascript-fundamentals')
      .then(() => {
        expect(github.getRepoData()).toEqual({
          name: 'ThomasSel/javascript-fundamentals',
          description: 'Some fake description'
        });
        done();
      });
  });
});
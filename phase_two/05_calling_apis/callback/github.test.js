const GithubClient = require('./githubClient');
const Github = require('./github');

describe(Github, () => {
  it('fetches the correct repo data', () => {
    const mockedClient = {
      fetchRepositoryData: (repoName, callback) => {
        callback({
          name: repoName,
          description: 'Some fake description'
        });
      }
    };

    const github = new Github(mockedClient);

    github.fetch('ThomasSel/javascript-fundamentals');

    expect(github.getRepoData()).toEqual({
      name: 'ThomasSel/javascript-fundamentals',
      description: 'Some fake description'
    })
  });
});

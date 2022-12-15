const GithubClient = require('./githubClient');
const Github = require('./github');

describe('Github integration', () => {
  it('fetches the correct repo data', (done) => {
    const client = new GithubClient();
    const github = new Github(client);

    github.fetch('ThomasSel/javascript-fundamentals', () => {
      expect(github.getRepoData()).toMatchObject({
        full_name: 'ThomasSel/javascript-fundamentals',
        owner: { login: 'ThomasSel' }
      });
      done();
    });
  });
});
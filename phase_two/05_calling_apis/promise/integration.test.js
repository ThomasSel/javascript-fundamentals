const GithubClient = require('./githubClientFetch');
const Github = require('./githubFetch');

describe('Github integration', () => {
  it('fetches the correct repo data', (done) => {
    const client = new GithubClient();
    const github = new Github(client);

    github.fetch('ThomasSel/javascript-fundamentals')
      .then(() => {
        expect(github.getRepoData()).toMatchObject({
          full_name: 'ThomasSel/javascript-fundamentals',
          owner: { login: 'ThomasSel' }
        });
        done();
      });
  });
});
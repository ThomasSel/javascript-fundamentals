const GithubClient = require('./githubClientAwait');
const Github = require('./githubAwait');

describe('Github async/await integration', () => {
  it('fetches the correct repo data', async () => {
    const client = new GithubClient();
    const github = new Github(client);

    await github.fetch('ThomasSel/javascript-fundamentals')
    expect(github.getRepoData()).toMatchObject({
      full_name: 'ThomasSel/javascript-fundamentals',
      owner: { login: 'ThomasSel' }
    });
  });
});
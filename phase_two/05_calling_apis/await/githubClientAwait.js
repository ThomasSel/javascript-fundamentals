class githubClient {
  async fetchRepositoryData(urlSuffix) {
    const response = await fetch(`https://api.github.com/repos/${urlSuffix}`);
    return response.json();
  }
}

module.exports = githubClient;

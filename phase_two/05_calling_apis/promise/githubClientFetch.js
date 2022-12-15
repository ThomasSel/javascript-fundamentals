class GithubClient {
  fetchRepositoryData(urlSuffix) {
    return fetch(`https://api.github.com/repos/${urlSuffix}`)
      .then((response) => response.json());
  }
}

module.exports = GithubClient;
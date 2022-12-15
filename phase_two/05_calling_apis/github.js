class Github {
  constructor(client) {
    this.client = client;
    this.repoData = {};
  }

  fetch(urlSuffix) {
    this.client.fetchRepositoryData(urlSuffix, (object) => {
      this.repoData = object;
    });
  }

  getRepoData() {
    return this.repoData;
  }
}

module.exports = Github;

class Github {
  constructor(client) {
    this.client = client;
    this.repoData = {};
  }

  fetch(urlSuffix, callback = () => {}) {
    this.client.fetchRepositoryData(urlSuffix, (object) => {
      this.repoData = object;
      callback();
    });
  }

  getRepoData() {
    return this.repoData;
  }
}

module.exports = Github;

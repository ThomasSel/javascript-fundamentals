class Github {
  constructor(client) {
    this.client = client;
    this.repoData = {};
  }

  async fetch(urlSuffix) {
    this.repoData = await this.client.fetchRepositoryData(urlSuffix);
  }

  getRepoData() {
    return this.repoData;
  }
}

module.exports = Github;

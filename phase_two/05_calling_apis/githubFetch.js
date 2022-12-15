class Github {
  constructor(client) {
    this.client = client;
    this.repoData = {};
  }

  fetch(urlSuffix) {
    return this.client.fetchRepositoryData(urlSuffix)
      .then((bodyObject) => { this.repoData = bodyObject; });
  }
  
  getRepoData() {
    return this.repoData;
  }
}

module.exports = Github;

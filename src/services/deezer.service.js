const jsonp = require('jsonp');
const queryString = require('query-string');
const urljoin = require('url-join');

module.exports = class Deezer {
  constructor() {
    this.baseUrl = 'https://api.deezer.com/';
    this.baseParams = { output: 'jsonp' };
  }

  async getBlindTests() {
    const { data } = await this.api('search/playlist', {
      q: 'blind test',
      limit: 50,
    });
    return data;
  }

  async getBlindTest(playlistId) {
    const data = await this.api(`playlist/${playlistId}`);
    return data;
  }

  async api(path, params) {
    const url = urljoin(
      this.baseUrl,
      path,
      `?${queryString.stringify({ ...this.baseParams, ...params })}`,
    );
    return new Promise((resolve, reject) => {
      jsonp(url, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }
};

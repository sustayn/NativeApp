export class Ajax {
  constructor({ headers = {}, baseUrl = '', afterRequest = (res) => res }) {
    this.headers  = this.defaultHeaders = headers;
    this.baseUrl = baseUrl;
    this.afterRequest = afterRequest;
  }

  fetch(url, options = {}) {
    options.headers = Object.assign({}, this.headers, options.headers);
    if(!url.includes('http')) url = `${this.baseUrl}${url}`;

    const requestPromise = options.timeout ? timeoutRequest(url, options) : fetch(url, options);

    return requestPromise
    .then((response) => {
      if(response.ok) {
        return response.json()
        .then((json) => ({ response, json }));
      } else {
        const err = new Error(`${response.status}: ${response.statusText}`);
        err.response = response;
        throw err;
      }
    })
    .then(this.afterRequest);
  }
  get(url, headers = {}) {
    return this.fetch(url, { headers });
  }
  post(url, body = {}, headers = {}) {
    body = JSON.stringify(body);
    return this.fetch(url, { method: 'POST', body, headers });
  }
  delete(url, body = {}, headers = {}) {
    body = JSON.stringify(body);
    return this.fetch(url, { method: 'DELETE', body, headers });
  }
  patch(url, body = {}, headers = {}) {
    body = JSON.stringify(body);
    return this.fetch(url, { method: 'PATCH', body, headers });
  }
  put(url, body = {}, headers = {}) {
    body = JSON.stringify(body);
    return this.fetch(url, { method: 'PUT', body, headers });
  }

  setHeaders(headers) {
    this.headers = Object.assign({}, this.headers, headers);
  }
  resetHeaders() {
    this.headers = this.defaultHeaders;
  }
}

import AjaxConfig from '../config/Ajax';
export default new Ajax(AjaxConfig);

// Taken from https://github.com/github/fetch/issues/175
function timeoutRequest(url, options) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      const err = new Error(`Request timed out with timeout of ${options.timeout} ms`);
      err.timeout = true;
      reject(err);
    }, options.timeout);

    return fetch(url, options)
    .then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  })
}
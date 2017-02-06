export default {
  headers: {},
  baseUrl: '',
  afterRequest(response) {
    return Promise.resolve(response);
  },
}
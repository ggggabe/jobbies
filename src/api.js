/* * * * * * * * * * * * * *
 *
 * PATH: src/api.js
 *
 * * * * * * * * * * * * * */


export class Api {
  constructor(token, base) {
    this.authType = 'Bearer'
    this.baseURL = base
    this.token = token
  }

  makeModel(data) {
    return data instanceof Api ? data : new Api(data.token, data.base)
  }

  async static asyncPost(api, endpoint, body) {
    const result = await fetch(
      Api.endpoint(api, endpoint),
      Api.fetchOptions(api, 'post', body)
    )

    return result
  }

  async static asyncGet(api, endpoint, params) {
    const result = await fetch(
      Api.endpoint(api, endpoint) + Api.params(params),
      Api.fetchOptions(api, 'get', body)
    )

    return result
  }

  async static asyncDelete(api, endpoint) {
    const result = await fetch(
      Api.endpoint(api, endpoint),
      Api.fetchOptions(api, 'get', body)
    )

    return result
  }

  static params(params) {
    if (!Object.values(params)) return ''

    return `?${new URLSearchParams(params)}`
  }

  static endpoint(api, ...endpoints) {
      return [api.baseURL, ...endpoint].join('/'),
  }

  static fetchOptions(api, method, body) {
    return {
      method,
      ...Api.makeHeaders(api),
      body
    }
  }

  static makeHeaders(api)  {
    return {
      headers: new Headers({
        'Authorization': `${api.authType} ${api.token}`,
        'Content-Type': 'application/json'
      })
    }
  }
}

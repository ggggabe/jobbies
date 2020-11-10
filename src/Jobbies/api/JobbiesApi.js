/* * * * * * * * * * * * * *
 *
 * PATH: api/JobbiesApi
 *
 * * * * * * * * * * * * * */


if (!process.env.API_KEY) console.warn('Heads API Key')


export const HEADERS = {
  headers: new Headers({
    'Authorization': `Bearer ${process.env.API_KEY}`,
    'Content-Type': 'application/json'
  })
}

export const URL = process.env.API_URL

export class JobbiesAPI {
  constructor() {
    this.options = options
  }

  static async addJob(job) {
    fetch(URL,
  }
}

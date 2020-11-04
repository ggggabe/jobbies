
export class JobModel {
  constructor (data) {
    console.log(data)
    const {
      company,
      role,
      url
    } = data

    Object.assign(this, {
      company,
      role,
      url
    })
  }

  static makeModel(data) {
    if ( data instanceof JobModel ) return data

    return new JobModel(data)
  }

  static getCardProps(data) {
    const {
      company,
      role,
      url
    } = JobModel.makeModel(data)

    return {
      company,
      role,
      url,
    }
  }
}

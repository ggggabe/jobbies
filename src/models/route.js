/* * * * * * * * * * * * * *
 *
 * PATH: src/models/routes.js
 *
 * * * * * * * * * * * * * */
import { createContext } from 'react'

export const RouteContext = createContext({})

export class RouteModel {
  constructor (data) {
    const {
      base,
      absolutePath,
      relativePath
    } = data

    Object.assign(this, {
      base,
      absolutePath,
      relativePath
    })
  }

  static cleanPath(path) {
    return `${
      path[0] !== '/' ? '/' : ''
    }${path.toLowerCase().replace(/\/$/, '').replace(/ /g, '-')}`
  }

  static makeModel(data) {
    return data instanceof RouteModel ? data : new RouteModel(data)
  }

  static getRelativePath(data) {
    return encodeURI(
      RouteModel.makeModel(data).relativePath
    )
  }

  static getAbsolutePath(data) {
    return encodeURI(
      RouteModel.makeModel(data).absolutePath
    )
  }

  static getBasePath(data) {
    return encodeURI(
      RouteModel.makeModel(data).absolutePath
    )
  }
}

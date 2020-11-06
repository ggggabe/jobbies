/* * * * * * * * * * * * * *
 *
 * PATH: src/models/menu.js
 *
 * * * * * * * * * * * * * */

export class MenuItemModel {
  constructor (data) {
    const {
      label,
      index,
      onClick = () => {},
      link
    } = data

    Object.assign(this, {
      label,
      index,
      link,
      onClick
    })
  }

  static makeModel(data) {
    if (data instanceof MenuItemModel ) return data

    return new MenuItemModel(data)
  }

  static getLink(data) {
    return data.link || null
  }

  static getProps(data) {
    const {
      label,
      index,
      link,
      onClick
    } = MenuItemModel.makeModel(data)

    return {
      label,
      key: index,
      link,
      onClick: e => {
        onClick()
      }
    }
  }
}

export class MenuModel {
  static initialState(opt = '') {
    return {
      currentOption: opt
    }
  }

  static reducer (state, action) {
    const { type, payload } = action

    switch (type) {
      case MenuModel.SELECT:
        return { ...state, currentOption: payload }
      default:
        throw new Error()
    }
  }

  static getProviderValue (state, dispatch) {
    return {
      state,
      dispatch
    }
  }

  get SELECT() {
    return 'select menu option'
  }
}

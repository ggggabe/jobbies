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
      fn = () => {}
    } = data

    Object.assign(this, {
      label,
      index,
      fn
    })
  }

  static makeModel(data) {
    if (data instanceof MenuItemModel ) return data

    return new MenuItemModel(data)
  }

  static getProps(data) {
    const {
      label,
      index,
      fn
    } = MenuItemModel.makeModel(data)

    return {
      label,
      key: index,
      onClick: e => {
        fn()
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

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
      onClick = () => {}
    } = data

    Object.assign(this, {
      label,
      index,
      onClick
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

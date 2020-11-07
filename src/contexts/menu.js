import {
  createContext,
  useReducer
} from 'react'

import {
  RouteModel
} from '../models'

import {
  MenuItem
} from '../components'

import {
  Link,
  useLocation
} from 'wouter'

export const MenuContext = createContext()

export const MenuDispatch = {
  SELECT: 'select menu option',
}

export const MenuProvider = ({children, menu, selected = ''}) => {

  const [location] = useLocation()

  const [state, dispatch] = useReducer(
    (state, action) => {
      const { type, payload } = action

      switch (type) {
        case MenuDispatch.SELECT:
          return { ...state, selected: payload }
        default:
          throw new Error()
      }
    }, {
      selected: location
    })

  return (
    <MenuContext.Provider value={{state, dispatch}}>
      {
        menu.map( (data, index) => {
          return (
            <Link key={index} href={RouteModel.getAbsolutePath(data)}>
              <MenuItem {...data} />
            </Link>
          )
        })
      }
    </MenuContext.Provider>
  )
}

export const SubMenuContext = createContext({
  submenu: null,
  parentMenu: null,
})

export const SubMenu = ({ children, menu, base, selected=''}) => {

  const [state, dispatch] = useReducer( (state, action) => {
    const {type, payload} = action

    switch (type) {
      case MenuDispatch.SELECT:
        return { ...state, selected: payload }
      default:
        console.error(`Unknown dispatch type${type}`)
        return {
          ...state
        }
    }
  }, {
    selected: RouteModel.getAbsolutePath(menu[0]),
  })

  return (
    <SubMenuContext.Provider value={{state, dispatch}}>

    </SubMenuContext.Provider>
  )
}

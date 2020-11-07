import {
  createContext,
  useReducer
} from 'react'

import {
  MenuModel,
  RouteModel
} from '../models'

import {
  MenuItem
} from '../components'

import {
  Link,
  useLocation
} from 'wouter'

export const MenuContext = createContext(MenuModel.initialState)

export const MenuProvider = ({children, menu, current = ''}) => {
  const [location] = useLocation()
  const value = MenuModel.getProviderValue(...useReducer(MenuModel.reducer, {
    ...MenuModel.initialState,
    currentOption: location
  }))

  return (
    <MenuContext.Provider value={value}>
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

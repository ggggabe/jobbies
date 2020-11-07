import {
  createContext,
  useReducer
} from 'react'

import {
  MenuModel,
  MenuItemModel,
  RouteModel
} from '../models'

import {
  MenuItem
} from '../components'

import {
  Link
} from 'wouter'

export const MenuContext = createContext(MenuModel.initialState)

export const MenuProvider = ({children, menu}) => {
  const value = MenuModel.getProviderValue(...useReducer(MenuModel.reducer, MenuModel.initialState))

  return (
    <MenuContext.Provider value={value}>
      {
        menu.map( (data, index) => {
          return (
            <Link key={index} href={RouteModel.getAbsolutePath(data)}>
              <MenuItem {...MenuItemModel.getProps(data)} />
            </Link>
          )
        })
      }
    </MenuContext.Provider>
  )
}

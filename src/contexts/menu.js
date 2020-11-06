import {
  createContext,
  useReducer
} from 'react'

import {
  MenuModel,
  MenuItemModel,
} from '../models'

import {
  MenuItem
} from '../components'

export const MenuContext = createContext(MenuModel.initialState)

export const MenuProvider = ({children, menu}) => {
  const value = MenuModel.getProviderValue(...useReducer(MenuModel.reducer, MenuModel.initialState))

  return (
    <MenuContext.Provider value={value}>
      {
        menu.map( (data, index) => {
          const Link = MenuItemModel.getLink(data)

          return Link ? (
            <Link key={index}>
              <MenuItem {...MenuItemModel.getProps(data)} />
            </Link>
          ) : <MenuItem {...MenuItemModel.getProps(data)}/>
        })
      }
    </MenuContext.Provider>
  )
}

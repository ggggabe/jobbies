/* * * * * * * * * * * * * *
 *
 * PATH: src/components/Menu.js
 *
 * * * * * * * * * * * * * */

import { useContext } from 'react'
import { MenuContext } from '../contexts'
import { MenuModel, RouteModel} from '../models'

export const MenuItem = (data) => {
  const {
    label,
    onClick,
    style
  } = data

  const { state: { currentOption } , dispatch } = useContext(MenuContext)

  return (
    <div style={{
      cursor: 'pointer',
      ...style
    }} onClick={e => {
      e.preventDefault()
      dispatch({
        type: MenuModel.SELECT,
        payload: RouteModel.getAbsolutePath(data)
      })
      onClick(e)
    }}>
      <code style={{
        color: currentOption === RouteModel.getAbsolutePath(data) ? '#ff3366' : 'inherit'
      }}>
        {label}
      </code>
    </div>
  )
}


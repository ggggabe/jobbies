/* * * * * * * * * * * * * *
 *
 * PATH: src/components/Menu.js
 *
 * * * * * * * * * * * * * */

import { useContext } from 'react'
import { MenuContext, MenuDispatch } from '../contexts'
import { RouteModel} from '../models'

export const MenuItem = (data) => {
  const {
    label,
    onClick,
    style
  } = data

  const { state: { selected } , dispatch } = useContext(MenuContext)

  return (
    <div style={{
      cursor: 'pointer',
      ...style
    }} onClick={e => {
      e.preventDefault()
      dispatch({
        type: MenuDispatch.SELECT,
        payload: RouteModel.getAbsolutePath(data)
      })
      onClick(e)
    }}>
      <code style={{
        color: selected === RouteModel.getAbsolutePath(data) ? '#ff3366' : 'inherit'
      }}>
        {label}
      </code>
    </div>
  )
}


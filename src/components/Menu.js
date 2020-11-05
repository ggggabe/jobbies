/* * * * * * * * * * * * * *
 *
 * PATH: src/components/Menu.js
 *
 * * * * * * * * * * * * * */

import { useContext } from 'react'
import { MenuContext } from '../contexts'
import { MenuModel } from '../models'

export const MenuItem = ({
  label,
  onClick,
  style
}) => {
  const { state: { currentOption } , dispatch } = useContext(MenuContext)

  return (
    <div style={{
      cursor: 'pointer',
      ...style
    }} onClick={e => {
      e.preventDefault()
      dispatch({
        type: MenuModel.SELECT,
        payload: label
      })
      onClick(e)
    }}>
      <code style={{
        color: currentOption === label ? '#ff3366' : 'inherit'
      }}>
        {label}
      </code>
    </div>
  )
}


/* * * * * * * * * * * * * *
 *
 * PATH: jobbies/components/containers.js
 *
 * * * * * * * * * * * * * */

import { VerticalContainer } from '../common'

export const Card = ({style, children}) => (
  <div className='rounded' style={{
    width: 400,
    height: 400,
    margin: '40px ',
    display: 'flex',
    ...style
  }}>
    {children}
  </div>
)

export const CardHeader = ({meta, header, style}) => (
  <VerticalContainer style={{
    cursor: 'pointer',
    ...style,
  }}>
    <code style={{
      marginBottom: '10px',
    }}>{meta}</code>

    <h1>{header}</h1>
  </VerticalContainer>
)



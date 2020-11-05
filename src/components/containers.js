/* * * * * * * * * * * * * *
 *
 * PATH: src/components/containers.js
 *
 * * * * * * * * * * * * * */

export const VerticalContainer = ({children, style}) => (
  <div style={{
    display: 'flex',
    flexFlow: 'column',
    ...style
  }}>
    {children}
  </div>
)

export const HorizontalContainer = ({children, style}) => (
  <div style={{
    display: 'flex',
    flexFlow: 'row',
    ...style
  }}>
    {children}
  </div>
)

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

export const Button = ({
  label,
  fn ,
  style
}) => (
  <button className='rounded button' style={{ padding: '20px 40px', ...style }} onClick={(e) => {
    e.preventDefault()
    fn()
  }}>
    {label}
  </button>
)


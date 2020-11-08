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


export const CenteredContent = ({
  children,
  style
}) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style
  }}>
    {children}
  </div>
)

export const Button = ({
  label,
  fn ,
  style
}) => (
  <button className='rounded button' style={{ padding: '20px 40px', ...style }} onClick={(e) => {
    fn && e.preventDefault()
    fn && fn()
  }}>
    {label}
  </button>
)

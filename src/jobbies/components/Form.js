import { createContext, useContext } from 'react'
import { VerticalContainer, Button } from '../common'

export const FormContext = createContext({})

export const Input = ({
  label, field, placeholder
}) => {
  const { state, dispatch } = useContext(FormContext)

  return <VerticalContainer style={{
    marginTop: '20px',
    marginRight: '20px',
    flexWrap: 'wrap',
  }}>
    <label style={{
      marginLeft: 30,
      marginBottom: '1em',
    }} for={field}>{label}</label>
    <input
      className='rounded'
      style={{
        padding: '30px',
        borderRadius: 20
      }}
      name={field}
      type='text'
      value={state[field] || ''}
      placeholder={placeholder || label}
      onChange={
        e => {
          dispatch({ type: 'update', payload: { [field]: e.target.value }})
        }
      }
    />
  </VerticalContainer>
}

export const Select = ({
  label, field, options
}) => {
  const { state, dispatch } = useContext(FormContext)

  return <VerticalContainer style={{
    marginTop: 20
  }}>
    <label for={field}>{label}</label>
    <select name={field} value={state[field] || null} onChange={e => {
      dispatch({ type: 'update', payload: { [field]: e.target.value }})
    }}>
      <option value={null}> Select One </option>
      {
        options.map(option => <option value={option}>{option}</option>)
      }
    </select>
  </VerticalContainer>
}

export const Submit = () => {
  return <Button style={{
    marginTop: 40,
    alignSelf: 'flex-end'
  }} label='Submit' />
}


export const Form = ({children}) => {
  const { dispatch } = useContext(FormContext)

  return <form style={{
    display: 'flex',
    flexFlow: 'column'
  }} onSubmit={(event) => {
    event.preventDefault()

    dispatch({ type: 'submit', payload: {...event.target.value}})
  }}>
    {children}
    <Submit />
  </form>
}

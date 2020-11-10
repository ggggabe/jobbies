/* * * * * * * * * * * * * *
 *
 * PATH: jobbies/index.js
 *
 * * * * * * * * * * * * * */

import { useReducer } from 'react'
import { FormContext, Form, Input } from './components'
import { CenteredContent, HorizontalContainer } from '../components'

/*
const List = () => (
  <HorizontalContainer style={{
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }}>
    <JobCards />
  </HorizontalContainer>
)
*/

const JobFormContainer = () => {
  const [state, dispatch] = useReducer( (state, action) => {
    const { type, payload } = action

    switch (type) {
      case 'update':
        return { ...state, ...payload }
      case 'clear':
        return {}
      case 'submit':
        console.table(state)
        return {...state}
      default:
        return state
    }
  }, {})

  return <FormContext.Provider value={{
    state,
    dispatch
  }}>
    <Form>
      <h1> New Job </h1>
      <HorizontalContainer >
        <Input label='Company' field='company' />
        <Input label='Location' field='location' options={[ 'Remote', 'NY', 'NJ' ]} />
      </HorizontalContainer>
      <Input label='Position' field='position' />
      <Input label='Website' field='website' />
    </Form>
  </FormContext.Provider>
}


const Jobbies = () => {
  return <CenteredContent style={{
    flex: 1
  }}>
    <JobFormContainer />
  </CenteredContent>
}

export default Jobbies

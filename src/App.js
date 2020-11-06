/* * * * * * * * * * * * * *
 *
 * PATH: src/App.js
 *
 * * * * * * * * * * * * * */

import { JobCards, HorizontalContainer, VerticalContainer } from './components'
import { MenuProvider } from './contexts'
import { Link } from 'wouter'

const menu = ['one', 'two', 'three'].map( (label, index) => ({
  label,
  index,
  link: ({children}) => (<Link href={`/${label}`}> {children} </Link>)
}))

const App = () => {
  return (
    <HorizontalContainer>
      <VerticalContainer style={{
        width: 200,
        paddingTop: '40px',
        textAlign: 'right'
      }}>
        <MenuProvider menu={menu} />
      </VerticalContainer>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}>
        <JobCards />
      </div>
    </HorizontalContainer>
  );
}

export default App

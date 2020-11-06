/* * * * * * * * * * * * * *
 *
 * PATH: src/App.js
 *
 * * * * * * * * * * * * * */

import { JobCards, HorizontalContainer, VerticalContainer } from './components'
import { MenuProvider } from './contexts'
import { Link } from 'wouter'

const menu = [
  'Application Tracker',
  'Idle Animation',
  'Scheduler'
].map(
  (label, index) => ({
    label,
    index,
    absoluteLocation: label.toLowerCase().replace(' ', '-'),
    link: ({children}) => (<Link href={`/${label}`}> {children} </Link>)
  })
)

const App = () => {
  return (
    <HorizontalContainer>
      <VerticalContainer style={{
        width: 200,
        paddingTop: '40px',
        textAlign: 'right',
        flex: '0 0 180px'
      }}>
        <MenuProvider menu={menu} />
      </VerticalContainer>

      <HorizontalContainer style={{
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}>
        <JobCards />
      </HorizontalContainer>
    </HorizontalContainer>
  );
}

export default App

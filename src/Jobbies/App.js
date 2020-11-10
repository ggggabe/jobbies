/* * * * * * * * * * * * * *
 *
 * PATH: jobies/src/App.js
 *
 * * * * * * * * * * * * * */

import { JobCards, HorizontalContainer, VerticalContainer } from './components'
import { MenuProvider } from './contexts'
import { RouteModel } from './models'
import { Route } from 'wouter'

const MAIN_MENU = [
  'Application Tracker',
  'Idle Animation',
  'Scheduler'
].map(
  (label, index) => ({
    label,
    index,
    absolutePath: RouteModel.cleanPath(label),
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
        <MenuProvider menu={MAIN_MENU} />
      </VerticalContainer>

      <Route path={RouteModel.cleanPath('/application-tracker')}>
        <HorizontalContainer style={{
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
          <JobCards />
        </HorizontalContainer>
      </Route>
    </HorizontalContainer>
  );
}

export default App

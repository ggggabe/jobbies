/* * * * * * * * * * * * * *
 *
 * PATH: table/src/App.js
 *
 * * * * * * * * * * * * * */
import { Route } from 'wouter'


import { HorizontalContainer, VerticalContainer } from './components'
import { MenuProvider } from './contexts'
import { RouteModel } from './models'

import Jobbies from './jobbies'

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
        <Jobbies />
      </Route>
    </HorizontalContainer>
  );
}

export default App

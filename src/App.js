/* * * * * * * * * * * * * *
 *
 * PATH: table/src/App.js
 *
 * * * * * * * * * * * * * */
import { Route } from 'wouter'


import { HorizontalContainer, VerticalContainer } from './components'
import { MenuProvider } from './contexts'
import { RouteModel } from './models'

import Jobbies from './Jobbies'
import Idle from './Idle'
import Scheduler from './Scheduler'

const MAIN_MENU = [
  'Jobbies',
  'Idle',
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
    <HorizontalContainer style={{
      minHeight: '100%'
    }}>
      <VerticalContainer style={{
        width: 200,
        paddingTop: '40px',
        textAlign: 'right',
        flex: '0 0 180px'
      }}>
        <MenuProvider menu={MAIN_MENU} />
      </VerticalContainer>

      <Route path={RouteModel.cleanPath('jobbies')} component={Jobbies} />
      <Route path={RouteModel.cleanPath('idle')} component={Idle} />
      <Route path={RouteModel.cleanPath('scheduler')} component={Scheduler} />
    </HorizontalContainer>
  );
}

export default App

/* * * * * * * * * * * * * *
 *
 * PATH: jobbies/index.js
 *
 * * * * * * * * * * * * * */

import { JobCards,} from './components'
import { HorizontalContainer } from '../components'

const Jobbies = () => (
  <HorizontalContainer style={{
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }}>
    <JobCards />
  </HorizontalContainer>
)

export default Jobbies

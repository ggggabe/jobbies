import { JobsContext } from './contexts'
import { JobCards } from './components'

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    }}>
      <JobCards />
    </div>
  );
}

export default App

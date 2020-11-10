/* * * * * * * * * * * * * *
 *
 * PATH: jobbies/index.js
 *
 * * * * * * * * * * * * * */

import { createContext } from 'react'
import { Api } from './common'
import { ApiContext } from './contexts'
import { JobbiesWrapper } from './App.js'

if (!process.env.JOBBIES_API_TOKEN) console.warn(`Token not found`)
if (!process.env.OSCAR_API) console.warn(`Oscar API not found`)

const api = Api.makeModel(
  process.env.JOBBIES_API_TOKEN,
  `${process.env.OSCAR_API}/jobbies`
)

export default () => <ApiContext.Provider value={api}>
  <JobbiesWrapper />
</ApiContext.Provider>

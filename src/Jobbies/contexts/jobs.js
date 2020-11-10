import {
  createContext,
} from 'react'

const STUB = [
  {
    company: '1Password',
    role: 'Web Assembly Engineer',
    url: 'https://jobs.lever.co/1password/0623888f-0125-41b9-9902-eae8cfeae0c3/apply'
  }, {
    company: 'zero.nyc',
    role: 'Fullstack Developer',
    url: 'https://zero.nyc/careers/full-stack-developer/'
  }, {
    company: 'figma',
    role: 'Software Engineer',
    url: 'https://zero.nyc/careers/full-stack-developer/'
  }, {
    company: 'figma',
    role: 'Software Engineer',
    url: 'https://jobs.lever.co/figma/b3721c76-2c07-4e8c-b50d-bd09e47fe572'
  }, {
    company: 'sketch',
    role: 'Frontend Developer',
    url: 'https://www.sketch.com/jobs/frontend-developer/'
  }, {
    company: 'sketch',
    role: 'Backend Developer',
    url: 'https://www.sketch.com/jobs/frontend-developer/'
  }
]

export const JobsContext = createContext(STUB)


// HOOKUP TO API DB

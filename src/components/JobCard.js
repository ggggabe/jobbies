import { useContext } from 'react'
import { JobModel } from '../models'
import { JobsContext } from '../contexts'

const JobCard = ({model}) => {
  const {
    company,
    role,
    url
  } = JobModel.getCardProps(model)

  return (
    <div className='rounded' style={{
      width: 400,
      height: 400,
      margin: '40px ',
      display: 'flex',
      flexFlow: 'column',
      paddingTop: '20px',
      justifyContent: 'space-between'
    }}>
      <div style={{
        display: 'flex',
        flexFlow: 'column'
      }}>
        <code style={{
          marginBottom: '10px'
        }}>{company}</code>
        <h1>{role}</h1>
      </div>

      <div className='rounded button' style={{
        }}>
        <a href={url}> Apply Now </a>
      </div>
    </div>
  )
}

export const JobCards = () => {
  const jobs = useContext(JobsContext)
  console.log(jobs)

  return <>
    {jobs.map( (job, index) => <JobCard key={index} model={JobModel.makeModel(job)} /> )}
  </>
}

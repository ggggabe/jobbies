import { useContext } from 'react'
import { JobModel } from '../models'
import { JobsContext } from '../contexts'
import { Card, CardHeader } from './containers'
import { Button } from '../common'

const JobCard = ({model}) => {
  const {
    company,
    role,
    url
  } = JobModel.getCardProps(model)

  return (
    <Card style={{
      flexFlow: 'column',
      paddingTop: '20px',
      justifyContent: 'space-between'
    }}>
      <CardHeader meta={company} header={role} />
      <Button label='website' fn={() => window.open(url, '_blank')} style={{ alignSelf: 'flex-end' }} />
    </Card>
  )
}

export const JobCards = () => {
  const jobs = useContext(JobsContext)

  return <>
    {jobs.map( (job, index) => <JobCard key={index} model={JobModel.makeModel(job)} /> )}
  </>
}

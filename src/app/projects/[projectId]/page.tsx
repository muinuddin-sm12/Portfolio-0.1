import ProjectDetails from '@/components/projectDetails/ProjectDetails'
import React from 'react'

const page = async ({params}: {params:Promise<{projectId:string}>}) => {
  const projectId = (await params).projectId;
  return (
    <div>
      <ProjectDetails id={projectId}/>
    </div>
  )
}

export default page
"use client"

import Nav from "@/components/common/nav";
import ProjectDetailMain from "@/components/layout/project-details-layout";

const ProjectDetail = ({ projectId }) => {
    return (
        <>
            <Nav show={'flex'} url={'/projects'} text={'Back to Projects'}/>
            <ProjectDetailMain projectId={projectId}/>
            
        </>
    )
}

export default ProjectDetail;
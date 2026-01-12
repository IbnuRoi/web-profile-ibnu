const { default: ProjectDetail } = require("..")


const ProjectDetailLayout = async ({ params }) => {
    const { projectId } = await params;
    return(
        <>
            <ProjectDetail getParams={projectId}/>
        </>
    )
}

export default ProjectDetailLayout;
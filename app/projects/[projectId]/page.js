const { default: ProjectDetail } = require("..")


const ProjectDetailLayout = async ({ params }) => {
    const { projectId } = await params;
    return(
        <>
            <ProjectDetail projectId={projectId}/>
        </>
    )
}

export default ProjectDetailLayout;
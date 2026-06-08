"use client"

import Footer from "@/components/common/footer";
import Nav from "@/components/common/nav";
import ProjectsMain from "@/components/layout/projects-layout";

const ProjectsLayout = () => {
  return (
    <>
        <Nav show={'hidden'}/>
        <ProjectsMain/>
        <Footer/>
    </>
  )
}

export default ProjectsLayout
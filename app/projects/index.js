"use client"

import { useEffect } from "react";
import ProjectData from "../../public/data/projects.json";

import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import ProjectDetailMain from "@/components/Project-Details/ProjectDetails";

const ProjectDetail = ({ getParams }) => {
    const router = useRouter();
    const projectId = parseInt(getParams);
    let getDetail;

    getDetail = ProjectData.projects;

    const checkMatch = getDetail.find((detail) => detail.id === projectId);

    useEffect(() => {
        if (!checkMatch && projectId) {
            router.push("/");
        }

    }, [checkMatch, router]);

    return (
        <>
            <Nav downloadCv="hidden" viewCv="hidden"/>
            <ProjectDetailMain checkMatchDetail={checkMatch ?? null}/>
        </>
    )
}

export default ProjectDetail;
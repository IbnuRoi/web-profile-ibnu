"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProjectLayout = ({ params }) => {
    const router = useRouter();
    const projectId = params.projectId;

    useEffect(() => {
        if(projectId === undefined) {
            router.push("/")
        }
    }, []);
}

export default ProjectLayout;
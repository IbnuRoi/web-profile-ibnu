"use client"

import Nav from "@/components/Nav";
import CvComp from "@/components/View-Cv/ViewCv";

const ViewCv = () => {
    return(
        <>
            <Nav viewCv="hidden" homeButton="hidden"/>
            <CvComp/>
        </>
    )
}

export default ViewCv;
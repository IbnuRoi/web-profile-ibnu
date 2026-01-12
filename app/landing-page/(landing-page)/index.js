"use client"

import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Nav from "@/components/Nav";


const LandingPageLayout = () => {
    return(
        <>
            <Nav homeButton="hidden" downloadCv="hidden"/>
            <Hero/>
            <Main/>
        </>
    )
}

export default LandingPageLayout;
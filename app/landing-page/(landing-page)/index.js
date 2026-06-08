"use client"

import Hero from "@/components/ui/hero-banner";
import Main from "@/components/layout/main-layout";
import Nav from "@/components/common/nav";


const LandingPageLayout = () => {
    return(
        <>
            <Nav show='hidden'/>
            <Hero/>
            <Main/>
        </>
    )
}

export default LandingPageLayout;
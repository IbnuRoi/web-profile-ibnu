const { default: LandingPageLayout } = require("./(landing-page)")
import ProjectData from "@/public/data/projects.json";


const LandingPage = async () => {
    return(
        <>
            <LandingPageLayout/>
        </>
    )
}

export default LandingPage;
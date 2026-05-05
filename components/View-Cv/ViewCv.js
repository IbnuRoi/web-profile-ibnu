
const CvComp = () => {
    return(
        <>
            <section className="pt-16 w-full h-screen">
                <iframe
                    src={process.env.CV_URL}
                    title="Cv"
                    className="w-full h-full"
                ></iframe>
            </section>
        </>
    )
}

export default CvComp;
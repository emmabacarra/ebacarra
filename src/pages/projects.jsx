import Navbar from "../components/navbar";
import Card from "../components/card";
import Footer from "../components/footer";


export default function Projects() {
    return (
        <div className="flex flex-col min-h-screen bg-violet">
            <Navbar />
            <main className="flex flex-col mx-7 mb-7 bg-skin">
                <h1 className="project-header text-center text-orange mt-14 font-genty">Projects</h1>
                <section className="overview mx-20 mb-10">
                    <h3 className="text-violet font-bogart-bold">Overview</h3>
                    <p className="font-tt_firs_neue">
                        My current project involves the research of the Cosmic Microwave Background with deep
                        learning. Previously, I searched for potential black holes candidates using the photometric
                        data of binary systems, and created interactive widgets for data visualization.
                    </p>
                </section>
                <section className="works mx-20 mb-10">
                    <h3 className="text-violet font-bogart-bold">Select Works</h3>
                    <div className="projects grid grid-cols-3 grid-flow-row gap-8 my-5">
                        <Card background={"Explore the capabilities of many-to-one transformer architectures to identify post-collision decayed particles. With data from the CERN laboratory, this can reveal new secrets in particle physics."} img={"../public/imgs/tag, you_re it!.jpg"} alt={""} title={"Tag, You&apos;re It!"} />

                        <Card background={"`As a potential influence on stellar formation, compare the relationship between two-bodied systems and a single galaxy. An interacting pair can be the spark that ignites stellar formation, an important quality for the stellar nurseries of the Universe. <br/> <br/> These events are an important tool for characterizing the dynamic histories and evolution of galaxies in our Universe.`"} img={"../public/imgs/galactic singles and pairs.jpg"} alt={""} title={"Galactic Singles and Pairs"} />

                        <Card background={"Gather and analyze the photometric data of binary systems from the TESS satellite. Investigating their properties could potentially reveal new black hole candidates."} img={"../public/imgs/the search for black holes.png"} alt={""} title={"The Search For Black Holes"} />

                        <Card background={"lkahglkeagelng"} img={"../public/imgs/cmb unsupervised.jpg"} alt={""} title={"CMB Unsupervised"} />

                        <Card background={"lkahglkeagelng"} img={"../public/imgs/hubble_s mystery.png"} alt={""} title={"Who&apos;s Waving?"} />
                        <Card background={"lkahglkeagelng"} img={"../public/imgs/project vax.jpg"} alt={""} title={"Project Vax"} />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
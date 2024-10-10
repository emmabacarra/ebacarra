import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-violet">
            <Navbar />
                <main className="flex flex-col mx-7 mb-7 bg-skin">
                <div className="hero relative flex items-center justify-center bg-skin p-10">
                    <div className="relative m-5">
                        <h1 className="name m-2 text-orange font-genty text-7xl">About Me</h1>
                        <img className="triple-heart absolute" src="/imgs/triple heart doodle.svg" alt="" />
                        <p className="about p11 mt-5 font-tt_firs_neue">
                            My name is Emma, and I&apos;m a third year student at the University of Washington 
                            studying Physics and Astronomy and minor in Data Science. I love to learn about machine 
                            learning, cosmology, and high energy physics.
                            <br />
                            <br />
                            I enjoy working as the outreach coordinator with the academic advisors in support of
                            the students and faculty! It involves helping to organize astronomy department events
                            and provide resources for student engagement.
                            <br />
                            <br />
                            Right now, I&apos;m focused on strengthening my data science skills to apply to research
                            topics in physics and astronomy. Following my genuine interest for coding, I push myself
                            to expand my programming skills and optimize my work.
                            <br />
                            <br />
                            When I&apos;m not wearing my student hat, I find joy in the form of dance and art - 
                            I&apos;ve had these hobbies throughout my whole life!
                        </p>
                    </div>
                    <img className="about-img" src="/imgs/lavender field with border.png" alt="Emma Bacarra Image" />
                </div>
            </main>
            <Footer />
        </div>
    );
}
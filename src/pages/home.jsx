import Navbar from "../components/navbar"
import Button from "../components/button";
import Footer from "../components/footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-violet">
            <Navbar />
            <main className="flex flex-col mx-7 mb-7 bg-skin">
                <div className="hero relative flex items-end justify-center bg-skin p-10">
                    <div className="relative m-5"> 
                        <h3 className="text-center font-tt_firs_neue-thin">PORTFOLIO</h3>
                        <h1 className="name m-2 text-center font-bogart-italic text-orange">Emma Bacarra</h1>
                        <p className="intro relative px-28 py-11 mt-10 text-center">
                            <span className="text-orange font-genty text-2xl">Hello! </span>
                            My name is Emma, and I&apos;m a student at the University of Washington in Seattle.
                            As a space enthusiast, I study Physics and Astronomy and minor in Data Science. My passions
                            broadly lie in <span className="text-orange">machine learning</span>, <span className="text-orange">cosmology</span>, and <span className="text-orange">high energy physics</span>!
                        </p>
                        <img className="retro-textbox absolute w-full" src="../public/imgs/decorated retro text box.svg" alt="retro themed card with planet at bottom left and some stars at top right" />
                    </div>
                    <img className="disco absolute" src="../public/imgs/disco ball 1.svg" alt="disco ball svg" />
                    <img className="hero-img" src="../public/imgs/me in paris.png" alt="Emma Bacarra Image" />
                </div>
                <div className="nav-section flex justify-evenly mt-10 mb-20">
                    <Button link={"/About"} text="About Me" />
                    <Button link={"/Projects"} text="Projects" />
                    <Button link={"/Resume"} text="Experience" />
                </div>
            </main>
            <Footer />
        </div>
    );
}
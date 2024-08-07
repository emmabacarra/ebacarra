import Navbar from "../components/navbar"
import Button from "../components/button";
import ResumeSection from "../components/resume-section";
import Footer from "../components/footer";

const awards = [
    [
        'Dean\'s List Scholar - University of Washington', 
        'Baer Prize Scholar - UW Department of Astronomy', 
        'Undergraduate Dean\'s Scholarship - UC Santa Cruz', 
        'Discover Award Scholarship - Penn State'
    ],
    ['2022, 2023-2024', '2024', '2021', '2020'],
]

const skills = [
    "Python | Jupyter Notebooks",
    "R | R Studio",
    "Mathematica",
    "LaTeX & Markdown",
    "Google Apps Script (JavaScript)",
    "Git/Github",
    "Google & Microsoft Suites"
]

const courses = [
    "Data Science Foundations",
    "Statistics & Machine learning",
    "Introductory Quantum Mechanics",
    "Electromagnetism Series",
    "Astro Observation & Data Analysis",
    "Git/Github",
    "Mathematical Methods of Physics"
]

const education = [
    "B.S. Physics, B.S. Astronomy",
    "Unviersity of Washington, Seattle, Washington", 
    "Data Science minor",
    "Expected June 2025"
]

const experience = [
    {
        title: 'Student Researcher | Raw Data Speaks Initiative',
        date: 'UW Department of Astronomy (2024 - Present)',
        details: [
            'Develop neural network models with auto encoder architectures',
            'Investigate and analyze spectral data of the Cosmic Microwave Background (CMB)',
            'Discuss the efficiency and products of a trained model for further improvement',
        ],
    },
    {
        title: 'Outreach Coordinator',
        date: 'UW Department of Astronomy (2023 - Present)',
        details: [
            'Organize and maintain department events and community involvement',
            'Provide resources for student engagement, well-being, professional development, and academic support',
            'Adminstrative work, managing student files, committee responsibilities',
        ],
    },
    {
        title: 'Planetarium Volunteer',
        date: 'UW Department of Astronomy (2022 - 2023)',
        details: [
            'Discuss customized topics in space for youth and adapt to diverse age groups',
            'Operate equipment while presenting engaging visuals and concepts',
            'Assist with determining events for the mobile planetarium outreach projects',
        ],
    },
    {
        title: 'Researcher | The Search for Black Holes',
        date: 'UW Department of Astronomy (2022 - 2023)',
        details: [
            'Extrapolate NASA\'s TESS data to analyze star fluxes of binary systems',
            'Utilize Python in Jupyter to explore potential new black hole candidates',
        ],
    },
    {
        title: 'Author | Project Vax',
        date: 'UW Information School (2021)',
        details: [
            'Descirbe the impact of vaccinations on public health and collaborate on quantitatively exploring its correlations with mortality rates',
            'Interactive visualization and widgets to explore various Statistics in R Studio',
        ],
    },
]

export default function Resume() {
    return (
        <div className="flex flex-col min-h-screen bg-violet">
            <Navbar />
            <main className="flex flex-col mx-7 mb-7 bg-skin">
                <h1 className="resume text-center text-orange my-14 font-genty">Resume</h1>
                <div className="text-center mb-20">
                    <Button link={""} text={"Download"} />
                </div>
                <div className="flex justify-between mx-40 mb-20 font-tt_firs_neue">
                    <ResumeSection title={"Skills"} items={skills} padding={false} isFlex={true} isList={true} />
                    <ResumeSection title={"Revelant Courses"} items={courses} padding={false} isFlex={true} isList={true} />
                </div>
                <ResumeSection title={"Education"} items={education} isFlex={true} isList={true} />
                <ResumeSection title={"Experience"} items={experience} />
                <ResumeSection title={"Awards"} items={awards} isTwoColumn={true} />
            </main>
            <Footer />
        </div>
    );
}
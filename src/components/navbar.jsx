import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 mx-7 bg-violet border border-b-[#d9d3d0] border-x-0">
            <div className="mb-7 bg-violet"></div>
            <nav className="navbar flex justify-between items-center bg-skin">
                <div className="logo flex items-center mx-5">
                    <Link to="/">
                        <img src="/imgs/bordered logo.svg" alt="Emma logo" />
                    </Link>
                </div>
                <ul className="flex mr-5">
                    <li><Link className="p-3 m-3 hover:text-orange active:text-orange" to="/About">About Me</Link></li>
                    <li><Link className="p-3 m-3 hover:text-orange active:text-orange" to="/Projects">Projects</Link></li>
                    <li><Link className="p-3 m-3 hover:text-orange active:text-orange" to="/Resume">Resume</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default function Footer() {
    return (
        <footer className="mt-auto min-w-full">
            <div className="flex justify-between items-start mt-2 p-10 bg-brown">
                <div className="ml-5">
                    <img className="full-logo" src="/imgs/full logo.svg" alt="emma full logo" />
                    <div className="contacts flex">
                        <div className="mt-5 mx-3">
                            <p className="text-grey"><a href="mailto:ebacarra@uw.edu">ebacarra@uw.edu</a></p>
                            <p className="text-grey">&#40;703&#41; 819.3519</p>
                        </div>
                        <div className="social-links flex gap-8 mt-5 mx-3">
                            <a href="https://www.linkedin.com/in/ebacarra/"><i className="fa-brands fa-linkedin-in text-skin text-4xl"></i></a>
                            <a href="https://github.com/emmabacarra"><i className="fa-brands fa-github text-skin text-4xl"></i></a>
                        </div>
                    </div>
                </div>
                <div className="text-right mr-5">
                    <p className="text-grey leading-none">Designed by <span className="text-orange">Emma Bacarra</span></p>
                    <p className="text-grey leading-none">Developed by <span className="text-orange">Leo Li</span></p>
                    <p className="text-grey mt-2">Copyright &copy; Emma Bacarra 2024</p>
                </div>
            </div>
        </footer>
    );
}
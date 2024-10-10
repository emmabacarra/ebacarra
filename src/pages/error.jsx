import Button from "../components/button";

export default function Error() {
    return (
        <body className="relative flex flex-col justify-center items-center min-h-screen bg-orange">
            <div className="err-msg-container flex flex-col items-start">
                <h1 className="err-msg-title text-yellow leading-none font-genty">Sorry!</h1>
                <h2 className="err-msg text-grey leading-tight font-bogart-bold">There&apos;s been a navigation error...</h2>
            </div>
            <Button link={"/"} text={"Back to Earth"} />
            <img className="ship absolute" src="/imgs/alien ship.svg" alt="" />
        </body>
    );
}
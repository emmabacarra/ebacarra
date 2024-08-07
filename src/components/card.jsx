import PropTypes from 'prop-types';

function CardItem(props) {
    return (
        <div className="card">
            <img className="absolute object-cover border border-transparent rounded-3xl" src={props.asset} alt={props.alt} />
            <div className="description bg-grey border border-transparent rounded-3xl">
                <img className="absolute object-cover border border-transparent rounded-3xl opacity-20" src={props.asset} alt={props.alt} />
                <p className="absolute m-10 font-tt_firs_neue">{props.desc}</p>
            </div>
        </div>
            
    );
}

export default function Card(props) {
    return (
        <div className="card-item">
            <CardItem desc={props.background} asset={props.img} alt={props.alt} />
            <div className="card-title">
                <h3 className="font-bogart-bold mt-4">{props.title}</h3>
                <a href="">
                    <p className="flex items-center">Read More <span><img className="right-arrow ml-2" src="../public/imgs/right arrow.svg" alt="right arrow" /></span></p>
                </a>
            </div>
        </div>
    );
}

Card.propTypes = {
    background: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

CardItem.propTypes = {
    desc: PropTypes.string.isRequired,
    asset: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};
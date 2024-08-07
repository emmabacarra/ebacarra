import PropTypes from "prop-types";

export default function Button(props) {
    return (
        <a href={props.link}>
            <button>
                <span className="star-4-point-top" />
                {props.text}
                <span className="star-4-point-bottom" />
            </button>
        </a>
    );
}

Button.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
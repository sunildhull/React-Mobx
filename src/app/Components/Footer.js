import React from "react";
import PropTypes from "prop-types";

export function Footer(props) {
    return (
        <div>
            <hr />
            <p >Copyrights@{props.year}, {props.company}</p>
        </div>
    )
}
//vaildation and error handling
Footer.propTypes={
    year:PropTypes.number.isRequired,
    company:PropTypes.string
}

Footer.defaultProps={
    company:"Sunil co.in"
}
import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function Search({ handleSearch }) {
    return (
        <InputGroup className="search">
            <FormControl
                placeholder="Search Recipe.."
                onChange={event => handleSearch(event)}
            />
        </InputGroup>
    );
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};
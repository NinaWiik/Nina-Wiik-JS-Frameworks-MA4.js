import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function RecipeItem({ title, thumbnail }) {
    return (
        <Card>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link to={"recipe/" + title}>
                    <Button variant="info" block>
                        Ingredients
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
};

export default RecipeItem;
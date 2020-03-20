import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";

function IngredientList() {
    const [ingredient, setIngredient] = useState(null);
    const [loading, setLoading] = useState(true);

    let { title } = useParams();

    const url = BASE_URL + title;

    useEffect(() => {
        fetch(url) 
            .then(response => response.json())
            .then(json => setIngredient.log(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spinner animation="border" variant="info" />;
    }

    return (
        <Row>
            <Col md={6} className="detail-image">
                <Image src={ingredient.thumbnail} roundedCirle />
            </Col>
            <Col>
                <h1>Ingredients:</h1>
                <p>
                    {ingredient.ingredients}
                </p>
            </Col>
        </Row>
    );
}

export default IngredientList;
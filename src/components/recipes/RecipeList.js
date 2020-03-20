import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeItem from "./RecipeItem";
import { BASE_URL } from "../../constants/api";
import Search from "./Search";

function RecipeList() {

    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setRecipes(json.results);
                setFilteredRecipes(json.results);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    const filterCards = function(e) {
        // Let's get the value the user typed in and make it lower case:
        const searchValue = e.target.value.toLowerCase();

        // Create a new array from ther characters array
        const filteredArray = recipes.filter(function(reci) {
            // make each name lovercase so we can check it properly with the search value
            const lowerCaseName = reci.title.toLowerCase();

            // Check if the character name begins with the search value using the startWith method
            if (lowerCaseName.startsWith(searchValue)) {
                // if it does, return true
                // this will add it to the new filtered array
                return true;
            }
            return false;
        });

        // set filtered characters to the new array
        setFilteredRecipes(filteredArray);
    };

    if (loading) {
        return <Spinner animation="border" variant="info" />;
    }

    return (
        <>
            <Search handleSearch={filterCards} />
            <Row className="justify-content-center">
                {filteredRecipes.map(recipe => {
                    const { title, thumbnail } = recipe;

                    return (
                        <Col sm={6} md={3} key={title}>
                            <RecipeItem title={title} thumbnail={thumbnail} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default RecipeList;
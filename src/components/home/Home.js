import React from "react";
import Heading from "../layout/Heading";
import RecipeList from "../recipes/RecipeList";

function Home() {
    return (
        <>
            <Heading title="Recipe Puppy" />
            <RecipeList />
        </>
    );
}

export default Home;
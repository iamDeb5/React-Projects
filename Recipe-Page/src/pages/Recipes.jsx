import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'

const Recipes = () => {
    const { data, setData } = useContext(recipeContext)

    const recipe = data.map((recipe) => {
        return (
            <div key={recipe.id}>
                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>
                <p>{recipe.ingredients}</p>
                <p>{recipe.instructions}</p>
                <p>{recipe.category}</p>
            </div>
        )
    })
    return (
        <>
            <h1 className='text-2xl font-bold'>Recipes</h1>
            {recipe}
        </>
    )
}

export default Recipes
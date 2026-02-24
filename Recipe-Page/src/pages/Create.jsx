import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipeContext } from '../context/RecipeContext'

const Create = () => {
    const { data, setData } = useContext(recipeContext)
    const { register, handleSubmit, reset } = useForm()

    const submitHandler = (recipe) => {
        recipe.id = nanoid()
        setData([...data, recipe])
        reset()
    }
    return (
        <form onSubmit={handleSubmit(submitHandler)}>

            <input type="url" {...register('image')} className='block border-b outline-0 p-2' placeholder='Enter Image URL' />
            <small className='text-red-400'>This is how the error is shown</small>

            <input className='block border-b outline-0 p-2' {...register('title')} type="text" placeholder='Recipe Title' />

            <textarea
                className='block border-b outline-0 p-2'
                {...register('description')}
                placeholder='Description'
            ></textarea>

            <textarea className='block border-b outline-0 p-2' {...register('ingredients')} placeholder='Write Ingredients separated by comma'></textarea>

            <textarea className='block border-b outline-0 p-2' {...register('instructions')} placeholder='Write Instructions separated by comma'></textarea>

            <select className='block border-b outline-0 p-2' {...register('category')}>
                <option value="">Select Category</option>
                <option value="Indian">Indian</option>
                <option value="Chinese">Chinese</option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
            </select>


            <button type='submit' className='block mt-5  bg-gray-900 px-4 py-2 rounded'>Save Recipe</button>

        </form>
    )
}

export default Create
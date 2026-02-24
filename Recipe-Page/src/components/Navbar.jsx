import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center justify-center gap-x-10 text-sm mb-10'>
            <NavLink className={({ isActive }) => isActive ? "text-red-500" : "text-white"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-red-500" : "text-white"} to="/recipes">Recipes</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-red-500" : "text-white"} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => `px-4 py-2 bg-gray-900 rounded ${isActive ? "text-red-500" : "text-white"}`} to="/create-recipe">Create Recipe</NavLink>
        </div>
    )
}

export default Navbar
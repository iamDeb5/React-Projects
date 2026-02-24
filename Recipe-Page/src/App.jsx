import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <div className='bg-gray-800 w-screen h-screen text-white font-thin py-10 px-[10%]'>
            <Navbar />
            <MainRoutes />
        </div>
    )
}

export default App
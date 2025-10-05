import React from 'react'
import { logo } from './assets'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Home, CreatePost } from './pages'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
          <Link to="/">
            <img src={logo} alt="Logo" className='w-28 object-contain' />
          </Link>
          <Link to="/create-post" className='font-medium font-inter bg-[#6469ff] text-white px-4 py-2 rounded-md'>
            Create Post
          </Link>
        </header>
        <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-post' element={<CreatePost />} />
          </Routes>
        </main>
      </BrowserRouter>

      <footer className='w-full flex justify-center items-center bg-white sm:px-8 px-4 py-4 border-t border-t-[#e6ebf4]'>
        <p className='text-sm text-gray-600'>© 2023 AI Image Generator. All rights reserved.</p>
      </footer>
      
    </div>
  )
}

export default App

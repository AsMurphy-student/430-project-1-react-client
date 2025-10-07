// import { useState } from 'react';
import './App.css'
import GetModule from './components/GetModule';
import PostModule from './components/PostModule';

function App() {
  return (
    <div className='bg-black min-h-screen'>
      <h1 className='text-white'>Project 1 Book API</h1>

      <GetModule queryURL='/getBooks' />
      <GetModule queryURL='/getBooksByTitle' />
      <GetModule queryURL='/getBooksByAuthor' />
      <GetModule queryURL='/getBooksByYear' />

      <PostModule queryURL={'/addBook'} />
      <PostModule queryURL={'/addGenre'} />
    </div>
  )
}

export default App

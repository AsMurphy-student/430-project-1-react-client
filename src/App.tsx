// import { useState } from 'react';
import './App.css'
import GetModule from './components/GetModule';

function App() {
  return (
    <div className='bg-black min-h-screen'>
      <h1 className='text-white'>Project 1 Book API</h1>

      <GetModule
      queryURL='/getBooks'
      getAll={true} />

      <GetModule
      queryType={'title'}
      queryURL='/getBooksByTitle'
      getAll={false} />

      <GetModule
      queryType={'author'}
      queryURL='/getBooksByAuthor'
      getAll={false} />

      <GetModule
      queryType={'year'}
      queryURL='/getBooksByYear'
      getAll={false} />
    </div>
  )
}

export default App

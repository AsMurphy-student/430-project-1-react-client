// import { useState } from 'react';
import { useState } from 'react';
import GetModule from './components/requests/GetModule';
import PostModule from './components/requests/PostModule';
import ModuleDocs from './components/docs/ModuleDocs';

function App() {
  const [showDocs, setShowDocs] = useState(false);

  return (
    <div className='bg-black min-h-screen text-white'>
      <button className='text-white' onClick={async () => {
        setShowDocs(!showDocs);
      }}>
          {showDocs ? "Return to App" : "Show Docs"}
        </button>
      
      {
        showDocs ? 
        <>
          <h1 className='text-white'>Project 1 Book API Documentation</h1>
          <ModuleDocs queryURL='/getBooks' />
          <ModuleDocs queryURL='/getBooksByTitle' />
          <ModuleDocs queryURL='/getBooksByAuthor' />
          <ModuleDocs queryURL='/getBooksByYear' />

          <ModuleDocs queryURL='/addBook' />
          <ModuleDocs queryURL='/addGenre' />
        </>
        :
        <>
          <h1 className='text-white'>Project 1 Book API</h1>

          <GetModule queryURL='/getBooks' />
          <GetModule queryURL='/getBooksByTitle' />
          <GetModule queryURL='/getBooksByAuthor' />
          <GetModule queryURL='/getBooksByYear' />

          <PostModule queryURL='/addBook' />
          <PostModule queryURL='/addGenre' />
        </>
      }
    </div>
  )
}

export default App

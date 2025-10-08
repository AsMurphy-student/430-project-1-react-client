// import { useState } from 'react';
import { useState } from 'react';
import GetModule from './components/requests/GetModule';
import PostModule from './components/requests/PostModule';
import ModuleDocs from './components/docs/ModuleDocs';

function App() {
  const [showDocs, setShowDocs] = useState(false);

  return (
    <div className='bg-slate-900 min-h-screen text-white font-[MartianMono] p-5'>
      <div className='xl:max-w-1/2'>
        <button className='
        bg-gray-700 
        hover:bg-gray-600 
        active:bg-gray-500 
        border-4 
        border-stone-200 
        active:border-stone-400 
        rounded-lg 
        p-1
        mb-4' 
        onClick={async () => {
          setShowDocs(!showDocs);
        }}>
            {showDocs ? "Return to App" : "Show Docs"}
          </button>
        
        {
          showDocs ? 
          <>
            <h1 className='text-3xl mb-4'>Project 1 Book API Documentation</h1>
            <ModuleDocs queryURL='/getBooks' />
            <ModuleDocs queryURL='/getBooksByTitle' />
            <ModuleDocs queryURL='/getBooksByAuthor' />
            <ModuleDocs queryURL='/getBooksByYear' />

            <ModuleDocs queryURL='/addBook' />
            <ModuleDocs queryURL='/addGenre' />
          </>
          :
          <>
            <h1 className='text-3xl'>Project 1 Book API</h1>

            <GetModule queryURL='/getBooks' />
            <GetModule queryURL='/getBooksByTitle' />
            <GetModule queryURL='/getBooksByAuthor' />
            <GetModule queryURL='/getBooksByYear' />

            <PostModule queryURL='/addBook' />
            <PostModule queryURL='/addGenre' />
          </>
        }
      </div>
    </div>
  )
}

export default App

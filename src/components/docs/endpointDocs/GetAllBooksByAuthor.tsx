import { useState } from "react";

function GetAllBooksByAuthor(props: { markColor: string}) {
  const { markColor } = props;

  const [moduleState, setModuleState] = useState(false);
  return (
    <>
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
        setModuleState(!moduleState);
      }}>
        Get All Books By author
      </button>
      {
        moduleState &&
        <div className='
          bg-gray-700 
          border-4 
          border-stone-200
          rounded-lg 
          p-4
          mb-4'
        >
          <h2 className="text-2xl mb-2">Query Params</h2>
          <p><mark className={markColor}>author</mark> - The author of the book.</p>
          <br />
          <h2 className="text-2xl mb-2">Returns</h2>
          <p>A JSON Array of book object.</p>
          <p>Format: <mark className={markColor}>
              {"[{ author: string, country: string, language: string, "}
              {"link: string, pages: number, title: string, year: number, "}
              {"genres?: string[] }]"}
            </mark>
          </p>
          <br />
          <h2 className="text-2xl mb-2">Examples</h2>
          <div className='
            bg-gray-600 
            border-4 
            border-stone-200
            rounded-lg 
            p-4'
          >
            <p>Request: <mark className={markColor}>/getAllBooksByAuthor?author=Author1</mark></p>
            <p>Result: <mark className={markColor}>
                {"[{ author: 'Author1', country: 'Country1', language: 'English', "}
                {"link: 'link.com', pages: 200, title: 'title1', year: 2025, "}
                {"genres?: ['genre1'] }]"}
              </mark>
            </p>
          </div>
        </div>
      }
    </>
  );
}

export default GetAllBooksByAuthor;
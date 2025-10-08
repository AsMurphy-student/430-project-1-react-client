import { useState } from "react";

function AddGenre(props: { markColor: string}) {
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
        Add Genre
      </button>
      {
        moduleState &&
        <>
          <h2>Supported Body Formats</h2>
          <p><mark className={markColor}>application/json</mark>
          {" "}<mark className={markColor}>application/x-www-form-urlencoded</mark></p>
          <br />
          <h2>Body Parameters</h2>
          <p>
            <mark className={markColor}>title</mark>
            {" Type: "}<mark className={markColor}>string</mark> - The title of the book.
          </p>
          <p>
            <mark className={markColor}>genre</mark>
            {" Type: "}<mark className={markColor}>string</mark> - The one genre to add.
          </p>
          <br />
          <h2>Returns</h2>
          <p>A JSON book object with the title of the book and new genre to add.</p>
          <p>Format: <mark className={markColor}>
              {"[{ title: string, genre: string }"}
            </mark>
          </p>
          <br />
          <h2>Examples</h2>
          <div>
            <p>Request: <mark className={markColor}>/addGenre</mark></p>
            <p>Body: <mark className={markColor}>
                {"[{ title: title1, genre: 'genre2' }"}
              </mark></p>
            <p>Result: <mark className={markColor}>
                {"{ author: 'Author1', country: 'Country1', language: 'English', "}
                {"link: 'link.com', pages: 200, title: 'title1', year: 2025, "}
                {"genres?: ['genre1', 'genre2'] }"}
              </mark>
            </p>
          </div>
          <div>
            <p>Request: <mark className={markColor}>/addBook</mark></p>
            <p>Body: <mark className={markColor}>
                {"{ title: 'title1' }"}
              </mark></p>
            <p>Result: <mark className={markColor}>
                {"400 Error (Missing Params)"}
              </mark>
            </p>
          </div>
        </>
      }
    </>
  );
}

export default AddGenre;
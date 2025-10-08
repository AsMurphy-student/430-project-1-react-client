import { useState } from "react";

function ParamInfo(props: { name: string, type: string, markColor: string }) {
  const { name, type, markColor } = props;

  return (
    <p>
      <mark className={markColor}>{name}</mark>
      {" Type: "}<mark className={markColor}>{type}</mark> - The {name.replace('?', '')} of the book.
    </p>
  );
}

function AddBook(props: { markColor: string}) {
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
      mb-4' onClick={async () => {
        setModuleState(!moduleState);
      }}>
        Add Book
      </button>
      {
        moduleState &&
        <>
          <h2>Supported Body Formats</h2>
          <p><mark className={markColor}>application/json</mark>
          {" "}<mark className={markColor}>application/x-www-form-urlencoded</mark></p>
          <br />
          <h2>Body Parameters</h2>
          <ParamInfo name={"author"} type={"string"} markColor={markColor} />
          <ParamInfo name={"country"} type={"string"} markColor={markColor} />
          <ParamInfo name={"language"} type={"string"} markColor={markColor} />
          <ParamInfo name={"link"} type={"string"} markColor={markColor} />
          <ParamInfo name={"pages"} type={"number"} markColor={markColor} />
          <ParamInfo name={"title"} type={"string"} markColor={markColor} />
          <ParamInfo name={"year"} type={"number"} markColor={markColor} />
          <ParamInfo name={"genres?"} type={"string[]"} markColor={markColor} />
          <br />
          <h2>Returns</h2>
          <p>A JSON book object representing a new or updated book.</p>
          <p>Format: <mark className={markColor}>
              {"[{ author: string, country: string, language: string, "}
              {"link: string, pages: number, title: string, year: number, "}
              {"genres?: string[] }]"}
            </mark>
          </p>
          <br />
          <h2>Examples</h2>
          <div>
            <p>Request: <mark className={markColor}>/addBook</mark></p>
            <p>Body: <mark className={markColor}>
                {"{ author: 'Author1', country: 'Country1', language: 'English', "}
                {"link: 'link.com', pages: 200, title: 'title1', year: 2025 }"}
              </mark></p>
            <p>Result: <mark className={markColor}>
                {"{ author: 'Author1', country: 'Country1', language: 'English', "}
                {"link: 'link.com', pages: 200, title: 'title1', year: 2025 }"}
              </mark>
            </p>
          </div>
          <div>
            <p>Request: <mark className={markColor}>/addBook</mark></p>
            <p>Body: <mark className={markColor}>
                {"{ author: 'Author1', country: 'Country1', language: 'English', "}
                {"link: 'link.com', pages: 200, title: 'title1', year: 2025, "}
                {"genres?: ['genre1'] }"}
              </mark></p>
            <p>Result: <mark className={markColor}>
                {"{ author: 'Author1', country: 'Country1', language: 'English', "}
                {"link: 'link.com', pages: 200, title: 'title1', year: 2025, "}
                {"genres?: ['genre1'] }"}
              </mark>
            </p>
          </div>
          <div>
            <p>Request: <mark className={markColor}>/addBook</mark></p>
            <p>Body: <mark className={markColor}>
                {"{ author: 'Author1', country: 'Country1', language: 'English' }"}
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

export default AddBook;
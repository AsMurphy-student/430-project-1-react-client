// import type { BookParams } from "../interfaces/BookParams";

import { useState } from "react";
import type { BookParams } from "../interfaces/BookParams";

function AddBookInput(props: { query: string, bookObj: BookParams }) {
  const { query, bookObj } = props;
  return (
    <p className='text-white'>
      <label>{query}: </label>
      <input
        name={`${query}-term`}
        id='term'
        value={bookObj.author}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
          {
            switch (query) {
              case 'author':
                bookObj.author = event.target.value
                break;
              case 'country':
                bookObj.country = event.target.value
                break;
              case 'language':
                bookObj.language = event.target.value
                break;
              case 'link':
                bookObj.link = event.target.value
                break;
              case 'pages':
                bookObj.pages = Number(event.target.value)
                break;
              case 'title':
                bookObj.title = event.target.value
                break;
              case 'year':
                bookObj.year = Number(event.target.value)
                break;
              // case 'genres':
              //   bookObj.author = event.target.value
              //   break;
            }
          }}
      />
    </p>
  )
}

function PostModule(props: { queryURL: string, }) {
  const { queryURL } = props;

  const [moduleState, setModuleState] = useState(false);
  const [outputResult, setOutputResult] = useState('');

  const book: BookParams = {
    author: "",
    country: "",
    language: "",
    link: "",
    pages: 0,
    title: "",
    year: 0,
  }
  return (
    <>
      <button className='text-white' onClick={() => {
          setModuleState(!moduleState)
        }}>{queryURL === "/addBook" ? `Add Book` : 'Add Genre'}</button>
      <hr />
      {
        moduleState && 
        <div>
          <fieldset>
            {/* Put Input Fields Here */}
            {
              queryURL === "/addBook" &&
              <>
                <AddBookInput query={"author"} bookObj={book} />
                <AddBookInput query={"country"} bookObj={book} />
                <AddBookInput query={"language"} bookObj={book} />
                <AddBookInput query={"link"} bookObj={book} />
                <AddBookInput query={"pages"} bookObj={book} />
                <AddBookInput query={"title"} bookObj={book} />
                <AddBookInput query={"year"} bookObj={book} />
              </>
            }
            {
              queryURL === "/addGenre" &&
              <p>add genre here</p>
            }
          </fieldset>
          <button className='text-white' onClick={async () => {
            if (queryURL === '/addBook') {
              setOutputResult('');
              // const bookToAdd : BookParams = {
              //   author: "",
              //   country: "",
              //   language: "",
              //   link: "",
              //   pages: 0,
              //   title: "",
              //   year: 0
              // }
            }
            else {

            }
            // const fetchURL = searchTerm && searchTermHandler 
            // ? `${queryURL}?${queryType}=${searchTerm}`
            // : `${queryURL}`;

            // const response = await fetch(fetchURL, {
            //   method: methodType,
            //   headers: {
            //     'Accept': 'application/json',
            //   },
            // });

            // if (!response.ok) {
            //   console.log('error');
            // }
            // else if (response.body) {
            //   const jsonData = await response.json();

            //   const output = '' +
            //   `Status: ${response.status}\n` +
            //   `Content-Length: ${response.headers.get('content-length')}\n` +
            //   `Response: [${JSON.stringify(jsonData)}]`;

            //   outputResultHandler(output);
            // }
            // else{
            //   const output = `
            //   Status: ${response.status}\n
            //   Content-Length: ${response.headers.get('content-length')}
            //   `;

            //   outputResultHandler(output);
            // }
            }}>
              Working?
            </button>
          <p className='text-white whitespace-pre-wrap'>{outputResult}</p>
        </div>
      }
    </>
  );
}

export default PostModule;
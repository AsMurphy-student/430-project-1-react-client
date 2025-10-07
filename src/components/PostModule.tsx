// import type { BookParams } from "../interfaces/BookParams";

import { useState } from "react";
import type { BookParams } from "../interfaces/BookParams";

function AddBookInput(props: { query: string, bookObj: BookParams, setBookObj: React.Dispatch<React.SetStateAction<BookParams>> }) {
  const { query, bookObj, setBookObj } = props;

  const renderValue = (value: string) => {
    switch (value) {
      case 'author':
        return bookObj.author;
      case 'country':
        return bookObj.country;
      case 'language':
        return bookObj.language;
      case 'link':
        return bookObj.link;
      case 'pages':
        return bookObj.pages;
      case 'title':
        return bookObj.title;
      case 'year':
        return bookObj.year;
      case 'genres':
        return bookObj.genres?.join(',');
    }
  }
  return (
    <p className='text-white'>
      <label>{query === 'genre' ? 'Genre (use , as separator)' : query}: </label>
      <input
        name={`${query}-term`}
        id='term'
        value={renderValue(query)}
        // inputMode={query === 'pages' || query === 'year' ? 'numeric' : 'search'}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
          {
            switch (query) {
              case 'author':
                setBookObj({
                  ...bookObj,
                  author: event.target.value,
                });
                break;
              case 'country':
                setBookObj({
                  ...bookObj,
                  country: event.target.value,
                });
                break;
              case 'language':
                setBookObj({
                  ...bookObj,
                  language: event.target.value,
                });
                break;
              case 'link':
                setBookObj({
                  ...bookObj,
                  link: event.target.value,
                });
                break;
              case 'pages':
                if (!Number.isNaN(Number(event.target.value)))
                  setBookObj({
                    ...bookObj,
                    pages: Number(event.target.value),
                  });
                  break;
              case 'title':
                setBookObj({
                  ...bookObj,
                  title: event.target.value,
                });
                break;
              case 'year':
                if (!Number.isNaN(Number(event.target.value)))
                  setBookObj({
                    ...bookObj,
                    year: Number(event.target.value),
                  });
                  break;
              case 'genres':
                setBookObj({
                  ...bookObj,
                  genres: event.target.value.split(','),
                });
                break;
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

  const [newBook, setNewBook] = useState<BookParams>({
    author: "",
    country: "",
    language: "",
    link: "",
    pages: 0,
    title: "",
    year: 0,
  });

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

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
                <AddBookInput query={"author"} bookObj={newBook} setBookObj={setNewBook} />
                <AddBookInput query={"country"} bookObj={newBook} setBookObj={setNewBook} />
                <AddBookInput query={"language"} bookObj={newBook} setBookObj={setNewBook} />
                <AddBookInput query={"link"} bookObj={newBook} setBookObj={setNewBook} />
                <AddBookInput query={"pages"} bookObj={newBook} setBookObj={setNewBook} />
                <AddBookInput query={"title"} bookObj={newBook} setBookObj={setNewBook} />
                <AddBookInput query={"year"} bookObj={newBook} setBookObj={setNewBook} />
                <AddBookInput query={"genre"} bookObj={newBook} setBookObj={setNewBook} />
              </>
            }
            {
              queryURL === "/addGenre" &&
              <>
                <p className='text-white'>
                  <label>title: </label>
                  <input
                    name={`title-genre-term`}
                    id='term'
                    value={title}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                      setTitle(event.target.value)}
                  />
                </p>
                <p className='text-white'>
                  <label>genre (just one genre): </label>
                  <input
                    name={`genre-genre-term`}
                    id='term'
                    value={genre}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                      setGenre(event.target.value)}
                  />
                </p>
              </>
            }
          </fieldset>
          <button className='text-white' onClick={async () => {
            if (queryURL === '/addBook') {
              
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
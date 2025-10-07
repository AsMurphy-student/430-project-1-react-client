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
        if (bookObj.genres)
          return bookObj.genres?.join(',');
        else
          return '';
    }
  }
  return (
    <p className='text-white'>
      <label>{query === 'genres' ? 'Genre (use , as separator)' : query}: </label>
      <input
        name={`${query}-term`}
        id='term'
        value={renderValue(query)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
          {
            if (query === 'pages' || query === 'year') {
              if (!Number.isNaN(Number(event.target.value))) {
                setBookObj({
                  ...bookObj,
                  [query]: Number(event.target.value),
                });
              }
            }
            else if (query === 'genres')
              setBookObj({
                ...bookObj,
                [query]: event.target.value.split(','),
              });
            else
              setBookObj({
                ...bookObj,
                [query]: event.target.value,
              });
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
                <AddBookInput query={"genres"} bookObj={newBook} setBookObj={setNewBook} />
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
            console.log(newBook);
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
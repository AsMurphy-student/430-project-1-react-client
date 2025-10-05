import { useState } from 'react';
import './App.css'

function App() {
  const [getAllBooks, setGetAllBooks] = useState(false);
  const [getAllBooksByTitle, setGetAllBooksByTitle] = useState(false);

  const [getAllBooksMethod, setGetAllBooksMethod] = useState('GET');
  const [getAllBooksByTitleMethod, setGetAllBooksByTitleMethod] = useState('GET');

  const [getAllBooksByTitleOption, setGetAllBooksByTitleOption] = useState('');

  const [getAllBooksOutput, setGetAllBooksOutput] = useState('');
  const [getAllBooksByTitleOutput, setGetAllBooksByTitleOutput] = useState('');

  const getAllBooksHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGetAllBooksMethod(event.target.value);
  };

  const getAllBooksByTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGetAllBooksByTitleMethod(event.target.value);
  };

  const getAllBooksByTitleTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGetAllBooksByTitleOption(event.target.value);
  }

  return (
    <div className='bg-black min-h-screen'>
      <h1 className='text-white'>Project 1 Book API</h1>

      <button className='text-white' onClick={() => setGetAllBooks(!getAllBooks)}>Get All Books</button>
      {
        getAllBooks && 
        <div>
          <fieldset>
            <p className='text-white'>
              <input
                type="radio"
                name='method'
                value="GET"
                id='get'
                checked={getAllBooksMethod === 'GET'}
                onChange={getAllBooksHandler}
              />
              <label>GET</label>
            </p>

            <p className='text-white'>
              <input
                type="radio"
                name='method'
                value="HEAD"
                id='head'
                checked={getAllBooksMethod === 'HEAD'}
                onChange={getAllBooksHandler}
              />
              <label>HEAD</label>
            </p>
          </fieldset>
          <button className='text-white' onClick={async () => {
              const response = await fetch('/getBooks', {
                method: getAllBooksMethod,
                headers: {
                  'Accept': 'application/json',
                },
              });

              if (!response.ok) {
                console.log('error');
              }
              else if (response.body) {
                const jsonData = await response.json();

                const output = `
                Status: ${response.status}\n
                Content-Length: ${response.headers.get('content-length')}
                Response: [${JSON.stringify(jsonData)}]
                `;

                setGetAllBooksOutput(output);
              }
              else{
                const output = `
                Status: ${response.status}\n
                Content-Length: ${response.headers.get('content-length')}
                `;

                setGetAllBooksOutput(output);
              }
            }}>
              Working?
            </button>
          <p className='text-white whitespace-pre-wrap'>{getAllBooksOutput}</p>
        </div>
      }

      <button className='text-white' onClick={() => setGetAllBooksByTitle(!getAllBooksByTitle)}>Get All Books By Title</button>
      {
        getAllBooksByTitle && 
        <div>
          <fieldset>
            <p className='text-white'>
              <input
                type="radio"
                name='method'
                value="GET"
                id='get'
                checked={getAllBooksByTitleMethod === 'GET'}
                onChange={getAllBooksByTitleHandler}
              />
              <label>GET</label>
            </p>

            <p className='text-white'>
              <input
                type="radio"
                name='method'
                value="HEAD"
                id='head'
                checked={getAllBooksByTitleMethod === 'HEAD'}
                onChange={getAllBooksByTitleHandler}
              />
              <label>HEAD</label>
            </p>
            <p className='text-white'>
              <input
                name='title'
                id='title'
                onChange={getAllBooksByTitleTitleHandler}
              />
              <label>Title: </label>
            </p>
          </fieldset>
          <button className='text-white' onClick={async () => {
              const response = await fetch(`/getBooksByTitle?title=${getAllBooksByTitleOption}`, {
                method: getAllBooksByTitleMethod,
                headers: {
                  'Accept': 'application/json',
                },
              });

              if (!response.ok) {
                console.log('error');
              }
              else if (response.body) {
                const jsonData = await response.json();

                const output = `
                Status: ${response.status}\n
                Content-Length: ${response.headers.get('content-length')}
                Response: [${JSON.stringify(jsonData)}]
                `;

                setGetAllBooksByTitleOutput(output);
              }
              else{
                const output = `
                Status: ${response.status}\n
                Content-Length: ${response.headers.get('content-length')}
                `;

                setGetAllBooksByTitleOutput(output);
              }
            }}>
              Working?
            </button>
          <p className='text-white whitespace-pre-wrap'>{getAllBooksByTitleOutput}</p>
        </div>
      }
    </div>
  )
}

export default App

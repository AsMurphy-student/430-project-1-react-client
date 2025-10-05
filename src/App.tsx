import { useState } from 'react';
import './App.css'

function App() {
  const [getAllBooks, setGetAllBooks] = useState(false);

  const [getAllBooksMethod, setGetAllBooksMethod] = useState('GET');

  const [getAllBooksOutput, setGetAllBooksOutput] = useState('');

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGetAllBooksMethod(event.target.value);
  };

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
                onChange={radioHandler}
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
                onChange={radioHandler}
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

              console.log(response);

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
    </div>
  )
}

export default App

import { useState } from 'react';
import './App.css'
import GetModule from './components/GetModule';

function App() {
  // Get All Use States
  const [getAllBooks, setGetAllBooks] = useState(false);
  const [getAllBooksMethod, setGetAllBooksMethod] = useState('GET');
  const [getAllBooksOutput, setGetAllBooksOutput] = useState('');

  // const getAllBooksHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setGetAllBooksMethod(event.target.value);
  // };

  // Get By Title Use States
  const [getAllBooksByTitle, setGetAllBooksByTitle] = useState(false);
  const [getAllBooksByTitleMethod, setGetAllBooksByTitleMethod] = useState('GET');
  const [getAllBooksByTitleOption, setGetAllBooksByTitleOption] = useState('');
  const [getAllBooksByTitleOutput, setGetAllBooksByTitleOutput] = useState('');

  // Get By Author Use States
  const [getAllBooksByAuthor, setGetAllBooksByAuthor] = useState(false);
  const [getAllBooksByAuthorMethod, setGetAllBooksByAuthorMethod] = useState('GET');
  const [getAllBooksByAuthorOption, setGetAllBooksByAuthorOption] = useState('');
  const [getAllBooksByAuthorOutput, setGetAllBooksByAuthorOutput] = useState('');

  // Get By Year Use States
  const [getAllBooksByYear, setGetAllBooksByYear] = useState(false);
  const [getAllBooksByYearMethod, setGetAllBooksByYearMethod] = useState('GET');
  const [getAllBooksByYearOption, setGetAllBooksByYearOption] = useState('');
  const [getAllBooksByYearOutput, setGetAllBooksByYearOutput] = useState('');

  const resetModules = () => {
    setGetAllBooks(false);
    setGetAllBooksByTitle(false);
    setGetAllBooksByAuthor(false);
    setGetAllBooksByYear(false);
  }

  return (
    <div className='bg-black min-h-screen'>
      <h1 className='text-white'>Project 1 Book API</h1>

      {/* <button className='text-white' onClick={() => setGetAllBooks(!getAllBooks)}>Get All Books</button>
      <br />
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
      } */}
      <GetModule 
      moduleState={getAllBooks} 
      moduleStateHandler={setGetAllBooks} 
      methodType={getAllBooksMethod} 
      methodTypeHandler={setGetAllBooksMethod} 
      outputResult={getAllBooksOutput} 
      outputResultHandler={setGetAllBooksOutput} 
      queryURL='/getBooks'
      getAll={true}
      resetModules={resetModules} />

      <GetModule 
      moduleState={getAllBooksByTitle} 
      moduleStateHandler={setGetAllBooksByTitle} 
      methodType={getAllBooksByTitleMethod} 
      methodTypeHandler={setGetAllBooksByTitleMethod} 
      searchTerm={getAllBooksByTitleOption} 
      searchTermHandler={setGetAllBooksByTitleOption} 
      outputResult={getAllBooksByTitleOutput} 
      outputResultHandler={setGetAllBooksByTitleOutput} 
      queryType={'title'}
      queryURL='/getBooksByTitle'
      getAll={false}
      resetModules={resetModules} />

      <GetModule 
      moduleState={getAllBooksByAuthor} 
      moduleStateHandler={setGetAllBooksByAuthor} 
      methodType={getAllBooksByAuthorMethod} 
      methodTypeHandler={setGetAllBooksByAuthorMethod} 
      searchTerm={getAllBooksByAuthorOption} 
      searchTermHandler={setGetAllBooksByAuthorOption} 
      outputResult={getAllBooksByAuthorOutput} 
      outputResultHandler={setGetAllBooksByAuthorOutput} 
      queryType={'author'}
      queryURL='/getBooksByAuthor'
      getAll={false}
      resetModules={resetModules} />

      <GetModule 
      moduleState={getAllBooksByYear} 
      moduleStateHandler={setGetAllBooksByYear} 
      methodType={getAllBooksByYearMethod} 
      methodTypeHandler={setGetAllBooksByYearMethod} 
      searchTerm={getAllBooksByYearOption} 
      searchTermHandler={setGetAllBooksByYearOption} 
      outputResult={getAllBooksByYearOutput} 
      outputResultHandler={setGetAllBooksByYearOutput} 
      queryType={'year'}
      queryURL='/getBooksByYear'
      getAll={false}
      resetModules={resetModules} />
    </div>
  )
}

export default App

import { useState } from 'react';
import './App.css'

function GetModule(props: { 
    moduleState: boolean, 
    moduleStateHandler: React.Dispatch<React.SetStateAction<boolean>>,
    methodType: string,
    methodTypeHandler: React.Dispatch<React.SetStateAction<string>>,
    searchTerm: string,
    searchTermHandler: React.Dispatch<React.SetStateAction<string>>,
    outputResult: string,
    outputResultHandler: React.Dispatch<React.SetStateAction<string>>,
    queryType: string,
  }) {

  const { moduleState, moduleStateHandler, methodType, methodTypeHandler, searchTerm, searchTermHandler, outputResult, outputResultHandler, queryType } = props;

  const searchTermOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchTermHandler(event.target.value);
  }

  const methodTypeOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    methodTypeHandler(event.target.value);
  };

  return (
    <>
      <button className='text-white' onClick={() => moduleStateHandler(!moduleState)}>Get All Books By {queryType}</button>
      <hr />
      {
        moduleState && 
        <div>
          <fieldset>
            <p className='text-white'>
              <input
                type="radio"
                name='method'
                value="GET"
                id='get'
                checked={methodType === 'GET'}
                onChange={methodTypeOnChange}
              />
              <label>GET</label>
            </p>

            <p className='text-white'>
              <input
                type="radio"
                name='method'
                value="HEAD"
                id='head'
                checked={methodType === 'HEAD'}
                onChange={methodTypeOnChange}
              />
              <label>HEAD</label>
            </p>
            <p className='text-white'>
              <input
                name='title'
                id='title'
                onChange={searchTermOnChange}
              />
              <label>{queryType}: </label>
            </p>
          </fieldset>
          <button className='text-white' onClick={async () => {
              const response = await fetch(`/getBooksByTitle?${queryType}=${searchTerm}`, {
                method: methodType,
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

                outputResultHandler(output);
              }
              else{
                const output = `
                Status: ${response.status}\n
                Content-Length: ${response.headers.get('content-length')}
                `;

                outputResultHandler(output);
              }
            }}>
              Working?
            </button>
          <p className='text-white whitespace-pre-wrap'>{outputResult}</p>
        </div>
      }
    </>
  );
}

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

  // const getAllBooksByTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setGetAllBooksByTitleMethod(event.target.value);
  // };

  // const getAllBooksByTitleTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setGetAllBooksByTitleOption(event.target.value);
  // }

  return (
    <div className='bg-black min-h-screen'>
      <h1 className='text-white'>Project 1 Book API</h1>

      <button className='text-white' onClick={() => setGetAllBooks(!getAllBooks)}>Get All Books</button>
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
      }

      {/* <button className='text-white' onClick={() => setGetAllBooksByTitle(!getAllBooksByTitle)}>Get All Books By Title</button>
      <br />
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
      } */}
      <GetModule 
      moduleState={getAllBooksByTitle} 
      moduleStateHandler={setGetAllBooksByTitle} 
      methodType={getAllBooksByTitleMethod} 
      methodTypeHandler={setGetAllBooksByTitleMethod} 
      searchTerm={getAllBooksByTitleOption} 
      searchTermHandler={setGetAllBooksByTitleOption} 
      outputResult={getAllBooksByTitleOutput} 
      outputResultHandler={setGetAllBooksByTitleOutput} 
      queryType={'title'} />
    </div>
  )
}

export default App

import { useState } from "react";

interface Endpoints {
  [key: string]: string;
  '/getBooksByTitle': string;
  '/getBooksByAuthor': string;
  '/getBooksByYear': string;
}

function GetModule(props: { queryURL: string, }) {
  const { queryURL, } = props;

  let searchTermOnChange;

  const [moduleState, setModuleState] = useState(false);
  const [methodType, setMethodType] = useState('GET');
  const [searchTerm, setSearchTerm] = useState('');
  const [outputResult, setOutputResult] = useState('');

  const typeStruct: Endpoints = {
    '/getBooksByTitle': 'title',
    '/getBooksByAuthor': 'author',
    '/getBooksByYear': 'year',
  }

  if (queryURL !== '/getBooks') {
    searchTermOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    }
  }

  const methodTypeOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMethodType(event.target.value);
  };

  return (
    <>
      <button className='
        w-fit
        bg-gray-700 
        hover:bg-gray-600 
        active:bg-gray-500 
        border-4 
        border-stone-200 
        active:border-stone-400 
        rounded-lg 
        p-1
        mb-4' 
      onClick={() => {
        setModuleState(!moduleState)
      }}>{typeStruct[queryURL] ? `Get All Books By ${typeStruct[queryURL]}` : 'Get All Books'}</button>
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
          <fieldset>
            <p className='text-white'>
              <input
                type="radio"
                name={`${queryURL}-method`}
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
                name={`${queryURL}-method`}
                value="HEAD"
                id='head'
                checked={methodType === 'HEAD'}
                onChange={methodTypeOnChange}
              />
              <label>HEAD</label>
            </p>
            {
              queryURL !== '/getBooks' && typeStruct[queryURL] &&
              <p className='text-white'>
                <label>{typeStruct[queryURL]}: </label>
                <input
                  name={`${queryURL}-term`}
                  id='term'
                  value={searchTerm}
                  className='
                      w-fit
                      bg-gray-700 
                      hover:bg-gray-600 
                      active:bg-gray-500 
                      border-4 
                      border-stone-200 
                      active:border-stone-400 
                      rounded-lg 
                      p-1
                      mb-4'
                  onChange={searchTermOnChange}
                />
              </p>
            }
          </fieldset>
          <button className='
            w-fit
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
            const fetchURL = typeStruct[queryURL] 
            ? `${queryURL}?${typeStruct[queryURL]}=${searchTerm}`
            : `${queryURL}`;

            const response = await fetch(fetchURL, {
              method: methodType,
              headers: {
                'Accept': 'application/json',
              },
            });

            if (!response.ok) {
              let output = 
              `Status: ${response.status}\n` +
              `Content-Length: ${response.headers.get('content-length')}`;

              if (response.body) {
                const jsonErrorData = await response.json();
                output = output + `\nError: ${JSON.stringify(jsonErrorData)}`;
              }

              setOutputResult(output);
            }
            else if (response.body) {
              const jsonData = await response.json();

              const output = 
              `Status: ${response.status}\n` +
              `Content-Length: ${response.headers.get('content-length')}\n` +
              `Response: [${JSON.stringify(jsonData)}]`;

              setOutputResult(output);
            }
            else{
              const output = 
              `Status: ${response.status}\n` +
              `Content-Length: ${response.headers.get('content-length')}`;

              setOutputResult(output);
            }
          }}>
              Submit
            </button>
          <div className="overflow-y-scroll h-30"><p className='whitespace-pre-wrap'>{outputResult}</p></div>
        </div>
      }
    </>
  );
}

export default GetModule;
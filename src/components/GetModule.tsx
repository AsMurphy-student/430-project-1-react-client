import { useState } from "react";

function GetModule(props: { 
    queryType?: string,
    queryURL: string,
    getAll: boolean,
  }) {

  const { queryType, queryURL, getAll, } = props;

  let searchTermOnChange;

  const [moduleState, moduleStateHandler] = useState(false);
  const [methodType, methodTypeHandler] = useState('GET');
  const [searchTerm, searchTermHandler] = useState('');
  const [outputResult, outputResultHandler] = useState('');

  if (!getAll) {
    searchTermOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      searchTermHandler(event.target.value);
    }
  }

  const methodTypeOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    methodTypeHandler(event.target.value);
  };

  return (
    <>
      <button className='text-white' onClick={() => {
          moduleStateHandler(!moduleState)
        }}>{queryType ? `Get All Books By ${queryType}` : 'Get All Books'}</button>
      <hr />
      {
        moduleState && 
        <div>
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
              !getAll &&
              <p className='text-white'>
                <label>{queryType}: </label>
                <input
                  name={`${queryURL}-term`}
                  id='term'
                  value={searchTerm}
                  onChange={searchTermOnChange}
                />
              </p>
            }
          </fieldset>
          <button className='text-white' onClick={async () => {
            const fetchURL = !getAll 
            ? `${queryURL}?${queryType}=${searchTerm}`
            : `${queryURL}`;

            const response = await fetch(fetchURL, {
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

              const output = 
              `Status: ${response.status}\n` +
              `Content-Length: ${response.headers.get('content-length')}\n` +
              `Response: [${JSON.stringify(jsonData)}]`;

              outputResultHandler(output);
            }
            else{
              const output = 
              `Status: ${response.status}\n` +
              `Content-Length: ${response.headers.get('content-length')}`;

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

export default GetModule;
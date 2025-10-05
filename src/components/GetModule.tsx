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
    queryURL: string,
  }) {

  const { moduleState, moduleStateHandler, methodType, methodTypeHandler, searchTerm, searchTermHandler, outputResult, outputResultHandler, queryType, queryURL } = props;

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
                value={searchTerm}
                onChange={searchTermOnChange}
              />
              <label>{queryType}: </label>
            </p>
          </fieldset>
          <button className='text-white' onClick={async () => {
              const response = await fetch(`${queryURL}?${queryType}=${searchTerm}`, {
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

export default GetModule;
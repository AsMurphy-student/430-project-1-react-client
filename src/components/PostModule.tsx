function PostModule(props: { 
    moduleState: boolean, 
    moduleStateHandler: React.Dispatch<React.SetStateAction<boolean>>,
    outputResult: string,
    outputResultHandler: React.Dispatch<React.SetStateAction<string>>,
    queryURL: string,
    resetModules: () => void,
  }) {

  const { 
    moduleState, moduleStateHandler,
    outputResult, outputResultHandler, 
    queryURL, resetModules } = props;

  return (
    <>
      <button className='text-white' onClick={() => {
          if (!moduleState) {
            resetModules();
          }
          moduleStateHandler(!moduleState)
        }}>{queryURL === "/addBook" ? `Add Book` : 'Add Genre'}</button>
      <hr />
      {
        moduleState && 
        <div>
          <fieldset>
            {/* Put Input Fields Here */}
          </fieldset>
          <button className='text-white' onClick={async () => {
            // Make Post request here
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
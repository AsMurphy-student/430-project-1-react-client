import { useState } from "react";

function GetAllBooksByYear() {
  const [moduleState, setModuleState] = useState(false);
  return (
    <>
      <button className='text-white' onClick={async () => {
        setModuleState(!moduleState);
      }}>
        Get All Books
      </button>
      {
        moduleState &&
        <>
          <p>hello</p>
        </>
      }
      <hr />
    </>
  );
}

export default GetAllBooksByYear;
import { useState } from "react";

function GetAllBooksByAuthor() {
  const [moduleState, setModuleState] = useState(false);
  return (
    <>
      <button className='text-white' onClick={async () => {
        setModuleState(!moduleState);
      }}>
        Get All Books By Author
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

export default GetAllBooksByAuthor;
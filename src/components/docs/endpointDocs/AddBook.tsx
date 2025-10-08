import { useState } from "react";

function AddBook() {
  const [moduleState, setModuleState] = useState(false);
  return (
    <>
      <button className='text-white' onClick={async () => {
        setModuleState(!moduleState);
      }}>
        Add Book
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

export default AddBook;
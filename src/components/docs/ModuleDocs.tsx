import { useState } from "react";

function ModuleDocs(props: {queryURL: string}) {
  const { queryURL } = props;

  const [moduleState, setModuleState] = useState(false);

  const RenderDocComponent = () => {
    switch (queryURL) {
      case '/getBooks':
        
        break;
      case '/getBooksByTitle':

        break;
      case '/getBooksByAuthor':

        break;
      case '/getBooksByYear':

        break;
      case '/addBook':

        break;
      case '/addGenre':
        
        break;
    }
  }

  return (
    <>
      {RenderDocComponent()}
    </>
  )
}

export default ModuleDocs;
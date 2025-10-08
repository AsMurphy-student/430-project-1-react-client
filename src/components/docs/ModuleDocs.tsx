import AddBook from "./endpointDocs/AddBook";
import AddGenre from "./endpointDocs/AddGenre";
import GetAllBooks from "./endpointDocs/GetAllBooks";
import GetAllBooksByAuthor from "./endpointDocs/GetAllBooksByAuthor";
import GetAllBooksByTitle from "./endpointDocs/GetAllBooksByTitle";
import GetAllBooksByYear from "./endpointDocs/GetAllBooksByYear";

function ModuleDocs(props: {queryURL: string}) {
  const { queryURL } = props;

  const RenderDocComponent = () => {
    switch (queryURL) {
      case '/getBooks':
        return <GetAllBooks />
        break;
      case '/getBooksByTitle':
        return <GetAllBooksByTitle />
        break;
      case '/getBooksByAuthor':
        return <GetAllBooksByAuthor />
        break;
      case '/getBooksByYear':
        return <GetAllBooksByYear />
        break;
      case '/addBook':
        return <AddBook />
        break;
      case '/addGenre':
        return <AddGenre />
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
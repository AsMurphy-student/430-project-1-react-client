import AddBook from "./endpointDocs/AddBook";
import AddGenre from "./endpointDocs/AddGenre";
import GetAllBooks from "./endpointDocs/GetAllBooks";
import GetAllBooksByAuthor from "./endpointDocs/GetAllBooksByAuthor";
import GetAllBooksByTitle from "./endpointDocs/GetAllBooksByTitle";
import GetAllBooksByYear from "./endpointDocs/GetAllBooksByYear";

function ModuleDocs(props: {queryURL: string}) {
  const { queryURL } = props;
  const markColor = 'bg-amber-400';

  const RenderDocComponent = () => {
    switch (queryURL) {
      case '/getBooks':
        return <GetAllBooks markColor={markColor} />
        break;
      case '/getBooksByTitle':
        return <GetAllBooksByTitle markColor={markColor} />
        break;
      case '/getBooksByAuthor':
        return <GetAllBooksByAuthor markColor={markColor} />
        break;
      case '/getBooksByYear':
        return <GetAllBooksByYear markColor={markColor} />
        break;
      case '/addBook':
        return <AddBook markColor={markColor} />
        break;
      case '/addGenre':
        return <AddGenre markColor={markColor} />
        break;
    }
  }

  return (
    <div>
      {RenderDocComponent()}
    </div>
  )
}

export default ModuleDocs;
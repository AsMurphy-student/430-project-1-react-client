import type { Book } from '../interfaces/book';

function BookItem(props: {bookItem: Book}) {
  const { bookItem } = props;
  return (
    <div className='text-white'>
      <p>{bookItem.title}</p>
      <p>{bookItem.author}</p>
      <p>{bookItem.country}</p>
      <p>{bookItem.language}</p>
      <p>{bookItem.link}</p>
      <p>{bookItem.pages}</p>
      <p>{bookItem.year}</p>
      { bookItem.genres && <p>{bookItem.genres}</p>}
    </div>
  );
}

function BookList(props: {bookList: Book[]}) {
  const { bookList } = props;
  return (
    <div className='text-white'>
      {bookList.map((element: Book) => (<BookItem bookItem={element} />))}
    </div>
  )
}

export default BookList

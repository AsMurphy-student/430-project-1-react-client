import './App.css'
import type { Book } from './interfaces/book';

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={async () => {
          const response = await fetch('/getBooks', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
          });

          if (!response.ok) {
            console.log('error');
          }
          else {
            const jsonData: Book[] = await response.json();
            console.log(jsonData);
          }
        }}>
          this is working
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

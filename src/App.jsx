import {useState} from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(12);

  return (
    <>
      <button onClick={() => setCount(count)}></button>
    </>
  );
}

export default App;

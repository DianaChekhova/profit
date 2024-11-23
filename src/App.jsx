import {useEffect, useState} from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(12);

  useEffect(() => {
    console.log(count);
  }, [count]);

  useEffect(() => {
    console.log('popa');
  }, []);
  return (
    <>
      <button onClick={() => setCount(count)}></button>
    </>
  );
}

export default App;

import {createContext} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './app.jsx';
import {ChakraProvider} from '@chakra-ui/react';
import {system} from '@chakra-ui/react/preset';
import {BrowserRouter} from 'react-router-dom';
import UserStore from './store/UserStore.js';

const store = new UserStore();

export const Context = createContext({store});

createRoot(document.getElementById('root')).render(
  <ChakraProvider value={system}>
    <BrowserRouter>
      <Context.Provider value={{store}}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </ChakraProvider>
);

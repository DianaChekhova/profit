import './App.css';
import MainPage from './pages/landing/main/index.jsx';
import {Route, Routes} from 'react-router-dom';
import Subscriptions from './pages/landing/subscriptions/index.jsx';
import Coaches from './pages/landing/coaches/index.jsx';
import GroupTraining from './pages/landing/group/index.jsx';
import Contacts from './pages/landing/contacts/index.jsx';
import Navigator from './components/navigator/index.jsx';
import AdminPage from './pages/account/admin/index.jsx';

function App() {
  return (
    <div className='wrapper'>
      <Navigator />
      <Routes>
        <Route
          path='/'
          element={<MainPage />}
        />
        <Route
          path='subscriptions'
          element={<Subscriptions />}
        />
        <Route
          path='coaches'
          element={<Coaches />}
        />
        <Route
          path='groups'
          element={<GroupTraining />}
        />
        <Route
          path='contacts'
          element={<Contacts />}
        />
        <Route
          path='admin'
          element={<AdminPage />}
        />
      </Routes>
    </div>
  );
}

export default App;

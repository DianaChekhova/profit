import {Box} from '@chakra-ui/react';
import styles from './navigator.module.scss';
import {Link} from 'react-router-dom';
import UserLogin from '../user/index.jsx';
import {observer} from 'mobx-react-lite';
import {useContext, useEffect} from 'react';
import {Context} from '../../main.jsx';
import UserPanel from '../user/userPanel.jsx';

const Index = () => {
  const {store} = useContext(Context);
  const isAuthenticated = store.getAuthenticated();
  const user = store.getUser();
  console.log(user);
  useEffect(() => {
    if (!user.entity_name) {
      store.getMe();
    }
  });

  return (
    <div className={`${styles.wrapper} ${styles.flex}`}>
      <Link
        className={styles.logo}
        to='/'
      >
        <p className={styles.logo}>PROFIT</p>
      </Link>
      <Box
        gap='32px'
        className={`${styles.text} ${styles.flex}`}
      >
        <Link to='/subscriptions'>Абонименты</Link>
        <Link to='/coaches'>Тренеры</Link>
        <Link to='/groups'>Групповые занятия</Link>
        <Link to='/contacts'>Контакты</Link>
      </Box>
      {!isAuthenticated && <UserLogin />}
      {isAuthenticated && (
        <UserPanel
          user={user}
          logoutCallback={store.logout}
        />
      )}
    </div>
  );
};

export default observer(Index);

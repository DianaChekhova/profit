import {Box} from '@chakra-ui/react';
import styles from './navigator.module.scss';
import {Link} from 'react-router-dom';
import UserLogin from '../user/index.jsx';

function Navigator() {
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
      <UserLogin />
    </div>
  );
}

export default Navigator;

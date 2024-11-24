import {Box} from '@chakra-ui/react';
import {Avatar} from '../components/ui/avatar.jsx';
import styles from './navigator.module.scss';

function Navigator() {
  return (
    <div className={`${styles.wrapper} ${styles.flex}`}>
      <p className={styles.logo}>PROFIT</p>
      <Box
        gap='32px'
        className={`${styles.text} ${styles.flex}`}
      >
        <p>Абонименты</p>
        <p>Тренеры</p>
        <p>Групповые занятия</p>
        <p>Контакты</p>
      </Box>
      <div className={styles.flex}>
        <div className={styles.loginText}>Войти</div>
        <Avatar
          name='Sasuke Uchiha'
          src='https://bit.ly/broken-link'
          colorPalette='teal'
          marginLeft='16px'
        />
      </div>
    </div>
  );
}

export default Navigator;

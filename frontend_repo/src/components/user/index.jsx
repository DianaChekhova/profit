import {useCallback, useState} from 'react';
import styles from './user.module.scss';
import {Avatar} from '../ui/avatar.jsx';
import {Portal} from '@chakra-ui/react';

function UserLogin() {
  const [openModal, setModalOpen] = useState(false);

  const openModalHandler = useCallback(() => {
    setModalOpen(true);
  }, []);

  const closeModalHandler = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <>
      <div className={styles.flex}>
        <div
          className={styles.loginText}
          onClick={openModalHandler}
        >
          Войти
        </div>
        <Avatar
          src='https://bit.ly/broken-link'
          colorPalette='teal'
          marginLeft='16px'
        />
      </div>
      {openModal && (
        <Portal>
          <div
            className={styles.modalWrapper}
            onClick={closeModalHandler}
          ></div>
        </Portal>
      )}
    </>
  );
}

export default UserLogin;

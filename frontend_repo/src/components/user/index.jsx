import {useCallback, useState} from 'react';
import styles from './user.module.scss';
import {Avatar} from '../ui/avatar.jsx';
import AuthModal from './authentication/modal/index.jsx';

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
      {openModal && <AuthModal closeModalHandler={closeModalHandler} />}
    </>
  );
}

export default UserLogin;

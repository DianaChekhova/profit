import styles from './user.module.scss';
import {Avatar} from '../ui/avatar.jsx';
import {Link} from 'react-router-dom';
import {useCallback} from 'react';

function UserPanel(props) {
  const {user, logoutCallback} = props;
  console.log(user);
  const logoutHandler = useCallback(() => {
    logoutCallback();
  }, [logoutCallback]);

  return (
    <div className={styles.flex}>
      <Link to='/admin'>
        <div className={styles.flex}>
          {user.entity_name || 'Test Admin'}
          <Avatar
            src='https://bit.ly/broken-link'
            colorPalette='blue'
            marginLeft='16px'
          />
        </div>
      </Link>
      <div
        onClick={logoutHandler}
        className={styles.logoutText}
      >
        Выйти
      </div>
    </div>
  );
}

export default UserPanel;

import {useEffect, useMemo, useState} from 'react';
import ClientsTable from './table.jsx';
import ClientsDrawler from './drawler.jsx';
import {Button} from '../../../../../components/ui/button.jsx';
import {Skeleton, Stack} from '@chakra-ui/react';
import {observer} from 'mobx-react-lite';
import ClientsStore from './clientsStore.js';
import styles from './clients.module.scss';

const Clients = observer(() => {
  const [isOpen, setOpen] = useState(false);
  // TODO 2 юзера вызывается
  const store = useMemo(() => new ClientsStore(), []);
  const users = store.getUsers();
  console.log(users);
  const loading = store.getLoading();
  const removeUser = store.removeUser;
  const updateUser = store.updateUser;
  const addUser = store.addUser;
  console.log(users);
  useEffect(() => {
    if (!users.length) {
      store.fetchUsers();
    }
  }, [store, users]);

  return (
    <>
      <Stack>
        <Skeleton
          height='100%'
          loading={loading}
          className={styles.tableStack}
        >
          <ClientsTable
            loading={loading}
            removeUser={removeUser}
            updateUser={updateUser}
            users={users}
          />
        </Skeleton>
        <Skeleton
          height='40px'
          marginTop='24px'
          width='150px'
          loading={loading}
        >
          <Button
            width='150px'
            colorPalette='purple'
            onClick={() => setOpen(true)}
          >
            Добавить клиента
          </Button>
        </Skeleton>
        <ClientsDrawler
          users={users}
          addUser={addUser}
          isOpen={isOpen}
          setOpen={setOpen}
        />
      </Stack>
    </>
  );
});

export default Clients;

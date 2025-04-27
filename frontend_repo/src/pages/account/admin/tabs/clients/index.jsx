import {useMemo, useState} from 'react';
import ClientsTable from './table.jsx';
import ClientsDrawler from './drawler.jsx';
import {Button} from '../../../../../components/ui/button.jsx';
import {Skeleton, Stack} from '@chakra-ui/react';
import {observer} from 'mobx-react-lite';
import styles from '../../admin.module.scss';
import BaseAdminStore from '../adminStore.jsx';
import UserService from '../../../../../service/adminTab/UserService.js';

const mockItems = [
  {
    id: 1,
    status: 'активен',
    birth: '24.11.2024',
    phone: '+79966175980',
    email: 'lalala@mail.ru',
    name: 'EXAMPLE',
    passport: '1234 858490',
    address: 'г. Рязань, улица Леймов д2 проспект 4',
  },
];

const Clients = observer(() => {
  const [isOpen, setOpen] = useState(false);
  const store = useMemo(() => new BaseAdminStore(new UserService(), mockItems), []);
  console.log(store.isLoading);
  return (
    <Stack spacing={4}>
      <Skeleton
        loading={store.isLoading}
        height='100%'
        className={styles.tableStack}
      >
        <ClientsTable
          removeUser={store.removeItem}
          updateUser={store.updateItem}
          users={store.itemsList}
        />
      </Skeleton>
      <Skeleton
        loading={store.isLoading}
        height='40px'
        marginTop='24px'
        width='150px'
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
        users={store.itemsList}
        addUser={store.addItem}
        updateUser={store.updateItem}
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </Stack>
  );
});

export default Clients;

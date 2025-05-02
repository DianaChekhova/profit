import {Box, Heading, Stack, Table} from '@chakra-ui/react';
import {IoTrash} from 'react-icons/io5';
import {Button} from '../../../../../components/ui/button.jsx';
import {FaRegEdit} from 'react-icons/fa';
import styles from '../../admin.module.scss';
import ClientsDrawler from './drawler.jsx';
import {useCallback, useState} from 'react';
import {observer} from 'mobx-react-lite';

const ClientsTable = observer((props) => {
  const {users, setUsers, removeUser, updateUser} = props;

  const [isOpen, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const editCallback = useCallback((id) => {
    setCurrentId(id);
    setOpen(true);
  }, []);
  console.log(users);
  return (
    <Stack>
      <Table.Root
        size='sm'
        variant='line'
        interactive
        border='none'
        padding='10px'
        minHeight='53px'
        className={styles.tableRoot}
        overflow='hidden'
      >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Фио</Table.ColumnHeader>
            <Table.ColumnHeader>Статус абонемента</Table.ColumnHeader>
            <Table.ColumnHeader>Дата рождения</Table.ColumnHeader>
            <Table.ColumnHeader>Паспорт</Table.ColumnHeader>
            <Table.ColumnHeader>Адрес</Table.ColumnHeader>
            <Table.ColumnHeader>Телефон</Table.ColumnHeader>
            <Table.ColumnHeader>Email</Table.ColumnHeader>
            <Table.ColumnHeader textAlign='center'>Действия</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body className={styles.tableBody}>
          {users &&
            users.map((item) => (
              <Table.Row key={item.email}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.status}</Table.Cell>
                <Table.Cell>{item.birth}</Table.Cell>
                <Table.Cell>{item.passport}</Table.Cell>
                <Table.Cell>{item.address}</Table.Cell>
                <Table.Cell>{item.phone}</Table.Cell>
                <Table.Cell>{item.email}</Table.Cell>
                <Table.Cell width='100px'>
                  <Box
                    justifyContent='center'
                    display='flex'
                    gap='5px'
                  >
                    <Button
                      colorScheme='teal'
                      size='sm'
                      onClick={() => editCallback(item.id)}
                      variant='plain'
                    >
                      <FaRegEdit
                        color='black'
                        height='18px'
                      />
                    </Button>
                    <Button
                      colorScheme='teal'
                      size='sm'
                      variant='plain'
                      onClick={() => removeUser(item.id)}
                    >
                      <IoTrash
                        color='black'
                        height='18px'
                      />
                    </Button>
                  </Box>
                </Table.Cell>
              </Table.Row>
            ))}
          {!users.length && (
            <Table.Row className={styles.emptyRow}>
              <Table.Cell
                className={styles.emptyCell}
                colSpan={70}
              >
                <Heading size='sm'>Нет доступных пользователей</Heading>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
      {currentId && (
        <ClientsDrawler
          setOpen={setOpen}
          isOpen={isOpen}
          updateUser={updateUser}
          setMockState={setUsers}
          users={users}
          currentId={currentId}
        />
      )}
    </Stack>
  );
});
//mock

export default ClientsTable;

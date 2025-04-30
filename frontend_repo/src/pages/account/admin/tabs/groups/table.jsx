import {Box, Heading, Stack, Table} from '@chakra-ui/react';
import {IoTrash} from 'react-icons/io5';
import {Button} from '../../../../../components/ui/button.jsx';
import {FaRegEdit} from 'react-icons/fa';
import styles from '../../admin.module.scss';
import GroupSessionsDrawler from './drawler.jsx';
import {useCallback, useState} from 'react';
import {observer} from 'mobx-react-lite';

const GroupSessionsTable = observer((props) => {
  const {sessions, removeSession, updateSession} = props;

  const [isOpen, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const editCallback = useCallback((id) => {
    setCurrentId(id);
    setOpen(true);
  }, []);

  return (
    <Stack>
      <Table.Root
        size='sm'
        variant='line'
        interactive
        border='solid 5px gray'
        padding='10px'
        minHeight='15vh'
        className={styles.tableRoot}
        overflow='hidden'
      >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Название</Table.ColumnHeader>
            <Table.ColumnHeader>Тренер</Table.ColumnHeader>
            <Table.ColumnHeader>Описание</Table.ColumnHeader>
            <Table.ColumnHeader>Время начала</Table.ColumnHeader>
            <Table.ColumnHeader>Время окончания</Table.ColumnHeader>
            <Table.ColumnHeader>Макс. участников</Table.ColumnHeader>
            <Table.ColumnHeader textAlign='center'>Действия</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body className={styles.tableBody}>
          {sessions && sessions.length > 0 ? (
            sessions.map((session) => (
              <Table.Row key={session.id}>
                <Table.Cell>{session.name}</Table.Cell>
                <Table.Cell>{session.trainerId}</Table.Cell>
                <Table.Cell>{session.description}</Table.Cell>
                <Table.Cell>{session.startTime}</Table.Cell>
                <Table.Cell>{session.endTime}</Table.Cell>
                <Table.Cell>{session.maxClients}</Table.Cell>
                <Table.Cell width='100px'>
                  <Box
                    justifyContent='center'
                    display='flex'
                    gap='5px'
                  >
                    <Button
                      colorScheme='teal'
                      size='sm'
                      onClick={() => editCallback(session.id)}
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
                      onClick={() => removeSession(session.id)}
                    >
                      <IoTrash
                        color='black'
                        height='18px'
                      />
                    </Button>
                  </Box>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row className={styles.emptyRow}>
              <Table.Cell
                className={styles.emptyCell}
                colSpan={70}
              >
                <Heading size='sm'>Нет доступных тренировок</Heading>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
      <GroupSessionsDrawler
        isOpen={isOpen}
        setOpen={setOpen}
        currentId={currentId}
        sessions={sessions}
        addSession={updateSession}
        updateSession={updateSession}
      />
    </Stack>
  );
});

export default GroupSessionsTable;

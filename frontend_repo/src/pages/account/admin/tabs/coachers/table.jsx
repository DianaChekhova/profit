import {Box, Heading, Stack, Table} from '@chakra-ui/react';
import {IoTrash} from 'react-icons/io5';
import {Button} from '../../../../../components/ui/button.jsx';
import {FaRegEdit} from 'react-icons/fa';
import styles from '../../admin.module.scss';
import TrainersDrawler from './drawler.jsx';
import {useCallback, useState} from 'react';
import {observer} from 'mobx-react-lite';

const TrainersTable = observer((props) => {
  const {coaches, setCoaches, removeCoach, updateCoach} = props;

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
        border='none'
        padding='10px'
        overflow='hidden'
      >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>ФИО</Table.ColumnHeader>
            <Table.ColumnHeader>Специализация</Table.ColumnHeader>
            <Table.ColumnHeader>Статус</Table.ColumnHeader>
            <Table.ColumnHeader>Email</Table.ColumnHeader>
            <Table.ColumnHeader textAlign='center'>Действия</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body className={styles.tableBody}>
          {coaches &&
            coaches.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.specialty}</Table.Cell>
                <Table.Cell>{item.status}</Table.Cell>
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
                      onClick={() => removeCoach(item.id)}
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
          {!coaches && <Heading>Таблица пустая</Heading>}
        </Table.Body>
      </Table.Root>
      {currentId && (
        <TrainersDrawler
          setOpen={setOpen}
          isOpen={isOpen}
          updateCoach={updateCoach}
          setCoaches={setCoaches}
          coaches={coaches}
          currentId={currentId}
        />
      )}
    </Stack>
  );
});

export default TrainersTable;

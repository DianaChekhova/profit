import {Box, Heading, Stack, Table} from '@chakra-ui/react';
import {IoTrash} from 'react-icons/io5';
import {Button} from '../../../../../components/ui/button.jsx';
import {FaRegEdit} from 'react-icons/fa';
import styles from '../../admin.module.scss';
import {useCallback, useState} from 'react';
import {observer} from 'mobx-react-lite';
import TrainersDrawler from './drawler.jsx';

const TrainersTable = observer((props) => {
  const {coaches, setCoaches, removeCoach, updateCoach} = props;

  const [isOpen, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const editCallback = useCallback((email) => {
    setCurrentId(email);
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
            <Table.ColumnHeader>Статус</Table.ColumnHeader>
            <Table.ColumnHeader>Дата рождения</Table.ColumnHeader>
            <Table.ColumnHeader>Паспорт</Table.ColumnHeader>
            <Table.ColumnHeader>Адрес</Table.ColumnHeader>
            <Table.ColumnHeader>Телефон</Table.ColumnHeader>
            <Table.ColumnHeader>Email</Table.ColumnHeader>
            <Table.ColumnHeader textAlign='center'>Действия</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body className={styles.tableBody}>
          {coaches?.length > 0 ? (
            coaches.map((coach) => (
              <Table.Row key={coach.email}>
                <Table.Cell>{coach.name}</Table.Cell>
                <Table.Cell>{coach.status}</Table.Cell>
                <Table.Cell>{coach.birth}</Table.Cell>
                <Table.Cell>{coach.passport}</Table.Cell>
                <Table.Cell>{coach.address}</Table.Cell>
                <Table.Cell>{coach.phone}</Table.Cell>
                <Table.Cell>{coach.email}</Table.Cell>
                <Table.Cell width='100px'>
                  <Box
                    display='flex'
                    justifyContent='center'
                    gap='5px'
                  >
                    <Button
                      colorScheme='teal'
                      size='sm'
                      onClick={() => editCallback(coach.email)}
                      variant='plain'
                    >
                      <FaRegEdit
                        color='black'
                        size={18}
                      />
                    </Button>
                    <Button
                      colorScheme='teal'
                      size='sm'
                      variant='plain'
                      onClick={() => removeCoach(coach.email)}
                    >
                      <IoTrash
                        color='black'
                        size={18}
                      />
                    </Button>
                  </Box>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan={8}>
                <Heading
                  size='md'
                  textAlign='center'
                >
                  Список коучей пуст
                </Heading>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>

      {currentId && (
        <TrainersDrawler
          isOpen={isOpen}
          setOpen={setOpen}
          currentId={currentId}
          coaches={coaches}
          updateCoach={updateCoach}
          setCoaches={setCoaches}
        />
      )}
    </Stack>
  );
});

export default TrainersTable;

import {Box, Heading, Stack, Table} from '@chakra-ui/react';
import {IoTrash} from 'react-icons/io5';
import {Button} from '../../../../../components/ui/button.jsx';
import styles from '../../admin.module.scss';
import {observer} from 'mobx-react-lite';

const OrdersTable = observer((props) => {
  const {coaches, removeCoach} = props;

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
            <Table.ColumnHeader>Имя</Table.ColumnHeader>
            <Table.ColumnHeader>Телефон</Table.ColumnHeader>
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
          {!coaches.length && (
            <Table.Row className={styles.emptyRow}>
              <Table.Cell
                className={styles.emptyCell}
                colSpan={70}
              >
                <Heading size='sm'>Нет доступных заявок</Heading>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </Stack>
  );
});

export default OrdersTable;

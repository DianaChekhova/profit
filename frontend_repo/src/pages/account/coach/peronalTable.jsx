import {useMemo} from 'react';
import {Heading, Skeleton, Stack, Table} from '@chakra-ui/react';
import {observer} from 'mobx-react-lite';
import styles from './coach.module.scss';
import CoachStore from './coachStore.jsx';
import CoachService from '../../../service/coachTab/coachService.jsx';

const PersonalTable = observer(() => {
  const store = useMemo(() => new CoachStore(new CoachService(), 'personal'), []);

  return (
    <Stack spacing={4}>
      <Skeleton
        loading={store.isLoading}
        height='100%'
        className={styles.tableStack}
      >
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
                <Table.ColumnHeader>Имя клиента</Table.ColumnHeader>
                <Table.ColumnHeader>Дата </Table.ColumnHeader>
                <Table.ColumnHeader>Время</Table.ColumnHeader>
                <Table.ColumnHeader>Телефон</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body className={styles.tableBody}>
              {store.itemsList.length &&
                store.itemsList.map((item) => (
                  <Table.Row key={item.name}>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.date}</Table.Cell>
                    <Table.Cell>{item.time}</Table.Cell>
                    <Table.Cell>{item.phone}</Table.Cell>
                  </Table.Row>
                ))}
              {!store.itemsList.length && (
                <Table.Row className={styles.emptyRow}>
                  <Table.Cell
                    className={styles.emptyCell}
                    colSpan={70}
                  >
                    <Heading size='sm'>Нет доступных персональный тренировок</Heading>
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Root>
        </Stack>
      </Skeleton>
    </Stack>
  );
});

export default PersonalTable;

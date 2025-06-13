import {useMemo} from 'react';
import {Skeleton, Stack} from '@chakra-ui/react';
import styles from '../../admin.module.scss';
import BaseAdminStore from '../adminStore.jsx';
import {observer} from 'mobx-react-lite';
import OrdersTable from './table.jsx';
import OrderService from '../../../../../service/adminTab/ordersService.js';

const Orders = observer(() => {
  const store = useMemo(() => new BaseAdminStore(new OrderService(), true), []);

  return (
    <Stack spacing={4}>
      <Skeleton
        loading={store.isLoading}
        height='100%'
        className={styles.tableStack}
      >
        <OrdersTable
          removeSession={store.removeItem}
          coaches={store.coachesList}
        />
      </Skeleton>
      <Skeleton
        loading={store.isLoading}
        height='40px'
        marginTop='24px'
        width='200px'
      ></Skeleton>
    </Stack>
  );
});

export default Orders;

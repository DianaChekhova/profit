import {useMemo, useState} from 'react';
import {Button} from '../../../../../components/ui/button.jsx';
import {Skeleton, Stack} from '@chakra-ui/react';
import styles from '../../admin.module.scss';
import BaseAdminStore from '../adminStore.jsx';
import {observer} from 'mobx-react-lite';
import GroupSessionsDrawler from './drawler.jsx';
import GroupSessionsTable from './table.jsx';
import GroupScheduleService from '../../../../../service/adminTab/GroupScheduleService.js';

const GroupSessions = observer(() => {
  const [isOpen, setOpen] = useState(false);
  const store = useMemo(() => new BaseAdminStore(new GroupScheduleService()), []);

  return (
    <Stack spacing={4}>
      <Skeleton
        loading={store.isLoading}
        height='100%'
        className={styles.tableStack}
      >
        <GroupSessionsTable
          removeSession={store.removeItem}
          coaches={store.coachesList}
          sessions={store.itemsList}
          updateSession={store.updateItem}
        />
      </Skeleton>

      <Skeleton
        loading={store.isLoading}
        height='40px'
        marginTop='24px'
        width='200px'
      >
        <Button
          width='200px'
          colorPalette='purple'
          onClick={() => setOpen(true)}
        >
          Добавить тренировку
        </Button>
      </Skeleton>

      <GroupSessionsDrawler
        sessions={store.itemsList}
        coaches={store.coachesList}
        addSession={store.addItem}
        updateSession={store.updateItem}
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </Stack>
  );
});

export default GroupSessions;

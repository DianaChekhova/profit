import {useMemo, useState} from 'react';
import {Button} from '../../../../../components/ui/button.jsx';
import {Skeleton, Stack} from '@chakra-ui/react';
import styles from '../../admin.module.scss';
import BaseAdminStore from '../adminStore.jsx';
import {observer} from 'mobx-react-lite';
import TrainersDrawler from './drawler.jsx';
import TrainersTable from './table.jsx';
import TrainersService from '../../../../../service/adminTab/TrainersService.js';

const Trainers = observer(() => {
  const [isOpen, setOpen] = useState(false);
  const store = useMemo(() => new BaseAdminStore(new TrainersService(), []), []);

  return (
    <Stack spacing={4}>
      <Skeleton
        loading={store.isLoading}
        height='100%'
        className={styles.tableStack}
      >
        <TrainersTable
          removeCoach={store.removeItem}
          coaches={store.itemsList}
          updateCoach={store.updateItem}
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
          Добавить тренера
        </Button>
      </Skeleton>

      <TrainersDrawler
        coaches={store.itemsList}
        addCoach={store.addItem}
        updateCoach={store.updateItem}
        isOpen={isOpen}
        setOpen={setOpen}
      />
    </Stack>
  );
});

export default Trainers;

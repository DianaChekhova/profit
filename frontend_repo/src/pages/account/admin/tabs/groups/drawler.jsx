import {Button} from '../../../../../components/ui/button.jsx';
import {
  DrawerActionTrigger,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerRoot,
} from '../../../../../components/ui/drawer.jsx';
import {useEffect, useState} from 'react';
import {Field} from '../../../../../components/ui/field.jsx';
import {Heading, Input} from '@chakra-ui/react';
import styles from '../../../../../components/user/authentication/modal/tabs/tabs.module.scss';

const GroupSessionsDrawler = (props) => {
  const {isOpen, setOpen, currentId, sessions, addSession, updateSession} = props;

  const [drawlerForm, setForm] = useState({
    id: ``,
    trainerId: '',
    name: '',
    description: '',
    startTime: '',
    endTime: '',
    maxClients: '',
  });

  const changeHandler = (e, type) => {
    if (type === 'name') {
      setForm((prevState) => {
        return {...prevState, name: e.target.value};
      });
    }
    if (type === 'trainerId') {
      setForm((prevState) => {
        return {...prevState, trainerId: e.target.value};
      });
    }
    if (type === 'description') {
      setForm((prevState) => {
        return {...prevState, description: e.target.value};
      });
    }
    if (type === 'startTime') {
      setForm((prevState) => {
        return {...prevState, startTime: e.target.value};
      });
    }
    if (type === 'endTime') {
      setForm((prevState) => {
        return {...prevState, endTime: e.target.value};
      });
    }
    if (type === 'maxClients') {
      setForm((prevState) => {
        return {...prevState, maxClients: parseInt(e.target.value)};
      });
    }
  };

  const handleSubmit = () => {
    if (currentId) {
      updateSession(currentId, drawlerForm);
    } else {
      addSession(drawlerForm);
    }
    setOpen(false);
  };

  useEffect(() => {
    if (currentId) {
      const session = sessions.find((item) => item.id === currentId);
      if (session) {
        setForm(session);
      }
    } else {
      setForm({
        id: ``,
        trainerId: '',
        name: '',
        description: '',
        startTime: '12:00',
        endTime: '13:00',
        maxClients: 1,
      });
    }
  }, [currentId, sessions]);

  return (
    <DrawerRoot
      open={isOpen}
      onOpenChange={(e) => setOpen(e.open)}
      size='lg'
    >
      <DrawerContent>
        <DrawerBody>
          <Heading
            size='md'
            color='black'
            margin='0 0 16px 0'
          >
            {currentId ? 'Редактировать тренировку' : 'Добавить тренировку'}
          </Heading>
          <Field label='Название тренировки'>
            <Input
              className={styles.formInput}
              value={drawlerForm.name}
              onChange={(e) => changeHandler(e, 'name')}
              placeholder='Введите название тренировки'
            />
          </Field>

          <Field label='ID тренера'>
            <Input
              className={styles.formInput}
              value={drawlerForm.trainerId}
              onChange={(e) => changeHandler(e, 'trainerId')}
              placeholder='Введите ID тренера'
            />
          </Field>

          <Field label='Описание'>
            <Input
              className={styles.formInput}
              value={drawlerForm.description}
              onChange={(e) => changeHandler(e, 'description')}
              placeholder='Введите описание тренировки'
            />
          </Field>

          <Field label='Время начала'>
            <Input
              className={styles.formInput}
              type='time'
              value={drawlerForm.startTime}
              onChange={(e) => changeHandler(e, 'startTime')}
            />
          </Field>

          <Field label='Время окончания'>
            <Input
              className={styles.formInput}
              type='time'
              value={drawlerForm.endTime}
              onChange={(e) => changeHandler(e, 'endTime')}
            />
          </Field>

          <Field label='Максимальное количество участников'>
            <Input
              className={styles.formInput}
              type='number'
              value={drawlerForm.maxClients}
              onChange={(e) => changeHandler(e, 'maxClients')}
              placeholder='Введите максимальное количество участников'
            />
          </Field>
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant='outline'>Отменить</Button>
          </DrawerActionTrigger>
          <DrawerActionTrigger asChild>
            <Button
              colorPalette='purple'
              onClick={handleSubmit}
            >
              Сохранить
            </Button>
          </DrawerActionTrigger>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default GroupSessionsDrawler;

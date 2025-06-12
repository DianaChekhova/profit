import {Button} from '../../../../../components/ui/button.jsx';
import {
  DrawerActionTrigger,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerRoot,
} from '../../../../../components/ui/drawer.jsx';
import {useEffect, useMemo, useRef, useState} from 'react';
import {createListCollection, Heading, Input} from '@chakra-ui/react';
import styles from '../../../../../components/user/authentication/modal/tabs/tabs.module.scss';
import {InputGroup} from '../../../../../components/ui/input-group.jsx';
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '../../../../../components/ui/select.jsx';
import {observer} from 'mobx-react-lite';

const groupClassesData = createListCollection({
  items: [
    {label: 'Core', value: 'Core'},
    {label: 'ABS', value: 'ABS'},
    {label: 'Upper body', value: 'Upper body'},
    {label: 'Скульптурирующие', value: 'Скульптурирующие'},
    {label: 'Pump', value: 'Pump'},
    {label: 'Стретчинг', value: 'Стретчинг'},
    {label: 'ABS + стретчинг', value: 'ABS + стретчинг'},
    {label: 'Баланс', value: 'Баланс'},
    {label: 'Йога', value: 'Йога'},
    {label: 'Функциональные', value: 'Функциональные'},
    {label: 'Зумба', value: 'Зумба'},
    {label: 'Аэробика', value: 'Аэробика'},
    {label: 'Бокс', value: 'Бокс'},
  ],
});

const GroupSessionsDrawler = (props) => {
  const {isOpen, setOpen, currentId, sessions, addSession, updateSession, coaches} = props;

  const prepareCoaches = useMemo(() => {
    return {
      items:
        coaches?.map((coach) => ({
          label: coach.name,
          value: coach.name,
        })) || [],
    };
  }, [coaches]);
  console.log(coaches);
  const coachesData = createListCollection(prepareCoaches);

  const getDefaultTime = () => {
    const now = new Date();
    const currentHours = now.getHours();
    let defaultDate = now.toISOString().split('T')[0];
    let defaultTime = '12:00';

    if (currentHours < 16) {
      const futureTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);
      const hours = futureTime.getHours().toString().padStart(2, '0');
      const minutes = futureTime.getMinutes().toString().padStart(2, '0');
      defaultTime = `${hours}:${minutes}`;
    }

    return {defaultDate, defaultTime};
  };

  const {defaultDate, defaultTime} = getDefaultTime();

  const [drawlerForm, setForm] = useState({
    id: '',
    trainer: prepareCoaches.items[0]?.value || '',
    training: 'Баланс',
    date: defaultDate,
    time: defaultTime,
  });

  const changeHandler = (e, type) => {
    setForm((prevState) => ({
      ...prevState,
      [type]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!drawlerForm.trainer || !drawlerForm.training || !drawlerForm.date || !drawlerForm.time) {
      return;
    }
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
      const {defaultDate, defaultTime} = getDefaultTime();
      setForm({
        id: '',
        trainer: prepareCoaches.items[0]?.value || '',
        training: 'Баланс',
        date: defaultDate,
        time: defaultTime,
      });
    }
  }, [currentId, sessions, prepareCoaches.items]);

  const dateInputRef = useRef(null);

  const handleClick = () => {
    dateInputRef.current.showPicker();
  };

  const dateInputRef2 = useRef(null);

  const handleClick2 = () => {
    dateInputRef2.current.showPicker();
  };

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
          <Heading
            color='black'
            fontSize='12px'
            fontWeight={400}
          >
            Тренер
          </Heading>
          <InputGroup
            mb='24px'
            width='100%'
          >
            <SelectRoot
              collection={coachesData}
              size='sm'
              color='black'
              className={styles.select}
              width='100%'
              defaultValue={[drawlerForm.trainer]}
              onChange={(e) => changeHandler(e, 'trainer')}
            >
              <SelectTrigger>
                <SelectValueText value={drawlerForm.trainer} />
              </SelectTrigger>
              <SelectContent className={styles.select}>
                {coachesData.items.map((coachItem) => (
                  <SelectItem
                    color='black'
                    className={styles.selectItem}
                    item={coachItem}
                    value={[coachItem.value]}
                    key={coachItem.value}
                  >
                    {coachItem.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </InputGroup>
          <Heading
            color='black'
            fontSize='12px'
            fontWeight={400}
          >
            Тренировка
          </Heading>
          <InputGroup
            mb='16px'
            width='100%'
          >
            <SelectRoot
              collection={groupClassesData}
              size='sm'
              color='black'
              className={styles.select}
              width='100%'
              defaultValue={[drawlerForm.training]}
              onChange={(e) => changeHandler(e, 'training')}
            >
              <SelectTrigger>
                <SelectValueText value={drawlerForm.training} />
              </SelectTrigger>
              <SelectContent className={styles.select}>
                {groupClassesData.items.map((coachItem) => (
                  <SelectItem
                    color='black'
                    item={coachItem}
                    className={styles.selectItem}
                    key={coachItem.value}
                    value={coachItem.value}
                  >
                    {coachItem.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </InputGroup>

          <Heading
            color='black'
            fontSize='12px'
            fontWeight={400}
          >
            Дата
          </Heading>
          <Input
            type='date'
            value={drawlerForm.date}
            mb='16px'
            ref={dateInputRef2}
            onClick={handleClick2}
            onChange={(e) => changeHandler(e, 'date')}
          />
          <Heading
            color='black'
            fontSize='12px'
            fontWeight={400}
          >
            Время
          </Heading>
          <Input
            type='time'
            value={drawlerForm.time}
            ref={dateInputRef}
            onClick={handleClick}
            mb='16px'
            onChange={(e) => changeHandler(e, 'time')}
          />
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

export default observer(GroupSessionsDrawler);

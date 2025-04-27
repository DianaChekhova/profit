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
import {createListCollection, Heading, Input} from '@chakra-ui/react';
import styles from '../../../../../components/user/authentication/modal/tabs/tabs.module.scss';
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '../../../../../components/ui/select.jsx';

const coachStatus = createListCollection({
  items: [
    {label: 'Активный', value: 'active'},
    {label: 'Неактивный', value: 'inactive'},
    {label: 'В отпуске', value: 'on_leave'},
  ],
});

const TrainersDrawler = (props) => {
  const {isOpen, setOpen, currentId, coaches, addCoach, updateCoach} = props;

  const [drawlerForm, setForm] = useState({
    id: ``,
    firstName: '',
    lastName: '',
    status: 'active',
    specialty: '',
    phone: '',
    email: '',
    password: '',
  });

  const changeHandler = (e, type) => {
    if (type === 'firstName') {
      setForm((prevState) => {
        return {...prevState, firstName: e.target.value};
      });
    }
    if (type === 'lastName') {
      setForm((prevState) => {
        return {...prevState, lastName: e.target.value};
      });
    }
    if (type === 'status') {
      setForm((prevState) => {
        return {...prevState, status: e.target.value};
      });
    }
    if (type === 'specialty') {
      setForm((prevState) => {
        return {...prevState, specialty: e.target.value};
      });
    }
    if (type === 'phone') {
      setForm((prevState) => {
        return {...prevState, phone: e.target.value};
      });
    }
    if (type === 'email') {
      setForm((prevState) => {
        return {...prevState, email: e.target.value};
      });
    }
    if (type === 'password') {
      setForm((prevState) => {
        return {...prevState, password: e.target.value};
      });
    }
  };

  const handleSubmit = () => {
    const coachExist = coaches.find((item) => item.id === currentId);
    console.log(coachExist);
    if (coachExist && currentId) {
      console.log('jopa');
      updateCoach(currentId, drawlerForm);
    } else {
      console.log('jopa2');
      addCoach(drawlerForm);
    }
  };

  useEffect(() => {
    if (currentId) {
      const item = coaches.find((item) => item.id === currentId);
      if (item) {
        setForm({
          id: item.id,
          firstName: item.firstName,
          lastName: item.lastName,
          status: item.status,
          specialty: item.specialty,
          phone: item.phone,
          email: item.email,
          password: '',
        });
      }
    }
  }, [currentId, coaches]);

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
            Редактировать тренера
          </Heading>
          <Heading color='black'>Личные данные</Heading>
          <Field label='Имя'>
            <Input
              className={styles.formInput}
              type='text'
              value={drawlerForm.firstName}
              onChange={(e) => changeHandler(e, 'firstName')}
              placeholder='Введите имя'
            />
          </Field>
          <Field label='Фамилия'>
            <Input
              className={styles.formInput}
              type='text'
              value={drawlerForm.lastName}
              onChange={(e) => changeHandler(e, 'lastName')}
              placeholder='Введите фамилию'
            />
          </Field>
          <Field label='Специализация'>
            <Input
              className={styles.formInput}
              type='text'
              value={drawlerForm.specialty}
              onChange={(e) => changeHandler(e, 'specialty')}
              placeholder='Введите специализацию'
            />
          </Field>
          <Field label='Номер телефона'>
            <Input
              className={styles.formInput}
              type='phone'
              value={drawlerForm.phone}
              onChange={(e) => changeHandler(e, 'phone')}
              placeholder='Введите номер телефона'
            />
          </Field>
          <Field label='Email'>
            <Input
              className={styles.formInput}
              type='email'
              value={drawlerForm.email}
              onChange={(e) => changeHandler(e, 'email')}
              placeholder='Введите Email'
            />
          </Field>
          {!currentId && (
            <Field label='Пароль'>
              <Input
                className={styles.formInput}
                type='password'
                value={drawlerForm.password}
                onChange={(e) => changeHandler(e, 'password')}
                placeholder='Введите пароль'
              />
            </Field>
          )}
          <Heading
            color='black'
            margin='24px 0'
          >
            Статус
          </Heading>
          <SelectRoot
            collection={coachStatus}
            size='sm'
            color='black'
            className={styles.select}
            width='320px'
            defaultValue={['active']}
            value={[drawlerForm.status]}
            onChange={(e) => changeHandler(e, 'status')}
          >
            <SelectLabel>Статус тренера</SelectLabel>
            <SelectTrigger>
              <SelectValueText placeholder='Статус' />
            </SelectTrigger>
            <SelectContent
              defaultValue={'active'}
              className={styles.select}
            >
              {coachStatus.items.map((status) => (
                <SelectItem
                  className={styles.selectItem}
                  color='black'
                  item={status}
                  key={status.value}
                >
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
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

export default TrainersDrawler;

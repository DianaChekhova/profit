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

const TrainersDrawler = (props) => {
  const {isOpen, setOpen, currentId, coaches, addCoach, updateCoach} = props;

  const [drawlerForm, setForm] = useState({
    id: ``,
    name: ``,
    status: 'active',
    specialty: '',
    phone: '',
    email: '',
    password: '',
  });

  const changeHandler = (e, type) => {
    if (type === 'name') {
      setForm((prevState) => {
        return {...prevState, name: e.target.value};
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
    if (coachExist && currentId) {
      updateCoach(currentId, drawlerForm);
    } else {
      addCoach(drawlerForm);
      clearForm();
    }
  };

  const clearForm = () => {
    setForm({
      id: ``,
      name: ``,
      status: 'active',
      specialty: '',
      phone: '',
      email: '',
      password: '',
    });
  };

  useEffect(() => {
    if (currentId) {
      const item = coaches.find((item) => item.id === currentId);
      if (item) {
        setForm({
          id: item.id,
          name: item.name,
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
              value={drawlerForm.name}
              onChange={(e) => changeHandler(e, 'name')}
              placeholder='Введите имя'
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

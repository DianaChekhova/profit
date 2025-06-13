import {Button} from '../../../../../components/ui/button.jsx';
import {
  DrawerActionTrigger,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerRoot,
} from '../../../../../components/ui/drawer.jsx';
import React, {useEffect, useRef, useState} from 'react';
import {Heading, Input} from '@chakra-ui/react';
import styles from '../../../../../components/user/authentication/modal/tabs/tabs.module.scss';
import {AbonimentBlock} from '../../../../../components/abonimentBlock/index.jsx';

const ClientsDrawler = (props) => {
  const {isOpen, setOpen, currentId, users, addUser, updateUser} = props;

  const [drawlerForm, setForm] = useState({
    id: ``,
    name: '',
    status: '',
    birth: '',
    passport: '',
    address: '',
    phone: '',
    email: '',
    subscription: {
      status: 'freeze',
      duration: '12',
      type: 'morning',
      pool: 'yes',
    },
  });

  const changeSubscription = (event, type) => {
    setForm((prevState) => {
      return {
        ...prevState,
        subscription: {
          ...prevState.subscription,
          [type]: parseInt(event.target.value) ? parseInt(event.target.value) : event.target.value,
        },
      };
    });
  };

  const changeHandler = (e, type) => {
    if (type === 'name') {
      setForm((prevState) => {
        return {...prevState, name: e.target.value};
      });
    }
    if (type === 'status') {
      setForm((prevState) => {
        return {...prevState, status: e.target.value};
      });
    }
    if (type === 'birth') {
      setForm((prevState) => {
        return {...prevState, birth: e.target.value};
      });
    }
    if (type === 'passport') {
      setForm((prevState) => {
        return {...prevState, passport: e.target.value};
      });
    }
    if (type === 'address') {
      setForm((prevState) => {
        return {...prevState, address: e.target.value};
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
  };

  const handleSubmit = () => {
    const userExist = users.find((item) => item.id === currentId);
    if (userExist) {
      updateUser(currentId, drawlerForm);
    } else {
      addUser(drawlerForm);
    }
  };

  //не работает
  useEffect(() => {
    if (currentId) {
      const item = users.find((item) => item.id === currentId);
      setForm(item);
    }
  }, [currentId, users]);

  const dateInputRef = useRef(null);

  const handleClick = () => {
    dateInputRef.current.showPicker();
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
            Редактировать
          </Heading>
          <Heading color='black'>Личные данные</Heading>
          <Heading
            color='black'
            fontSize='12px'
            fontWeight={400}
          >
            Фио
          </Heading>
          <Input
            className={styles.formInput}
            type='name'
            value={drawlerForm.name}
            onChange={(e) => changeHandler(e, 'name')}
            placeholder='Введите имя'
          />
          <Heading
            color='black'
            fontSize='12px'
            fontWeight={400}
          >
            Дата рождения
          </Heading>
          <Input
            className={styles.formInput}
            type='date'
            value={drawlerForm.birth}
            ref={dateInputRef}
            onClick={handleClick}
            onChange={(e) => changeHandler(e, 'birth')}
            placeholder='Введите дату рождения'
          />
          <Heading
            color='black'
            fontSize='12px'
            fontWeight={400}
          >
            Паспорт
          </Heading>
          <Input
            className={styles.formInput}
            type='name'
            value={drawlerForm.passport}
            onChange={(e) => changeHandler(e, 'passport')}
            placeholder='Введите номер паспорта'
          />
          <Heading
            color='black'
            fontSize='12px'
            fontWeight={400}
          >
            Адрес
          </Heading>
          <Input
            className={styles.formInput}
            type='name'
            value={drawlerForm.address}
            onChange={(e) => changeHandler(e, 'address')}
            placeholder='Введите адресс'
          />
          <Heading
            color='black'
            fontSize='12px'
            fontWeight={400}
          >
            Номер телефона
          </Heading>
          <Input
            className={styles.formInput}
            type='name'
            value={drawlerForm.phone}
            onChange={(e) => changeHandler(e, 'phone')}
            placeholder='Введите номер телефона'
          />
          <Heading
            color='black'
            fontSize='12px'
            fontWeight={400}
          >
            Email
          </Heading>
          <Input
            className={styles.formInput}
            type='name'
            value={drawlerForm.email}
            onChange={(e) => changeHandler(e, 'email')}
            placeholder='Введите ваш Email'
          />
          <AbonimentBlock
            formData={drawlerForm.subscription}
            setForm={changeSubscription}
            needStatus
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

export default ClientsDrawler;

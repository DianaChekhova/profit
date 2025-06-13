import {Button} from '../../../../../components/ui/button.jsx';
import {
  DrawerActionTrigger,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerRoot,
} from '../../../../../components/ui/drawer.jsx';
import React, {useEffect, useRef, useState} from 'react';
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
    setForm((prevState) => {
      return {...prevState, [type]: e.target.value};
    });
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
      birth: '',
      phone: '',
      email: '',
      passport: '',
      address: '',
    });
  };

  useEffect(() => {
    if (currentId) {
      const item = coaches.find((item) => item.id === currentId);
      if (item) {
        setForm({
          id: item.id,
          name: item.name,
          passport: item.passport,
          birth: item.birth,
          phone: item.phone,
          email: item.email,
          address: item.address,
        });
      }
    }
  }, [currentId, coaches]);

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
            Редактировать тренера
          </Heading>
          <Heading color='black'>Личные данные</Heading>
          <Heading
            color='black'
            fontSize='12px'
            fontWeight={400}
          >
            Имя
          </Heading>
          <Input
            className={styles.formInput}
            type='text'
            value={drawlerForm.name}
            onChange={(e) => changeHandler(e, 'name')}
            placeholder='Введите имя'
          />
          <Heading
            color='black'
            fontSize='12px'
            fontWeight={400}
          >
            Телефон
          </Heading>
          <Input
            className={styles.formInput}
            type='phone'
            value={drawlerForm.phone}
            onChange={(e) => changeHandler(e, 'phone')}
            placeholder='Введите номер телефона'
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
            ref={dateInputRef}
            onClick={handleClick}
            value={drawlerForm.birth}
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
            type='text'
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
            type='text'
            value={drawlerForm.address}
            onChange={(e) => changeHandler(e, 'address')}
            placeholder='Введите адресс'
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
            type='email'
            value={drawlerForm.email}
            onChange={(e) => changeHandler(e, 'email')}
            placeholder='Введите Email'
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

export default TrainersDrawler;

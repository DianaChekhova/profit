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

const subscriptionStatus = createListCollection({
  items: [
    {label: 'Активный', value: 'активен'},
    {label: 'Заморожен', value: 'заморожен'},
    {label: 'Истек', value: 'истек'},
  ],
});

const ClientsDrawler = (props) => {
  const {isOpen, setOpen, currentId, users, addUser, updateUser} = props;
  console.log(subscriptionStatus);

  const [drawlerForm, setForm] = useState({
    id: ``,
    name: '',
    status: '',
    birth: '',
    passport: '',
    address: '',
    phone: '',
    email: '',
  });

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
    const userExist = users.find((item) => item.email === currentId);
    if (userExist) {
      updateUser(currentId, drawlerForm);
    } else {
      addUser(drawlerForm);
    }
  };

  //не работает
  useEffect(() => {
    if (currentId) {
      const item = users.find((item) => item.email === currentId);
      setForm(item);
    }
  }, [currentId, users]);

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
          <Field label='ФИО '>
            <Input
              className={styles.formInput}
              type='name'
              value={drawlerForm.name}
              onChange={(e) => changeHandler(e, 'name')}
              placeholder='Введите имя'
            />
          </Field>
          <Field label='Дата рождения'>
            <Input
              className={styles.formInput}
              type='birth'
              value={drawlerForm.birth}
              onChange={(e) => changeHandler(e, 'birth')}
              placeholder='Введите дату рождения'
            />
          </Field>
          <Field label='Паспорт'>
            <Input
              className={styles.formInput}
              type='name'
              value={drawlerForm.passport}
              onChange={(e) => changeHandler(e, 'passport')}
              placeholder='Введите паспорт'
            />
          </Field>
          <Field label='Адресс'>
            <Input
              className={styles.formInput}
              type='name'
              value={drawlerForm.address}
              onChange={(e) => changeHandler(e, 'address')}
              placeholder='Введите адресс'
            />
          </Field>
          <Field label='Номер телефона'>
            <Input
              className={styles.formInput}
              type='name'
              value={drawlerForm.phone}
              onChange={(e) => changeHandler(e, 'phone')}
              placeholder='Введите номер телефона'
            />
          </Field>
          <Field label='Email'>
            <Input
              className={styles.formInput}
              type='name'
              value={drawlerForm.email}
              onChange={(e) => changeHandler(e, 'email')}
              placeholder='Введите Email'
            />
          </Field>
          <Heading
            color='black'
            margin='24px 0'
          >
            Абонемент
          </Heading>
          <SelectRoot
            collection={subscriptionStatus}
            size='sm'
            color='black'
            className={styles.select}
            width='320px'
            defaultValue={'active'}
            value={drawlerForm.status}
            onChange={(e) => changeHandler(e, 'status')}
          >
            <SelectLabel>Cтатус абонимента</SelectLabel>
            <SelectTrigger>
              <SelectValueText placeholder='Статус' />
            </SelectTrigger>
            <SelectContent
              defaultValue={'active'}
              value={''}
              className={styles.select}
            >
              {subscriptionStatus.items.map((status) => (
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

export default ClientsDrawler;

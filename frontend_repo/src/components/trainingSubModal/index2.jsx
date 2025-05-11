import {Box, Portal, Stack, Button, Flex, Input} from '@chakra-ui/react';
import {useState} from 'react';
import {SelectContent, SelectItem, SelectLabel, SelectRoot, SelectTrigger, SelectValueText} from '../ui/select.jsx';
import {Field} from '../ui/field.jsx';
import {InputGroup} from '../ui/input-group.jsx';
import styles from '../user/authentication/modal/tabs/tabs.module.scss';

const coachesData = [
  {item: {value: 'Аржанова Наталья'}},
  {item: {value: 'Новиков Антон'}},
  {item: {value: 'Петренко Елена'}},
  {item: {value: 'Соколов Михаил'}},
  {item: {value: 'Соловьёв Николай'}},
  {item: {value: 'Безвенко Инна'}},
  {item: {value: 'Гаврюшин Стас'}},
  {item: {value: 'Замятина Евгения'}},
  {item: {value: 'Степина Наталья'}},
  {item: {value: 'Зодченко Константин'}},
  {item: {value: 'Нестерова Ольга'}},
  {item: {value: 'Семина Анна'}},
  {item: {value: 'Бахмаров Артем'}},
  {item: {value: 'Тарасова Екатерина'}},
];

const trainingsData = [{item: {value: 'Йога'}}, {item: {value: 'Фитнес'}}, {item: {value: 'Плавание'}}];

function TrainingSubscriptionModal({closeModalHandler}) {
  const [coach, setCoach] = useState({item: {value: 'Бахмаров Артем'}});
  const [training, setTraining] = useState({item: {value: 'Йога'}});
  const [date, setDate] = useState({item: {value: '2023-05-15'}});
  const [time, setTime] = useState({item: {value: '12:00'}});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные для записи:', {
      coach: coach.item.value,
      training: training.item.value,
      date: date.item.value,
      time: time.item.value,
    });
    closeModalHandler();
  };

  const drawlerChangeHandle = (_, type) => {};

  return (
    <Portal>
      <Box
        p={4}
        maxWidth='400px'
        mx='auto'
      >
        <Stack
          spacing={4}
          mt={2}
        >
          <Field label='Дата'>
            <Input
              className={styles.formInput}
              value={time}
              onChange={(e) => drawlerChangeHandle(e, 'time')}
              placeholder='Введите дату записи'
            />
          </Field>
          <Field label='Время'>
            <Input
              className={styles.formInput}
              value={date}
              onChange={(e) => drawlerChangeHandle(e, 'date')}
              placeholder='Введите время записи'
            />
          </Field>
          <Flex
            justify='space-between'
            alignItems='center'
          >
            <Field className={''} />
            <Button
              type='submit'
              width='80px'
              bgcolor='purple'
              backgroundColor='#805AD5'
              flexSelf='end'
              onClick={handleSubmit}
              isDisabled={!training || !date || !time}
            >
              Записаться
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Portal>
  );
}

export default TrainingSubscriptionModal;

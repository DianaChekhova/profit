import {Box, Portal, Stack, Flex, Input, createListCollection} from '@chakra-ui/react';
import {useRef, useState} from 'react';
import {SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText} from '../ui/select.jsx';
import {Field} from '../ui/field.jsx';
import {Button} from '../ui/button.jsx';
import {InputGroup} from '../ui/input-group.jsx';
import styles from './modal.module.scss';
import {RxCross2} from 'react-icons/rx';
import {FaCheckCircle} from 'react-icons/fa';

const coachesData = createListCollection({
  items: [
    {label: 'Аржанова Наталья', value: 'Аржанова Наталья'},
    {label: 'Новиков Антон', value: 'Новиков Антон'},
    {label: 'Петренко Елена', value: 'Петренко Елена'},
    {label: 'Соколов Михаил', value: 'Соколов Михаил'},
    {label: 'Соловьёв Николай', value: 'Соловьёв Николай'},
    {label: 'Безвенко Инна', value: 'Безвенко Инна'},
    {label: 'Замятина Евгения', value: 'Замятина Евгения'},
    {label: 'Степина Наталья', value: 'Степина Наталья'},
    {label: 'Зодченко Константин', value: 'Зодченко Константин'},
    {label: 'Нестерова Ольга', value: 'Нестерова Ольга'},
    {label: 'Семина Анна', value: 'Семина Анна'},
    {label: 'Бахмаров Артем', value: 'Бахмаров Артем'},
    {label: 'Тарасова Екатерина', value: 'Тарасова Екатерина'},
  ],
});

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

function TrainingSubscriptionModal({closeModalHandler, individual}) {
  // Состояния для формы

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

  const [form, setForm] = useState({
    coach: 'Аржанова Наталья',
    training: 'Upper body',
    date: defaultDate,
    time: defaultTime,
  });

  const [loading, setLoading] = useState(false);

  const [done, setDone] = useState(false);

  const changeForm = (e, type) => {
    setForm((prev) => ({...prev, [type]: e.target.value}));
  };

  const handleSubmit = () => {
    setDone(false);
    setLoading(true);

    setTimeout(() => {
      setDone(true);
      setLoading(false);
      setTimeout(() => {
        closeModalHandler();
      }, 500);
    }, 1000);
  };

  const dateInputRef = useRef(null);

  const handleClick = () => {
    dateInputRef.current.showPicker();
  };

  const dateInputRef2 = useRef(null);

  const handleClick2 = () => {
    dateInputRef2.current.showPicker();
  };

  return (
    <Portal>
      <div
        className={styles.modalWrapper}
        onClick={closeModalHandler}
      />
      <Box
        minW={{base: '90%', md: '468px'}}
        className={styles.modalForm}
      >
        <Stack
          spacing={4}
          p='24px'
          backgroundColor='white'
          boxShadow='md'
        >
          <Flex
            justify='space-between'
            align='start'
          >
            <Box>
              <Box
                as='h2'
                fontWeight='bold'
                fontSize='24px'
                color='black'
                mb='4px'
              >
                {!individual ? 'Пожалуйста, заполните анкету' : 'Выберите к какому тренеру и'}
              </Box>
              <Box
                as='h2'
                fontWeight='bold'
                fontSize='24px'
                color='black'
                mb='16px'
              >
                {!individual ? 'и менеджер свяжется с вам' : 'когда вы хотите записаться'}
              </Box>
            </Box>
            <Box
              as='span'
              cursor='pointer'
              onClick={closeModalHandler}
            >
              <RxCross2 size={24} />
            </Box>
          </Flex>
          <Box>
            <Box
              fontWeight='500'
              color='gray.700'
              mb='4px'
            >
              Тренер
            </Box>
            <InputGroup
              mb='24px'
              width='100%'
            >
              <Field>
                <SelectRoot
                  collection={coachesData}
                  size='sm'
                  color='black'
                  className={styles.select}
                  width='100%'
                  defaultValue={'Аржанова Наталья'}
                  value={form.coach}
                  onChange={(e) => changeForm(e, 'date')}
                >
                  <SelectTrigger>
                    <SelectValueText placeholder='Аржанова Наталья' />
                  </SelectTrigger>
                  <SelectContent defaultValue={'Аржанова Наталья'}>
                    {coachesData.items.map((coachItem) => (
                      <SelectItem
                        color='black'
                        item={coachItem}
                        key={coachItem.value}
                      >
                        {coachItem.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Field>
            </InputGroup>
            <Box
              fontWeight='500'
              color='gray.700'
              mb='4px'
            >
              Вид тренировки
            </Box>
            {!individual && (
              <InputGroup
                mb='16px'
                width='100%'
              >
                <Field>
                  <SelectRoot
                    collection={groupClassesData}
                    size='sm'
                    color='black'
                    className={styles.select}
                    width='100%'
                    defaultValue={'Баланс'}
                    value={form.coach}
                    onChange={(e) => changeForm(e, 'date')}
                  >
                    <SelectTrigger>
                      <SelectValueText placeholder='Баланс' />
                    </SelectTrigger>
                    <SelectContent defaultValue={'Баланс'}>
                      {groupClassesData.items.map((coachItem) => (
                        <SelectItem
                          color='black'
                          item={coachItem}
                          key={coachItem.value}
                        >
                          {coachItem.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </SelectRoot>
                </Field>
              </InputGroup>
            )}
            {individual && (
              <InputGroup
                mb='24px'
                width='100%'
              >
                <Field>
                  <Input
                    className={styles.formInput}
                    value={'Индивидуальная'}
                    type='text'
                    disabled
                    placeholder='Индивидуальная'
                  />
                </Field>
              </InputGroup>
            )}
            <Box
              fontWeight='500'
              color='gray.700'
              mb='4px'
            >
              Дата
            </Box>
            <InputGroup
              mb='24px'
              width='100%'
            >
              <Field>
                <Input
                  className={styles.formInput}
                  value={form.date}
                  type='date'
                  ref={dateInputRef}
                  onClick={handleClick}
                  onChange={(e) => changeForm(e, 'date')}
                  placeholder='Введите дату записи'
                />
              </Field>
            </InputGroup>
            <Box
              fontWeight='500'
              color='gray.700'
              mb='4px'
            >
              Время
            </Box>
            <InputGroup
              mb='24px'
              width='100%'
            >
              <Field>
                <Input
                  className={styles.formInput}
                  value={form.time}
                  type='time'
                  ref={dateInputRef2}
                  onClick={handleClick2}
                  onChange={(e) => changeForm(e, 'time')}
                  placeholder='Введите время записи'
                />
              </Field>
            </InputGroup>
            <Flex
              justify='flex-end'
              align='center'
              gap='8px'
            >
              {done && (
                <>
                  <Box
                    color='green.500'
                    fontSize='14px'
                  >
                    Успешно
                  </Box>
                  <Box
                    as={FaCheckCircle}
                    color='green.500'
                    size='20px'
                  />
                </>
              )}
              <Button
                type='submit'
                width='120px'
                borderRadius='8px'
                colorScheme='purple'
                variant='outline'
                color='#805AD5'
                disabled={loading}
                border='1px solid #805AD5'
                onClick={closeModalHandler}
              >
                Отмена
              </Button>
              <Button
                type='submit'
                width='120px'
                borderRadius='8px'
                bgcolor='purple'
                backgroundColor='#805AD5'
                loading={loading}
                onClick={handleSubmit}
              >
                Отправить
              </Button>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Portal>
  );
}

export default TrainingSubscriptionModal;

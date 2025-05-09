import styles from './modal.module.scss';
import {Box, Flex, Portal, Stack, Input} from '@chakra-ui/react';
import {RxCross2} from 'react-icons/rx';
import {Button} from '../../../components/ui/button.jsx';
import {InputGroup} from '../../../components/ui/input-group.jsx';
import {Field} from '../../../components/ui/field.jsx';
import {useState} from 'react';

function SubsModal(props) {
  const {closeModalHandler} = props;

  // Состояния для формы
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [errorForm, setErrorForm] = useState({
    type: '',
    text: '',
  });

  const [loading, setLoading] = useState(false);

  const changeForm = (e, type) => {
    setForm((prev) => ({...prev, [type]: e.target.value}));
  };

  const handleSubmit = () => {
    setLoading(true);
    // Здесь можно добавить валидацию и отправку формы
    setTimeout(() => setLoading(false), 1000);
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
                Пожалуйста, заполните анкету
              </Box>
              <Box
                as='h2'
                fontWeight='bold'
                fontSize='24px'
                color='black'
                mb='16px'
              >
                и менеджер свяжется с вами
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
              Имя
            </Box>
            <InputGroup
              mb='16px'
              width='100%'
            >
              <Field invalid={errorForm.type === 'name'}>
                <Input
                  width='100%'
                  placeholder='Введите имя'
                  value={form.name}
                  onChange={(e) => changeForm(e, 'name')}
                />
              </Field>
            </InputGroup>
            <Box
              fontWeight='500'
              color='gray.700'
              mb='4px'
            >
              Номер телефона
            </Box>
            <InputGroup
              mb='16px'
              width='100%'
            >
              <Field invalid={errorForm.type === 'phone'}>
                <Input
                  width='100%'
                  placeholder='+ 7 XXX XXX XX XX'
                  value={form.phone}
                  onChange={(e) => changeForm(e, 'phone')}
                />
              </Field>
            </InputGroup>
            <Box
              fontWeight='500'
              color='gray.700'
              mb='4px'
            >
              Email
            </Box>
            <InputGroup
              mb='24px'
              width='100%'
            >
              <Field invalid={errorForm.type === 'email'}>
                <Input
                  width='100%'
                  placeholder='Введите email'
                  value={form.email}
                  onChange={(e) => changeForm(e, 'email')}
                />
              </Field>
            </InputGroup>
            <Flex justify='flex-end'>
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

export default SubsModal;

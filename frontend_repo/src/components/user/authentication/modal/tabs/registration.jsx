import {Stack, Input, Flex, HStack} from '@chakra-ui/react';
import {Field} from '../../../../ui/field.jsx';
import {FiMail, FiUser} from 'react-icons/fi';
import {FaRegEyeSlash} from 'react-icons/fa6';
import {FaRegEye} from 'react-icons/fa6';
import {Button} from '../../../../ui/button.jsx';
import {useContext, useState} from 'react';
import {InputGroup} from '../../../../ui/input-group.jsx';
import {RadioGroup, Radio} from '../../../../ui/radio.jsx';
import {GoLock} from 'react-icons/go';
import {Context} from '../../../../../main.jsx';
import * as yup from 'yup';
import styles from './tabs.module.scss';
import {useNavigate} from 'react-router-dom';

const REGISTRATION_SCHEMA = yup.object().shape({
  retryPassword: yup
    .string()
    .required('Введите пароль снова')
    .min(4, 'Длинна поля должна быть больше 4-х символов')
    .max(25, 'Длинна поля должна быть менее 25 символов'),
  password: yup
    .string()
    .required('Введите пароль')
    .min(4, 'Длинна поля должна быть больше 4-х символов')
    .max(25, 'Длинна поля должна быть менее 25 символов'),
  login: yup
    .string()
    .required('Введите логин')
    .min(4, 'Длинна поля должна быть больше 4-х символов')
    .max(25, 'Длинна поля должна быть менее 25 символов'),
  mail: yup
    .string()
    .required('Введите почту')
    .min(4, 'Длинна поля должна быть больше 4-х символов')
    .max(25, 'Длинна поля должна быть менее 25 символов')
    .matches(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim, 'Некорректный формат'),
});

function RegistrationTab(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {store} = useContext(Context);
  const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

  const [loginForm, setLoginForm] = useState({
    mail: '',
    login: '',
    password: '',
    retryPassword: '',
    role: 'user',
  });

  const [errorForm, setErrorForm] = useState({
    type: '',
    text: '',
  });

  const changeLoginForm = (e, type) => {
    if (type === 'password') {
      setLoginForm((prevState) => {
        return {...prevState, password: e.target.value};
      });
    }
    if (type === 'role') {
      setLoginForm((prevState) => {
        return {...prevState, role: e.target.value};
      });
    }
    if (type === 'retryPassword') {
      setLoginForm((prevState) => {
        return {...prevState, retryPassword: e.target.value};
      });
    }
    if (type === 'login') {
      setLoginForm((prevState) => {
        return {...prevState, login: e.target.value};
      });
    }
    if (type === 'mail') {
      setLoginForm((prevState) => {
        return {...prevState, mail: e.target.value};
      });
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    REGISTRATION_SCHEMA.validate(loginForm)
      .then(() => {
        if (loginForm.password !== loginForm.retryPassword) {
          setErrorForm({type: 'bothPass', text: 'Пароли должны совпадать!'});
        } else {
          setErrorForm({type: '', text: ''});
          //mock
          const regObj = {
            email: loginForm.mail,
            username: loginForm.login,
            role: loginForm.role,
            password: loginForm.password,
          };
          store.registration(regObj).then(() => {
            setLoading(false);
            navigate('/admin');
            props.closeHandler();
          });
        }
      })
      .catch((err) => {
        setErrorForm({type: err.path, text: err.message});
      })
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      );
  };

  return (
    <Stack mt={2}>
      <RadioGroup
        defaultValue='user'
        onChange={(e) => changeLoginForm(e, 'role')}
        variant='subtle'
        mb='4'
      >
        <HStack
          color='black'
          gap='2'
        >
          <Radio value='admin'>Админ</Radio>
          <Radio value='coach'>Тренер</Radio>
          <Radio value='user'>Пользователь</Radio>
        </HStack>
      </RadioGroup>
      <InputGroup
        flex={1}
        mb={'16px'}
        startElement={<FiMail />}
      >
        <Field invalid={errorForm.type === 'mail'}>
          <Input
            className={styles.formInput}
            type='mail'
            onChange={(e) => changeLoginForm(e, 'mail')}
            placeholder='Введите почту'
          />
        </Field>
      </InputGroup>
      <InputGroup
        flex={1}
        mb={'16px'}
        startElement={<FiUser />}
      >
        <Field invalid={errorForm.type === 'login'}>
          <Input
            className={styles.formInput}
            type='login'
            onChange={(e) => changeLoginForm(e, 'login')}
            placeholder='Введите логин'
          />
        </Field>
      </InputGroup>
      <InputGroup
        flex={1}
        mb={'16px'}
        startElement={<GoLock />}
        endElement={
          showPassword ? (
            <FaRegEyeSlash
              onClick={handleShowClick}
              cursor='pointer'
            />
          ) : (
            <FaRegEye
              onClick={handleShowClick}
              cursor='pointer'
            />
          )
        }
      >
        <Field invalid={errorForm.type === 'password' || errorForm.type === 'bothPass'}>
          <Input
            className={styles.formInput}
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => changeLoginForm(e, 'password')}
            placeholder='Введите пароль'
          />
        </Field>
      </InputGroup>
      <InputGroup
        flex={1}
        mb={'16px'}
        startElement={<GoLock />}
        endElement={
          showPassword ? (
            <FaRegEyeSlash
              onClick={handleShowClick}
              cursor='pointer'
            />
          ) : (
            <FaRegEye
              onClick={handleShowClick}
              cursor='pointer'
            />
          )
        }
      >
        <Field invalid={errorForm.type === 'retryPassword' || errorForm.type === 'bothPass'}>
          <Input
            className={styles.formInput}
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => changeLoginForm(e, 'retryPassword')}
            placeholder='Введите пароль еще раз'
          />
        </Field>
      </InputGroup>
      <Flex
        justify='space-between'
        alignItems='center'
      >
        <Field
          className={styles.errorField}
          invalid={Boolean(errorForm.text)}
          align='center'
          errorText={errorForm.text}
        />
        <Button
          type='submit'
          bgcolor='purple'
          backgroundColor='#805AD5'
          flexSelf={'end'}
          loading={loading}
          onClick={handleSubmit}
        >
          Зарегистрироваться
        </Button>
      </Flex>
    </Stack>
  );
}

export default RegistrationTab;

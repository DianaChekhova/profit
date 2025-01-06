import {Stack, Input, Flex} from '@chakra-ui/react';
import {FiUser} from 'react-icons/fi';
import {FaRegEyeSlash} from 'react-icons/fa6';
import {FaRegEye} from 'react-icons/fa6';
import {Button} from '../../../../ui/button.jsx';
import {useContext, useState} from 'react';
import {InputGroup} from '../../../../ui/input-group.jsx';
import {GoLock} from 'react-icons/go';
import {Context} from '../../../../../main.jsx';
import {Field} from '../../../../ui/field.jsx';
import styles from './tabs.module.scss';

function LoginTab() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [loginForm, setLoginForm] = useState({
    login: '',
    password: '',
  });

  const {store} = useContext(Context);

  const changeLoginForm = (e, type) => {
    if (type === 'password') {
      setLoginForm((prevState) => {
        return {...prevState, password: e.target.value};
      });
    }
    if (type === 'login') {
      setLoginForm((prevState) => {
        return {...prevState, login: e.target.value};
      });
    }
  };

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = () => {
    setLoading(true);
    store.login(loginForm.login, loginForm.password).then(() => setLoading(false));
  };

  return (
    <Stack mt={2}>
      <InputGroup
        flex={1}
        mb={'16px'}
        startElement={<FiUser />}
      >
        <Field>
          <Input
            className={styles.formInput}
            type='login'
            placeholder='Введите логин'
            onChange={(e) => changeLoginForm(e, 'login')}
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
        <Field>
          <Input
            className={styles.formInput}
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => changeLoginForm(e, 'password')}
            placeholder='Введите пароль'
          />
        </Field>
      </InputGroup>
      <Flex
        justify='flex-end'
        alignItems='center'
      >
        <Field
          invalid
          align='center'
          errorText={'Пароли должны повторятся!'}
        />
        <Button
          type='submit'
          width='80px'
          bgcolor='purple'
          backgroundColor='#805AD5'
          loading={loading}
          flexSelf={'end'}
          onClick={handleSubmit}
        >
          Войти
        </Button>
      </Flex>
    </Stack>
  );
}

export default LoginTab;

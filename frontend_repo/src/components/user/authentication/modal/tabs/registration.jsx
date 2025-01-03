import {Stack, Input, Flex} from '@chakra-ui/react';
import {FiUser} from 'react-icons/fi';
import {FaRegEyeSlash} from 'react-icons/fa6';
import {FaRegEye} from 'react-icons/fa6';
import {Button} from '../../../../ui/button.jsx';
import {useContext, useState} from 'react';
import {InputGroup} from '../../../../ui/input-group.jsx';
import {GoLock} from 'react-icons/go';
import {Context} from '../../../../../main.jsx';

function RegistrationTab(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {store} = useContext(Context);

  const handleShowClick = () => setShowPassword(!showPassword);

  const [loginForm, setLoginForm] = useState({
    login: '',
    password: '',
    retryPassword: '',
  });

  const changeLoginForm = (e, type) => {
    if (type === 'password') {
      setLoginForm((prevState) => {
        return {...prevState, password: e.target.value};
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
  };

  const handleSubmit = () => {
    if (loginForm.password === loginForm.retryPassword) {
      setLoading(true);
      store.registration(loginForm.login, loginForm.password).then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  };

  return (
    <Stack>
      <InputGroup
        flex={1}
        mb={'16px'}
        startElement={<FiUser />}
      >
        <Input
          type='login'
          onChange={(e) => changeLoginForm(e, 'login')}
          placeholder='Введите логин'
        />
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
        <Input
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => changeLoginForm(e, 'password')}
          placeholder='Введите пароль'
        />
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
        <Input
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => changeLoginForm(e, 'retryPassword')}
          placeholder='Введите пароль еще раз'
        />
      </InputGroup>
      <Flex justify='flex-end'>
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

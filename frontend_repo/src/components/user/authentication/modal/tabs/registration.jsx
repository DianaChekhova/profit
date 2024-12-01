import {Stack, Input, Flex} from '@chakra-ui/react';
import {FiUser} from 'react-icons/fi';
import {FaRegEyeSlash} from 'react-icons/fa6';
import {FaRegEye} from 'react-icons/fa6';
import {Button} from '../../../../ui/button.jsx';
import {useState} from 'react';
import {InputGroup} from '../../../../ui/input-group.jsx';
import {GoLock} from 'react-icons/go';

function RegistrationTab(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Stack>
      <InputGroup
        flex={1}
        mb={'16px'}
        startElement={<FiUser />}
      >
        <Input
          type='login'
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
          placeholder='Введите пароль еще раз'
        />
      </InputGroup>
      <Flex justify='flex-end'>
        <Button
          type='submit'
          bgcolor='purple'
          backgroundColor='#805AD5'
          flexSelf={'end'}
        >
          Зарегистрироваться
        </Button>
      </Flex>
    </Stack>
  );
}

export default RegistrationTab;

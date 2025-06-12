import {Box, Flex, Portal, Stack} from '@chakra-ui/react';
import styles from './modal.module.scss';
import {Button} from '../../../../../components/ui/button.jsx';
import {useState} from 'react';
import {observer} from 'mobx-react-lite';

const FreezeModal = ({closeModalHandler, freezeHandler}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    console.log('s');
    setLoading(true);
    await freezeHandler();
    setLoading(false);
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
          <Box
            as='h2'
            fontWeight='700'
            fontSize='18px'
            color='black'
            mb='16px'
          >
            Заморозка абонемента
          </Box>
          <Box
            as='h2'
            fontWeight='400'
            fontSize='16px'
            color='black'
            mb='4px'
          >
            Вы уверены, что хотите заморозить абонемент?
          </Box>
          <Flex
            justifyContent='flex-end'
            mt='16px'
          >
            <Button
              type='submit'
              width='94px'
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
              height='40px'
              width='129px'
              borderRadius='8px'
              bgcolor='purple'
              ml='12px'
              backgroundColor='#805AD5'
              loading={loading}
              onClick={handleSubmit}
            >
              Заморозить
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Portal>
  );
};

export default observer(FreezeModal);

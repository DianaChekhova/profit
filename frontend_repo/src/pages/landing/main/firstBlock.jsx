import {Box, Container, Heading, HStack, Image, Text, VStack} from '@chakra-ui/react';
import {Button} from '../../../components/ui/button.jsx';
import first from './dependency/first.png';
import React from 'react';
import {useNavigate} from 'react-router-dom';

function FirstBlock() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/subscriptions');
  };

  return (
    <HStack
      spacing={24}
      align='stretch'
      alignItems='center'
      width='1400px'
      maxW='1400px'
    >
      <Container width='630px'>
        <VStack
          spacing={6}
          align='start'
          color='black'
          width='630px'
        >
          <Heading
            as='h1'
            style={{fontSize: '64px'}}
            fontWeight='bold'
            mb='24px'
          >
            Откройте <br /> новый уровень фитнеса с <span style={{color: '#805AD5'}}>ProFIT</span>
          </Heading>
          <Text
            color={'black'}
            style={{fontSize: '18px'}}
            maxW='2xl'
            fontWeight='400'
            mb='24px'
          >
            Современные пространства, персональный подход <br /> и атмосфера, которая мотивирует каждый день.
          </Text>
          <Button
            size='lg'
            bgcolor='purple'
            backgroundColor='#805AD5'
            color={'white'}
            variant='outline'
            w='187px'
            height='48px'
            mt='auto'
            onClick={handleButtonClick}
          >
            Выбрать тариф
          </Button>
        </VStack>
      </Container>
      {/* Правая часть: Картинка */}
      <Box
        width='600px'
        height='630px'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Image
          src={first}
          alt='Карта'
          borderRadius='20px'
          boxShadow='md'
          width='630px'
          height='630px'
          objectFit='cover'
          objectPosition='top'
        />
      </Box>
    </HStack>
  );
}

export default FirstBlock;

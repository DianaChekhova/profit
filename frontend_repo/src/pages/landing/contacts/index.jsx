import {Box, Text, Heading, Image, VStack, HStack} from '@chakra-ui/react';
import mapImg from './dependency/map.png';
import AuthModal from '../../../components/user/authentication/modal/index.jsx';
import TrainingSubscriptionModal from '../../../components/trainingSubModal/index.jsx';
import React from 'react';

function Contacts() {
  return (
    <Box
      maxW='1400px'
      minW='70%'
      minH='700px'
      mx='auto'
      px={4}
      py={8}
    >
      <Heading
        as='h1'
        color='black'
        size='2xl'
        mb={8}
        fontSize='3rem'
      >
        Контакты
      </Heading>
      <HStack
        spacing={24}
        align='stretch'
        width='100%'
        maxW='1400px'
      >
        <VStack
          align='flex-start'
          spacing={16}
          width='600px'
          height='400px'
          justify='space-between'
        >
          <Box>
            <Text
              color='gray.500'
              fontWeight='bold'
              fontSize='xl'
            >
              Адрес
            </Text>
            <Text
              color='black'
              fontSize='2xl'
            >
              г. Рязань ул. Пирогова д.8
            </Text>
          </Box>
          <Box>
            <Text
              color='gray.500'
              fontWeight='bold'
              fontSize='xl'
            >
              Время работы
            </Text>
            <Text
              color='black'
              fontSize='2xl'
            >
              Пн-Пт 6:00 - 23:00
            </Text>
            <Text
              color='black'
              fontSize='2xl'
            >
              Сб-Вс 8:00 - 21:00
            </Text>
          </Box>
          <Box>
            <Text
              color='gray.500'
              fontWeight='bold'
              fontSize='xl'
            >
              Телефоны
            </Text>
            <Text
              color='black'
              fontSize='2xl'
            >
              8 800 562-40-90, 7 491 243-43-88
            </Text>
          </Box>
          <Box>
            <Text
              color='gray.500'
              fontWeight='bold'
              fontSize='xl'
            >
              Email
            </Text>
            <Text
              color='black'
              fontSize='2xl'
            >
              profit@sport.ru
            </Text>
          </Box>
        </VStack>
        {/* Правая часть: Картинка */}
        <Box
          width='600px'
          height='400px'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Image
            src={mapImg}
            alt='Карта'
            borderRadius='20px'
            boxShadow='md'
            width='600px'
            height='400px'
            objectFit='cover'
          />
        </Box>
      </HStack>
    </Box>
  );
}

export default Contacts;

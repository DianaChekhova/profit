import {Box, Container, Heading, HStack, Image, Text, VStack} from '@chakra-ui/react';
import React from 'react';
import second from './dependency/second.png';

function CardioZone() {
  return (
    <HStack
      align='stretch'
      alignItems='center'
      maxW='1400px'
      minH='480px'
      minW='1281px'
      mt='160px'
    >
      <Box
        flex='1'
        minH='440px'
        width='630px'
        borderRadius='20px'
        overflow='hidden'
        boxShadow='md'
      >
        <Image
          src={second} // Замените на актуальный путь к изображению
          alt='Кардиозона с тренажёрами'
          width='100%'
          height='100%'
          objectFit='fill'
        />
      </Box>
      <Container maxW='627px'>
        <VStack
          spacing={6}
          width='627px'
          align='start'
          color='black'
        >
          <Heading
            as='h2'
            fontSize='48px'
            fontWeight='bold'
            color='#805AD5'
            lineHeight='1.2'
          >
            Кардиозона
          </Heading>
          <Text
            fontSize='18px'
            fontWeight='400'
            lineHeight='1.6'
          >
            Просторное помещение с профессиональными беговыми дорожками, эллипсами и велотренажёрами.
          </Text>
          <Text
            fontSize='18px'
            fontWeight='400'
            lineHeight='1.6'
          >
            Следите за пульсом на встроённых датчиках, выбирайте готовые маршруты или создавайте собственные.
          </Text>
          <Text
            fontSize='18px'
            fontWeight='400'
            lineHeight='1.6'
            mb={4}
          >
            Сжигайте калории, развивайте выносливость, заряжайтесь энергией!
          </Text>
        </VStack>
      </Container>
    </HStack>
  );
}

export default CardioZone;

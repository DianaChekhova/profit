import {Box, Container, Heading, HStack, Image, Text, VStack} from '@chakra-ui/react';
import React from 'react';
import four from './dependency/four.png';

function Bassein() {
  return (
    <HStack
      align='stretch'
      alignItems='center'
      maxW='1400px'
      minH='480px'
      minW='1281px'
      mt='160px'
    >
      <Container maxW='600px'>
        <VStack
          spacing={6}
          width='627px'
          height='246px'
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
            Бассейн
          </Heading>
          <Text
            fontSize='18px'
            fontWeight='400'
            lineHeight='1.6'
          >
            25‑метровый бассейн с комфортной температурой 27 °C и многоуровневой системой очистки без резкого запаха
            хлора.
          </Text>
          <br />
          <Text
            fontSize='18px'
            fontWeight='400'
            lineHeight='1.6'
          >
            Дорожки для свободного плавания, аквааэробика и индивидуальные занятия по технике. Идеальное восстановление
            после силовой тренировки.
          </Text>
        </VStack>
      </Container>
      <Box
        flex='1'
        maxH='480px'
        maxW='630px'
        borderRadius='20px'
        overflow='hidden'
        boxShadow='md'
      >
        <Image
          src={four} // Замените на актуальный путь к изображению
          alt='Кардиозона с тренажёрами'
          width='100%'
          height='100%'
          objectFit='contain'
        />
      </Box>
    </HStack>
  );
}

export default Bassein;

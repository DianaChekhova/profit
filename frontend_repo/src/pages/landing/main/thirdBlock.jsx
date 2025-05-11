import {Box, Container, Heading, HStack, Image, Text, VStack} from '@chakra-ui/react';
import React from 'react';
import third from './dependency/third.png';

function SilaZone() {
  return (
    <HStack
      align='stretch'
      alignItems='center'
      maxW='1400px'
      minH='480px'
      minW='1281px'
      mt='160px'
    >
      <Container maxW='627px'>
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
            Зона силовых тренеровок
          </Heading>
          <Text
            fontSize='18px'
            fontWeight='400'
            lineHeight='1.6'
          >
            Свободные веса до 60 кг, блочные тренажёры, мощные рамы для приседаний и тяжёлых тяг.
          </Text>
          <Text
            fontSize='18px'
            fontWeight='400'
            lineHeight='1.6'
          >
            Хотите набрать мышечную массу, укрепить спину или стать сильнее? Наши тренеры помогут составить эффективную
            программу и научат правильной технике выполнения упражнений.
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
          src={third} // Замените на актуальный путь к изображению
          alt='Кардиозона с тренажёрами'
          width='100%'
          height='100%'
          objectFit='contain'
        />
      </Box>
    </HStack>
  );
}

export default SilaZone;

import {Box, Button, Image, Grid, Text, VStack, Flex, HStack, Badge} from '@chakra-ui/react';
import React from 'react';
import core from '../group/dependency/core.png';
import abs from '../group/dependency/abs.png';
import upper from '../group/dependency/upper-body.png';
import sculpt from '../group/dependency/sculpt.png';
import {useNavigate} from 'react-router-dom';

const groupClasses = [
  {
    title: 'Core',
    desc: 'Комплекс тренировок с акцентом на мышцы пресса, спины и корпуса. Отлично подходит для укрепления мышечного корсета.',
    img: core,
    tags: ['Силовые тренировки'],
  },
  {
    title: 'ABS',
    desc: 'Развитие мышц пресса и повышение выносливости. Подходит для всех уровней подготовки.',
    img: abs,
    tags: ['Силовые тренировки'],
  },
  {
    title: 'Upper body',
    desc: 'Акцент на верхнюю часть тела: руки, плечи, грудь, спина. Для красивого и сильного верха.',
    img: upper,
    tags: ['Кардио тренировки'],
  },
  {
    title: 'Скульптурирующие',
    desc: 'Тренировка для формирования рельефа и тонуса мышц. Подходит для девушек.',
    img: sculpt,
    tags: ['Кардио тренировки', 'Силовые тренировки'],
  },
];

function TrainingsBlock() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/groups');
  };

  return (
    <VStack
      spacing={8}
      maxW='1400px'
      minW='1281px'
      mt='160px'
      align='center'
      alignItems='center'
    >
      <Text
        fontSize='2xl'
        fontWeight='bold'
        mb={6}
        color='#805AD5'
        w='100%'
        textAlign='left'
      >
        Групповые программы
      </Text>
      <Text
        fontWeight='400'
        mb={6}
        color='black'
        w='100%'
        textAlign='left'
      >
        Тренируйтесь в команде единомышленников! Энергичная музыка, приятная атмосфера и внимательные инструкторы —
        выберите формат по душе.
      </Text>

      <Grid
        templateColumns={{base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)'}}
        gap={6}
        w='100%'
      >
        {groupClasses.map((item, idx) => (
          <Box
            key={idx}
            bg='white'
            borderRadius='lg'
            boxShadow='sm'
            overflow='hidden'
            h='100%'
          >
            <Box
              h='300px'
              w='100%'
              bg='gray.200' // Запасной вариант, если изображение не загрузится
            >
              <Image
                src={item.img}
                alt={item.title}
                w='100%'
                h='100%'
                objectFit='cover'
              />
            </Box>
            <Box p={4}>
              <Text
                fontWeight='bold'
                color='black'
                mb={2}
              >
                {item.title}
              </Text>
              <HStack
                spacing={2}
                mb={3}
              >
                {item.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    colorPalette={
                      tag === 'Кардио тренировки'
                        ? 'blue'
                        : tag === 'Силовые тренировки'
                          ? 'orange'
                          : tag === 'Гибкость'
                            ? 'teal'
                            : ''
                    }
                    fontSize='0.8em'
                  >
                    {tag}
                  </Badge>
                ))}
              </HStack>
            </Box>
          </Box>
        ))}
      </Grid>
      <Button
        bg='#805AD5'
        color='white'
        _hover={{bg: '#6B46C1'}}
        mt={4}
        width='274px'
        onClick={handleButtonClick}
        height='48px'
      >
        Смотреть все тренировки
      </Button>
    </VStack>
  );
}

export default TrainingsBlock;

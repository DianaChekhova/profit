import {Box, Button, Image, Grid, Text, VStack} from '@chakra-ui/react';
import React from 'react';
import Archipova from '../coaches/dependency/Archipova.png';
import Novikov from '../coaches/dependency/Novikov.png';
import Petrenko from '../coaches/dependency/Petrenko.png';
import Sokolov from '../coaches/dependency/Sokolov.png';
import {useNavigate} from 'react-router-dom';

const coaches = [
  {
    name: 'Архипова Наталья',
    desc: 'Тренер групповых программ в сфере йога и пилатес',
    img: Archipova,
  },
  {
    name: 'Новиков Антон',
    desc: 'Тренер групповых программ в сфере функционального тренинга',
    img: Novikov,
  },
  {
    name: 'Петренко Елена',
    desc: 'Тренер групповых программ в сфере стрейчинг и йога',
    img: Petrenko,
  },
  {
    name: 'Соков Михаил',
    desc: 'Персональный фитнес тренер',
    img: Sokolov,
  },
];

function TrainersBlock() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/coaches');
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
        w='100%'
        color='#805AD5'
        textAlign='left'
      >
        Наши тренера
      </Text>

      <Grid
        templateColumns={{base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)'}}
        gap={6}
        w='100%'
      >
        {coaches.map((coach, idx) => (
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
                src={coach.img}
                alt={coach.name}
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
                {coach.name}
              </Text>
              <Text
                fontSize='sm'
                color='gray.600'
              >
                {coach.desc}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>
      <Button
        bg='#805AD5'
        color='white'
        _hover={{bg: '#6B46C1'}}
        mt={4}
        onClick={() => handleButtonClick()}
        width='274px'
        height='48px'
      >
        Смотреть всех тренеров
      </Button>
    </VStack>
  );
}

export default TrainersBlock;

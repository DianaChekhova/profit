import React, {useCallback, useContext, useState} from 'react';
import {Box, Grid, Image, Text, Button, Heading} from '@chakra-ui/react';
import Bahmarov from './dependency/Bahmarov.png';
import Archipova from './dependency/Archipova.png';
import Bevzenko from './dependency/Bevzenko.png';
import Gavrushin from './dependency/Gavrushin.png';
import Zodechenko from './dependency/Zodechenko.png';
import Novikov from './dependency/Novikov.png';
import Petrenko from './dependency/Petrenko.png';
import Zamyatina from './dependency/Zamyatina.png';
import Sokolov from './dependency/Sokolov.png';
import Solovev from './dependency/Solovev.png';
import Stepina from './dependency/Stepina.png';
import Nesterova from './dependency/Nesterova.png';
import Semina from './dependency/Semina.png';
import Tarasova from './dependency/Tarasova.png';
import AuthModal from '../../../components/user/authentication/modal/index.jsx';
import TrainingSubscriptionModal from '../../../components/trainingSubModal/index.jsx';
import {Context} from '../../../main.jsx';

const coaches = [
  {
    name: 'Аржанова Наталья',
    desc: 'Тренер групповых программ и персональный фитнес-тренер в сфере женского фитнеса',
    img: Archipova,
  },
  {
    name: 'Новиков Антон',
    desc: 'Тренер групповых программ и персональный фитнес-тренер в сфере мужского фитнеса',
    img: Novikov,
  },
  {
    name: 'Петренко Елена',
    desc: 'Тренер групповых программ и персональный фитнес-тренер',
    img: Petrenko,
  },
  {
    name: 'Соколов Михаил',
    desc: 'Персональный фитнес-тренер',
    img: Sokolov,
  },
  {
    name: 'Соловьёв Николай',
    desc: 'Персональный фитнес-тренер',
    img: Solovev,
  },
  {
    name: 'Безвенко Инна',
    desc: 'Тренер групповых программ и сферы женского фитнеса и йоги',
    img: Bevzenko,
  },
  {
    name: 'Гаврюшин Стас',
    desc: 'Тренер групповых программ и сферы мужского фитнеса и бокса',
    img: Gavrushin,
  },
  {
    name: 'Замятина Евгения',
    desc: 'Тренер групповых программ и сферы йоги и баланса',
    img: Zamyatina,
  },
  {
    name: 'Степина Наталья',
    desc: 'Персональный фитнес-тренер',
    img: Stepina,
  },
  {
    name: 'Зодченко Константин',
    desc: 'Тренер групповых программ',
    img: Zodechenko,
  },
  {
    name: 'Нестерова Ольга',
    desc: 'Тренер групповых программ',
    img: Nesterova,
  },
  {
    name: 'Семина Анна',
    desc: 'Тренер групповых программ',
    img: Semina,
  },
  {
    name: 'Бахмаров Артем',
    desc: 'Тренер групповых программ и персональный фитнес-тренер',
    img: Bahmarov,
  },
  {
    name: 'Тарасова Екатерина',
    desc: 'Тренер групповых программ и персональный фитнес-тренер',
    img: Tarasova,
  },
];

export default function GroupTraining() {
  const [isOpen, setIsOpen] = useState(false);

  const {store} = useContext(Context);
  const isAuthenticated = store.getAuthenticated();

  const subscribeHandler = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModalHandler = useCallback(() => {
    setIsOpen(false);
  }, []);

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
        as='h2'
        size='lg'
        mb={6}
        color={'black'}
        fontWeight={700}
      >
        Тренеры
      </Heading>
      <Grid
        templateColumns={{base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)'}}
        gap={6}
        alignItems='stretch'
      >
        {coaches.map((coach, idx) => (
          <Box
            key={idx}
            bg='white'
            borderRadius='lg'
            boxShadow='sm'
            p={0}
            display='flex'
            flexDirection='column'
            alignItems='stretch'
            height='470px'
            overflow='hidden'
          >
            <Image
              src={coach.img}
              alt={coach.name}
              w='100%'
              h='300px'
              objectFit='cover'
              borderTopRadius='lg'
              borderBottomRadius={0}
            />
            <Box
              flex={1}
              display='flex'
              flexDirection='column'
              justifyContent='flex-start'
              p={4}
            >
              <Text
                fontWeight={600}
                color='black'
                fontSize='lg'
                mb={1}
                textAlign='left'
              >
                {coach.name}
              </Text>
              <Text
                fontSize='sm'
                color='gray.600'
                mb={4}
                textAlign='left'
              >
                {coach.desc}
              </Text>
              <Button
                bgcolor='purple'
                backgroundColor='#805AD5'
                color={'white'}
                variant='outline'
                w='100%'
                onClick={subscribeHandler}
                mt='auto'
              >
                Записаться на тренировку
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
      {isOpen && !isAuthenticated && <AuthModal closeModalHandler={closeModalHandler} />}
      {isOpen && isAuthenticated && (
        <TrainingSubscriptionModal
          individual
          closeModalHandler={closeModalHandler}
        />
      )}
    </Box>
  );
}

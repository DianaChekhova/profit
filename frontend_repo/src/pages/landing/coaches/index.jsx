import React from 'react';
import {Box, Grid, Image, Text, Button, Heading} from '@chakra-ui/react';

const coaches = [
  {
    name: 'Аржанова Наталья',
    desc: 'Тренер групповых программ и персональный фитнес-тренер в сфере женского фитнеса',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Новиков Антон',
    desc: 'Тренер групповых программ и персональный фитнес-тренер в сфере мужского фитнеса',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Петрова Елена',
    desc: 'Тренер групповых программ и персональный фитнес-тренер',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Соколов Михаил',
    desc: 'Персональный фитнес-тренер',
    img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Соловьёв Николай',
    desc: 'Персональный фитнес-тренер',
    img: 'https://images.unsplash.com/photo-1519340333755-c6e2a6a10410?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Безвенко Инна',
    desc: 'Тренер групповых программ и сферы женского фитнеса и йоги',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Гаврилюк Стас',
    desc: 'Тренер групповых программ и сферы мужского фитнеса и бокса',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Занятиева Евгения',
    desc: 'Тренер групповых программ и сферы йоги и баланса',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Степина Наталья',
    desc: 'Персональный фитнес-тренер',
    img: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Зодченко Константин',
    desc: 'Тренер групповых программ',
    img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Нестерова Ольга',
    desc: 'Тренер групповых программ',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Семина Анна',
    desc: 'Тренер групповых программ',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Бахмаров Артем',
    desc: 'Тренер групповых программ и персональный фитнес-тренер',
    img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Тарасова Екатерина',
    desc: 'Тренер групповых программ и персональный фитнес-тренер',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  },
];

export default function GroupTraining() {
  return (
    <Box
      maxW='1400px'
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
            height='370px'
            overflow='hidden'
          >
            <Image
              src={coach.img}
              alt={coach.name}
              w='100%'
              h='180px'
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
                mt='auto'
              >
                Записаться на тренировку
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

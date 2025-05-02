import React from 'react';
import {Box, Grid, Image, Text, Badge, Button, Heading, HStack, Flex} from '@chakra-ui/react';

const groupClasses = [
  {
    title: 'Core',
    desc: 'Комплекс тренировок с акцентом на мышцы пресса, спины и корпуса. Отлично подходит для укрепления мышечного корсета.',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80',
    tags: ['Функциональная', 'Утро'],
  },
  {
    title: 'ABS',
    desc: 'Развитие мышц пресса и повышение выносливости. Подходит для всех уровней подготовки.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    tags: ['Силовая', 'Утро'],
  },
  {
    title: 'Upper body',
    desc: 'Акцент на верхнюю часть тела: руки, плечи, грудь, спина. Для красивого и сильного верха.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    tags: ['Силовая'],
  },
  {
    title: 'Скульптурирующие',
    desc: 'Тренировка для формирования рельефа и тонуса мышц. Подходит для девушек.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    tags: ['Функциональная', 'Утро'],
  },
  {
    title: 'Pump',
    desc: 'Тренировка с акцентом на работу с весами для увеличения мышечной массы и силы.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    tags: ['Силовая'],
  },
  {
    title: 'Стретчинг',
    desc: 'Растяжка, развитие гибкости и подвижности суставов. Для всех уровней.',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    tags: ['Растяжка'],
  },
  {
    title: 'ABS + стретчинг',
    desc: 'Сочетание тренировки пресса и растяжки. Идеально для баланса силы и гибкости.',
    img: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80',
    tags: ['Силовая', 'Растяжка'],
  },
  {
    title: 'Баланс',
    desc: 'Тренировка для развития координации, баланса и стабилизации.',
    img: 'https://images.unsplash.com/photo-1519340333755-c6e2a6a10410?auto=format&fit=crop&w=400&q=80',
    tags: ['Функциональная'],
  },
  {
    title: 'Йога',
    desc: 'Гармония тела и разума, дыхательные практики, асаны и релаксация.',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    tags: ['Растяжка'],
  },
  {
    title: 'Функциональные',
    desc: 'Комплексная тренировка всего тела для развития силы, выносливости и координации.',
    img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    tags: ['Функциональная'],
  },
  {
    title: 'Зумба',
    desc: 'Танцевальная фитнес-программа с элементами латиноамериканских танцев.',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
    tags: ['Танцевальная'],
  },
  {
    title: 'Аэробика',
    desc: 'Классическая аэробика для сжигания калорий и улучшения выносливости.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    tags: ['Кардио'],
  },
  {
    title: 'Бокс',
    desc: 'Силовая и кардио нагрузка через бокс. Для мужчин и женщин.',
    img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
    tags: ['Силовая', 'Кардио'],
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
        color='black'
        fontWeight={700}
      >
        Групповые занятия
      </Heading>
      <Grid
        templateColumns={{base: '1fr', md: '1fr 1fr'}}
        gap={5}
      >
        {groupClasses.map((item, idx) => (
          <Flex
            key={idx}
            bg='white'
            borderRadius='lg'
            boxShadow='sm'
            p={0}
            minH='300px'
            overflow='hidden'
            align='stretch'
          >
            <Image
              src={item.img}
              alt={item.title}
              w='300px'
              h='300px'
              objectFit='cover'
              borderRadius='0'
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
                fontSize='lg'
                color='black'
                mb={1}
                textAlign='left'
              >
                {item.title}
              </Text>
              <Text
                fontSize='sm'
                color='gray.600'
                mb={2}
                textAlign='left'
              >
                {item.desc}
              </Text>
              <HStack
                spacing={2}
                mb={3}
              >
                {item.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    colorPalette={
                      tag === 'Утро'
                        ? 'orange'
                        : tag === 'Кардио'
                          ? 'blue'
                          : tag === 'Силовая'
                            ? 'purple'
                            : tag === 'Растяжка'
                              ? 'teal'
                              : tag === 'Функциональная'
                                ? 'green'
                                : tag === 'Танцевальная'
                                  ? 'pink'
                                  : 'gray'
                    }
                    fontSize='0.8em'
                  >
                    {tag}
                  </Badge>
                ))}
              </HStack>
              <Button
                colorPalette='purple'
                w='100px'
                mt='auto'
              >
                Записаться
              </Button>
            </Box>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
}

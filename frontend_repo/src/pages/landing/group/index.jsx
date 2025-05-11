import React, {useCallback, useContext, useState} from 'react';
import {Box, Grid, Image, Text, Badge, Button, Heading, HStack, Flex} from '@chakra-ui/react';
import absStrech from './dependency/abs-stretch.png';
import abs from './dependency/abs.png';
import aerobics from './dependency/aerobics.png';
import core from './dependency/core.png';
import balance from './dependency/balance.png';
import boxing from './dependency/boxing.png';
import zumba from './dependency/zumba.png';
import yoga from './dependency/yoga.png';
import sculpt from './dependency/sculpt.png';
import upper from './dependency/upper-body.png';
import pump from './dependency/pump.png';
import strech from './dependency/stretching.png';
import functional from './dependency/functional.png';
import AuthModal from '../../../components/user/authentication/modal/index.jsx';
import TrainingSubscriptionModal from '../../../components/trainingSubModal/index.jsx';
import {Context} from '../../../main.jsx';

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
  {
    title: 'Pump',
    desc: 'Тренировка с акцентом на работу с весами для увеличения мышечной массы и силы.',
    img: pump,
    tags: ['Силовые тренировки'],
  },
  {
    title: 'Стретчинг',
    desc: 'Растяжка, развитие гибкости и подвижности суставов. Для всех уровней.',
    img: strech,
    tags: ['Гибкость'],
  },
  {
    title: 'ABS + стретчинг',
    desc: 'Сочетание тренировки пресса и растяжки. Идеально для баланса силы и гибкости.',
    img: absStrech,
    tags: ['Силовые тренировки', 'Гибкость'],
  },
  {
    title: 'Баланс',
    desc: 'Тренировка для развития координации, баланса и стабилизации.',
    img: balance,
    tags: ['Силовые тренировки', 'Гибкость'],
  },
  {
    title: 'Йога',
    desc: 'Гармония тела и разума, дыхательные практики, асаны и релаксация.',
    img: yoga,
    tags: ['Гибкость'],
  },
  {
    title: 'Функциональные',
    desc: 'Комплексная тренировка всего тела для развития силы, выносливости и координации.',
    img: functional,
    tags: ['Силовые тренировки'],
  },
  {
    title: 'Зумба',
    desc: 'Танцевальная фитнес-программа с элементами латиноамериканских танцев.',
    img: zumba,
    tags: ['Кардио тренировки'],
  },
  {
    title: 'Аэробика',
    desc: 'Классическая аэробика для сжигания калорий и улучшения выносливости.',
    img: aerobics,
    tags: ['Кардио тренировки'],
  },
  {
    title: 'Бокс',
    desc: 'Силовая и кардио нагрузка через бокс. Для мужчин и женщин.',
    img: boxing,
    tags: ['Кардио тренировки', 'Силовые тренировки'],
  },
];

export default function GroupTraining() {
  const [isOpen, setIsOpen] = useState(false);

  const {store} = useContext(Context);
  const isAuthenticated = store.getAuthenticated();

  const subscribeHandler = useCallback(() => {
    setIsOpen(true);
  });
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
              <Button
                colorPalette='purple'
                onClick={subscribeHandler}
                w='100px'
                mt='auto'
              >
                Записаться
              </Button>
            </Box>
          </Flex>
        ))}
      </Grid>
      {isOpen && !isAuthenticated && <AuthModal closeModalHandler={closeModalHandler} />}
      {isOpen && isAuthenticated && <TrainingSubscriptionModal closeModalHandler={closeModalHandler} />}
    </Box>
  );
}

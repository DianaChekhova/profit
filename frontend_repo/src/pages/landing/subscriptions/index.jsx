import {Box, Grid, Text, Badge, Button, Heading, HStack} from '@chakra-ui/react';
import {useContext, useState} from 'react';
import SubsModal from './modal';
import {green} from '@ant-design/colors';
import {Context} from '../../../main.jsx';

const subscriptions = [
  // 12 месяцев
  {
    duration: '12 месяцев',
    type: 'Безлимит',
    morning: false,
    pool: true,
    price: '36 990₽',
    oldPrice: '42 990₽',
    allIncluded: true,
  },
  {
    duration: '12 месяцев',
    type: 'Безлимит',
    morning: false,
    pool: false,
    price: '31 990₽',
    oldPrice: '38 990₽',
    allIncluded: true,
  },
  {
    duration: '12 месяцев',
    type: 'Утренний',
    morning: true,
    pool: true,
    price: '24 990₽',
    oldPrice: '26 990₽',
    allIncluded: true,
  },
  {
    duration: '12 месяцев',
    type: 'Утренний',
    morning: true,
    pool: false,
    price: '21 990₽',
    oldPrice: '23 990₽',
    allIncluded: true,
  },
  // 6 месяцев
  {
    duration: '6 месяцев',
    type: 'Безлимит',
    morning: false,
    pool: true,
    price: '24 990₽',
    oldPrice: '27 990₽',
    allIncluded: true,
  },
  {
    duration: '6 месяцев',
    type: 'Безлимит',
    morning: false,
    pool: false,
    price: '19 990₽',
    oldPrice: '24 990₽',
    allIncluded: true,
  },
  {
    duration: '6 месяцев',
    type: 'Утренний',
    morning: true,
    pool: true,
    price: '15 990₽',
    oldPrice: '19 990₽',
    allIncluded: true,
  },
  {
    duration: '6 месяцев',
    type: 'Утренний',
    morning: true,
    pool: false,
    price: '11 990₽',
    oldPrice: '15 990₽',
    allIncluded: true,
  },
  // 3 месяца
  {
    duration: '3 месяца',
    type: 'Безлимит',
    morning: false,
    pool: true,
    price: '17 990₽',
    oldPrice: '21 990₽',
    allIncluded: true,
  },
  {
    duration: '3 месяца',
    type: 'Безлимит',
    morning: false,
    pool: false,
    price: '13 990₽',
    oldPrice: '17 990₽',
    allIncluded: true,
  },
  {
    duration: '3 месяца',
    type: 'Утренний',
    morning: true,
    pool: true,
    price: '9 990₽',
    oldPrice: '13 990₽',
    allIncluded: true,
  },
  {
    duration: '3 месяца',
    type: 'Утренний',
    morning: true,
    pool: false,
    price: '7 990₽',
    oldPrice: '10 990₽',
    allIncluded: true,
  },
  // 1 месяц
  {
    duration: '1 месяц',
    type: 'Безлимит',
    morning: false,
    pool: true,
    price: '6 990₽',
    oldPrice: '9 990₽',
    allIncluded: true,
  },
  {
    duration: '1 месяц',
    type: 'Безлимит',
    morning: false,
    pool: false,
    price: '4 990',
    oldPrice: '7 990₽',
    allIncluded: true,
  },
  {
    duration: '1 месяц',
    type: 'Утренний',
    morning: true,
    pool: true,
    price: '2 990₽',
    oldPrice: '4 990₽',
    allIncluded: true,
  },
  {
    duration: '1 месяц',
    type: 'Утренний',
    morning: true,
    pool: false,
    price: '990₽',
    oldPrice: '2 990₽',
    allIncluded: true,
  },
];

function SubscriptionCard({sub, openModalHandler}) {
  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      p={5}
      bg='white'
      boxShadow='sm'
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      justifyContent='space-between'
      minH='300px'
      minW='310px'
    >
      <Box>
        <HStack
          mb={3}
          spacing={2}
        >
          <Badge
            colorPalette={
              sub.duration === '12 месяцев'
                ? 'green'
                : sub.duration === '6 месяцев'
                  ? 'teal'
                  : sub.duration === '3 месяца'
                    ? 'blue'
                    : sub.duration === '1 месяц'
                      ? 'gray'
                      : ''
            }
            fontSize='0.85em'
          >
            {sub.duration}
          </Badge>
        </HStack>
        <Text
          fontWeight={700}
          fontSize='xl'
          color={'black'}
          mb={1}
        >
          {sub.type}
        </Text>
        {sub.pool && (
          <Text
            fontSize='md'
            fontWeight={700}
            color={'black'}
            mb={1}
          >
            + бассейн
          </Text>
        )}
      </Box>

      <Box mt='auto'>
        <Text
          as='span'
          fontWeight={700}
          fontSize='xl'
          color={'black'}
          mr={2}
          mt={20}
        >
          {sub.price}
        </Text>
        {sub.oldPrice && (
          <Text
            as='span'
            color='gray.400'
            textDecor='line-through'
            fontSize='md'
          >
            {sub.oldPrice}
          </Text>
        )}
      </Box>
      <Button
        colorPalette='purple'
        onClick={openModalHandler}
        w='100%'
        mt='16px'
      >
        Купить
      </Button>
    </Box>
  );
}

export default function Subscriptions() {
  const [openModal, setOpen] = useState(false);

  const closeModalHandler = () => {
    setOpen(false);
  };
  const openModalHandler = () => {
    console.log('jopa');
    setOpen(true);
  };
  console.log(openModal);
  return (
    <>
      <Box
        maxW='1800px'
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
          Абонементы
        </Heading>
        <Grid
          templateColumns={{base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)'}}
          gap={6}
        >
          {subscriptions.map((sub, idx) => (
            <SubscriptionCard
              openModalHandler={openModalHandler}
              sub={sub}
              key={idx}
            />
          ))}
        </Grid>
      </Box>
      {openModal && (
        <SubsModal
          openModal={openModal}
          closeModalHandler={closeModalHandler}
        />
      )}
    </>
  );
}

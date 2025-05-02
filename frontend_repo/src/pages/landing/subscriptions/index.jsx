import {Box, Grid, Text, Badge, Button, Heading, HStack} from '@chakra-ui/react';

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
    oldPrice: '',
    allIncluded: true,
  },
  // 6 месяцев
  {
    duration: '6 месяцев',
    type: 'Безлимит',
    morning: false,
    pool: true,
    price: '36 990₽',
    oldPrice: '',
    allIncluded: true,
  },
  {
    duration: '6 месяцев',
    type: 'Безлимит',
    morning: false,
    pool: false,
    price: '31 990₽',
    oldPrice: '',
    allIncluded: true,
  },
  {
    duration: '6 месяцев',
    type: 'Утренний',
    morning: true,
    pool: true,
    price: '24 990₽',
    oldPrice: '26 990₽',
    allIncluded: true,
  },
  // 3 месяца
  {
    duration: '3 месяца',
    type: 'Безлимит',
    morning: false,
    pool: true,
    price: '36 990₽',
    oldPrice: '',
    allIncluded: true,
  },
  {
    duration: '3 месяца',
    type: 'Безлимит',
    morning: false,
    pool: false,
    price: '31 990₽',
    oldPrice: '38 990₽',
    allIncluded: true,
  },
  {
    duration: '3 месяца',
    type: 'Утренний',
    morning: true,
    pool: false,
    price: '24 990₽',
    oldPrice: '',
    allIncluded: true,
  },
  // 1 месяц
  {
    duration: '1 месяц',
    type: 'Безлимит',
    morning: false,
    pool: true,
    price: '36 990₽',
    oldPrice: '',
    allIncluded: true,
  },
  {
    duration: '1 месяц',
    type: 'Безлимит',
    morning: false,
    pool: false,
    price: '31 990₽',
    oldPrice: '',
    allIncluded: true,
  },
  {
    duration: '1 месяц',
    type: 'Утренний',
    morning: true,
    pool: true,
    price: '24 990₽',
    oldPrice: '',
    allIncluded: true,
  },
];

function SubscriptionCard({sub}) {
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
      minH='260px'
      minW='400px'
    >
      <Box>
        <HStack
          mb={3}
          spacing={2}
        >
          <Badge
            colorPalette='green'
            fontSize='0.85em'
          >
            {sub.duration}
          </Badge>
          <Badge
            colorPalette={sub.morning ? 'orange' : 'purple'}
            fontSize='0.85em'
          >
            {sub.type}
          </Badge>
        </HStack>
        <Text
          fontWeight={700}
          fontSize='xl'
          color={'black'}
          mb={1}
        >
          Все включено
        </Text>
        {sub.pool && (
          <Text
            fontSize='md'
            color='gray.700'
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
        w='100%'
        mt='16px'
      >
        Купить
      </Button>
    </Box>
  );
}

export default function Subscriptions() {
  return (
    <Box
      maxW='1200px'
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
        templateColumns={{base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)'}}
        gap={6}
      >
        {subscriptions.map((sub, idx) => (
          <SubscriptionCard
            sub={sub}
            key={idx}
          />
        ))}
      </Grid>
    </Box>
  );
}

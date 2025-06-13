import {Box, Button, Image, Grid, Text, VStack, Flex, HStack, Badge} from '@chakra-ui/react';
import React, {useState} from 'react';
import core from '../group/dependency/core.png';
import abs from '../group/dependency/abs.png';
import upper from '../group/dependency/upper-body.png';
import sculpt from '../group/dependency/sculpt.png';
import {useNavigate} from 'react-router-dom';
import {AbonimentBlock} from '../../../components/abonimentBlock/index.jsx';
import SubsModal from '../subscriptions/modal.jsx';

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

function TarifBlock() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/subscriptions');
  };

  const [openModal, setOpen] = useState(false);

  const closeModalHandler = () => {
    setOpen(false);
  };

  const openCallback = () => {
    setOpen(true);
  };

  const [drawlerForm, setForm] = useState({
    subscription: {
      status: 'freeze',
      duration: '12',
      type: 'morning',
      pool: 'yes',
    },
  });
  const changeSubscription = (event, type) => {
    setForm((prevState) => {
      return {...prevState, subscription: {...prevState.subscription, [type]: event.target.value}};
    });
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
        fontSize='48px'
        fontWeight='bold'
        mb={6}
        color='#805AD5'
        w='100%'
        textAlign='left'
      >
        Подобрать тариф
      </Text>
      <Text
        fontSize='18px'
        fontWeight={400}
        color='black'
        w='100%'
        textAlign='left'
      >
        Пройдите короткий опрос - и мы подберем идеальный тариф под ваши цели.
      </Text>
      <AbonimentBlock
        formData={drawlerForm.subscription}
        setForm={changeSubscription}
        mainPage
      />
      <HStack
        alignItems='flex-start'
        width='100%'
        mt='32px'
        spacing={8}
      >
        <Button
          bg='#805AD5'
          color='white'
          _hover={{bg: '#6B46C1'}}
          width='210'
          onClick={openCallback}
        >
          Подобрать тариф
        </Button>
        <Button
          width='270px'
          borderRadius='8px'
          colorScheme='purple'
          variant='outline'
          color='#805AD5'
          border='1px solid #805AD5'
          onClick={handleButtonClick}
        >
          Посмотреть все тарифы
        </Button>
      </HStack>
      {openModal && <SubsModal closeModalHandler={closeModalHandler} />}
    </VStack>
  );
}

export default TarifBlock;

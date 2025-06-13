import {Box} from '@chakra-ui/react';
import React, {useState} from 'react';
import FirstBlock from './firstBlock.jsx';
import CardioZone from './secondBlock.jsx';
import SilaZone from './thirdBlock.jsx';
import Bassein from './fourBlock.jsx';
import TrainersBlock from './trainersBlock.jsx';
import TrainingsBlock from './trainingsBlock.jsx';
import TarifBlock from './tarifBlock.jsx';
import SubsModal from '../subscriptions/modal.jsx';

function MainPage() {
  return (
    <Box
      maxW='1400px'
      minW='70%'
      minH='700px'
      mx='auto'
      alignItems='center'
      px={4}
      py={8}
    >
      <FirstBlock />
      <CardioZone />
      <SilaZone />
      <TrainingsBlock />
      <Bassein />
      <TarifBlock />
      <TrainersBlock />
    </Box>
  );
}

export default MainPage;

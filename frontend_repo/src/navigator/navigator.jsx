import {Box} from '@chakra-ui/react';
// eslint-disable-next-line react/prop-types
function Navigator({ScrollToSubscriptions, ScrollToCoaches, ScrollToGroups, ScrollToContacts}) {
  return (
    <Box
      width='100%'
      height='5vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      padding='4'
    >
      <div onClick={() => ScrollToSubscriptions()}>Абонименты</div>
      <div onClick={() => ScrollToCoaches()}>Групповые занятия</div>
      <div onClick={() => ScrollToGroups()}>Тренеры</div>
      <div onClick={() => ScrollToContacts()}>Контакты</div>
    </Box>
  );
}

export default Navigator;

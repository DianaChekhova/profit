import {Heading, Button, HStack, VStack, Box, Grid, Text} from '@chakra-ui/react';
import React, {useMemo, useState} from 'react';
import {observer} from 'mobx-react-lite';
import GroupSessionsDrawler from '../../admin/tabs/groups/drawler.jsx';
import BaseAdminStore from '../../admin/tabs/adminStore.jsx';
import GroupScheduleUserService from '../../../../service/userTab/GroupsScheduleUserService.jsx';

const GroupsScheduleTab = () => {
  const cards = ['', '', '', ''];
  const [isOpen, setOpen] = useState(false);
  const store = useMemo(() => new BaseAdminStore(new GroupScheduleUserService(), true), []);

  return (
    <>
      <VStack>
        <HStack
          align='stretch'
          alignItems='center'
          justifyContent='space-between'
          width='100%'
        >
          <Heading
            color='black'
            fontSize={32}
            fontWeight={600}
          >
            Расписание
          </Heading>
          <Button
            type='submit'
            borderRadius='8px'
            colorScheme='purple'
            variant='outline'
            color='#805AD5'
            onClick={() => {
              setOpen(true);
            }}
            border='1px solid #805AD5'
          >
            Записаться на тренировку
          </Button>
        </HStack>
        <Box
          width='100%'
          height='100%'
        >
          <Grid
            templateColumns={{base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)'}}
            width='100%'
            gap={6}
            alignItems='stretch'
          >
            {store.itemsList.map((coach, idx) => (
              <Box
                key={idx}
                bg='white'
                borderRadius='lg'
                boxShadow='sm'
                p={0}
                display='flex'
                flexDirection='column'
                alignItems='stretch'
                height='200px'
                width='100%'
                overflow='hidden'
                border='1px solid #E2E8F0'
              >
                <HStack
                  spacing={4}
                  align='flex-start'
                  p='20px'
                  pb='0'
                >
                  <VStack
                    align='flex-start'
                    spacing={1}
                    flex={1}
                  >
                    <Text
                      fontSize='16px'
                      color='gray.400'
                      fontWeight={500}
                      mb='2px'
                    >
                      {coach.date ? new Date(coach.date).toLocaleDateString('ru-RU') : ''}
                    </Text>
                    <Text
                      fontSize='16px'
                      color='gray.400'
                      fontWeight={500}
                      mb='2px'
                    >
                      {coach.time ? coach.time : ''}
                    </Text>
                    <Text
                      fontSize='28px'
                      fontWeight={700}
                      color='black'
                      lineHeight='1'
                    >
                      {coach.training || 'Без названия'}
                    </Text>
                  </VStack>
                  <Button
                    size='sm'
                    variant='ghost'
                    color='#805AD5'
                    bg='#F6F1FF'
                    borderRadius='12px'
                    fontWeight={500}
                    px={5}
                    py={2}
                    _hover={{bg: '#E9D8FD'}}
                    onClick={() => {
                      store.removeItem(coach.id);
                    }}
                    ml='auto'
                  >
                    Отменить
                  </Button>
                </HStack>
                <Box
                  borderBottom='1px solid #E2E8F0'
                  mt='16px'
                />
                <HStack
                  justify='space-between'
                  px='20px'
                  py='16px'
                >
                  <Text
                    color='gray.400'
                    fontSize='18px'
                    fontWeight={500}
                  >
                    Тренер: {coach.trainer || 'Не указан'}
                  </Text>
                  <Text
                    color='gray.400'
                    fontSize='18px'
                    fontWeight={500}
                  >
                    {coach.maxClients && coach.maxClients > 0
                      ? `Группа до ${coach.maxClients} человек`
                      : 'Нет ограничений'}
                  </Text>
                </HStack>
              </Box>
            ))}
          </Grid>
        </Box>
        <GroupSessionsDrawler
          sessions={store.itemsList}
          coaches={store.coachesList}
          addSession={store.addItem}
          updateSession={store.updateItem}
          isOpen={isOpen}
          setOpen={setOpen}
        />
      </VStack>
    </>
  );
};

export default observer(GroupsScheduleTab);

import {Box, VStack, Heading, Text, Table, Button, Badge, HStack} from '@chakra-ui/react';
import React from 'react';
import styles from '../coach/coach.module.scss';
import FreezeModal from './dependency/modal/freeze.jsx';
import {observer} from 'mobx-react-lite';
import AbonimentDrawler from './dependency/modal/drawler.jsx';
import {AbonimentBlock} from '../../../components/abonimentBlock/index.jsx';

const UserProfile = ({profileStore}) => {
  const [freezeOpen, setFreezeOpen] = React.useState(false);
  const [drawlerOpen, setDrawlerOpen] = React.useState(false);

  const closeModalHandler = () => {
    setFreezeOpen(false);
  };

  const closeDrawerHandler = () => {
    setDrawlerOpen(false);
  };

  const profileFields = profileStore.Profile;
  return (
    <>
      <HStack
        align='stretch'
        alignItems='center'
        justifyContent='space-between'
        width='100%'
      >
        <Box
          width='100%'
          height='100%'
          p={4}
          borderWidth='1px'
          borderRadius='lg'
          mr='40px'
          boxShadow='md'
        >
          <VStack
            align='stretch'
            justifyContent='space-between'
            spacing={6}
            minH='300px'
          >
            <HStack justifyContent='space-between'>
              <HStack
                align='start'
                alignItems='center'
                spacing={1}
              >
                <Heading
                  color='black'
                  size='md'
                  fontWeight={600}
                >
                  Мой тариф
                </Heading>
                <Badge
                  minH='32px'
                  colorPalette='green'
                >
                  Активный
                </Badge>
              </HStack>

              <Text
                color={'black'}
                fontSize='16px'
              >
                Действителен до 15.12.2024
              </Text>
            </HStack>

            <VStack
              align='start'
              spacing={1}
            >
              <Text
                color={'black'}
                fontWeight='bold'
                fontSize='32px'
              >
                Все включено
              </Text>
              <Text
                color={'black'}
                fontSize='32px'
              >
                + бассейн
              </Text>
            </VStack>
            <HStack spacing={4}>
              <Button
                type='submit'
                width='129px'
                borderRadius='8px'
                bgcolor='purple'
                backgroundColor='#805AD5'
                onClick={() => setFreezeOpen(true)}
              >
                Заморозить
              </Button>
              <Button
                type='submit'
                width='165px'
                borderRadius='8px'
                colorScheme='purple'
                variant='outline'
                color='#805AD5'
                border='1px solid #805AD5'
                onClick={() => setDrawlerOpen(true)}
              >
                Поменять тариф
              </Button>
            </HStack>
          </VStack>
        </Box>
        <Box
          width='100%'
          height='100%'
          minH='335px'
          p={4}
          borderWidth='1px'
          align-items='center'
          borderRadius='lg'
          boxShadow='md'
        >
          <Heading
            color='black'
            size='md'
            mb='24px'
            fontWeight={600}
          >
            Личные данные
          </Heading>
          <Table.Root
            size='sm'
            variant='line'
            alignSelf='center'
            interactive
            border='none'
            padding='10px'
            minHeight='53px'
            className={styles.tableRoot}
          >
            <Table.Body>
              <Table.Row>
                <Table.ColumnHeader color='#969696'>ФИО</Table.ColumnHeader>
                <Table.Cell textAlign='end'>{profileFields?.name || 'Ткаченко Диана Владимировна'}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.ColumnHeader color='#969696'>Дата рождения</Table.ColumnHeader>
                <Table.Cell textAlign='end'>{profileFields?.birth || '29.05.1999'}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.ColumnHeader color='#969696'>Паспорт</Table.ColumnHeader>
                <Table.Cell textAlign='end'>{profileFields?.passport || '1234 567890'}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.ColumnHeader color='#969696'>Адрес</Table.ColumnHeader>
                <Table.Cell textAlign='end'>
                  {profileFields?.address || 'г. Рязань ул. Магистральная д. 3 кв. 30'}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.ColumnHeader color='#969696'>Номер телефона</Table.ColumnHeader>
                <Table.Cell textAlign='end'>{profileFields?.phone || '+7 920 953 44 54'}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.ColumnHeader color='#969696'>Email</Table.ColumnHeader>
                <Table.Cell textAlign='end'>{profileFields?.email || 'Tkachenko@mail.ru'}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Box>
        {freezeOpen && (
          <FreezeModal
            freezeHandler={() => profileStore.freezeProfile()}
            closeModalHandler={closeModalHandler}
          />
        )}
        <AbonimentDrawler
          setOpen={closeDrawerHandler}
          isOpen={drawlerOpen}
        />
      </HStack>
    </>
  );
};

export default observer(UserProfile);

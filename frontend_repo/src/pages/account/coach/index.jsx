import {Box, Flex, Stack, Tabs, Theme, Text, HStack} from '@chakra-ui/react';
import {Tag} from '../../../components/ui/tag.jsx';
import {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Context} from '../../../main.jsx';
import styles from './coach.module.scss';
import {observer} from 'mobx-react-lite';
import PersonalTable from './peronalTable.jsx';
import GroupTable from './groupTable.jsx';

function CoachPage() {
  const {store} = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.getAuthenticated()) {
      navigate('/');
    }
  }, [navigate, store]);

  return (
    <Box
      width='100%'
      height='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      padding='4'
      background='white'
    >
      <Stack
        spacing={4}
        width='calc(100% - 120px)'
        height='100%'
        p='0'
        backgroundColor='white'
        boxShadow='none'
      >
        <HStack
          alignItems='center'
          className={styles.username}
          spacing={4}
        >
          <Text
            color='black'
            textStyle='4xl'
          >
            {store.getUserName()}
          </Text>
          <Tag
            align='flex-start'
            colorPalette={'green'}
          >
            Тренер
          </Tag>
        </HStack>
        <Tabs.Root
          lazyMount
          unmountOnExit
          defaultValue='tab-1'
        >
          <Theme
            colorPalette='purple'
            fontSize='lg'
          >
            <Flex
              direction='row'
              justify='space-between'
            >
              <Tabs.List className={styles.tableTabs}>
                <Tabs.Trigger
                  fontSize='lg'
                  value='tab-1'
                >
                  Групповые тренеровки
                </Tabs.Trigger>
                <Tabs.Trigger
                  fontSize='lg'
                  value='tab-2'
                >
                  Персональные тренировки
                </Tabs.Trigger>
              </Tabs.List>
            </Flex>
          </Theme>
          <Tabs.Content value='tab-1'>
            <GroupTable />
          </Tabs.Content>
          <Tabs.Content value='tab-2'>
            <PersonalTable />
          </Tabs.Content>
        </Tabs.Root>
      </Stack>
    </Box>
  );
}

export default observer(CoachPage);

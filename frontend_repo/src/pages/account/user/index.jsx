import {Box, Flex, Stack, Tabs, Theme} from '@chakra-ui/react';
import {useContext, useEffect, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import {Context} from '../../../main.jsx';
import styles from './user.module.scss';
import {observer} from 'mobx-react-lite';
import UserProfile from './aboniment.jsx';
import ProfileStore from './profileStore.jsx';
import ProfileService from '../../../service/userTab/profileService.jsx';
import ScheduleTab from './tabs/scheduleTab.jsx';

function UserPage() {
  const {store} = useContext(Context);
  const profileStore = useMemo(() => new ProfileStore(new ProfileService()), []);
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
                  Абонимент
                </Tabs.Trigger>
                <Tabs.Trigger
                  fontSize='lg'
                  value='tab-2'
                >
                  Персональные тренировки
                </Tabs.Trigger>
                <Tabs.Trigger
                  fontSize='lg'
                  value='tab-3'
                >
                  Групповые тренировки
                </Tabs.Trigger>
              </Tabs.List>
            </Flex>
          </Theme>
          <Tabs.Content value='tab-1'>
            <UserProfile profileStore={profileStore} />
          </Tabs.Content>
          <Tabs.Content value='tab-2'>
            <ScheduleTab />
          </Tabs.Content>
          <Tabs.Content value='tab-3'></Tabs.Content>
        </Tabs.Root>
      </Stack>
    </Box>
  );
}

export default observer(UserPage);

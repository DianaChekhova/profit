import styles from './modal.module.scss';
import {Box, Portal, Stack, Tabs, Theme} from '@chakra-ui/react';
import RegistrationTab from './tabs/registration.jsx';
import LoginTab from './tabs/login.jsx';

function AuthModal(props) {
  const {closeModalHandler} = props;
  return (
    <Portal>
      <div
        className={styles.modalWrapper}
        onClick={closeModalHandler}
      />
      <Box
        minW={{base: '90%', md: '468px'}}
        className={styles.modalForm}
      >
        <Stack
          spacing={4}
          p='28px'
          backgroundColor='white'
          boxShadow='md'
        >
          <Tabs.Root
            lazyMount
            unmountOnExit
            defaultValue='tab-1'
          >
            <Theme
              p='4'
              pl='0'
              colorPalette='purple'
            >
              <Tabs.List className={styles.modalTabs}>
                <Tabs.Trigger value='tab-1'>Вход</Tabs.Trigger>
                <Tabs.Trigger value='tab-2'>Регистрация</Tabs.Trigger>
              </Tabs.List>
            </Theme>
            <Tabs.Content value='tab-1'>
              <LoginTab />
            </Tabs.Content>
            <Tabs.Content value='tab-2'>
              <RegistrationTab />
            </Tabs.Content>
          </Tabs.Root>
        </Stack>
      </Box>
    </Portal>
  );
}

export default AuthModal;

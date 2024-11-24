import {Box, Tabs} from '@chakra-ui/react';
function Navigator() {
  return (
    <Box
      background='tomato'
      width='100%'
      height='100px'
      display='flex'
      justifyContent='center'
      alignItems='center'
      padding='4'
      color='white'
    >
      <Tabs.Root variant='plain'>
        <Tabs.List gap='20px'>
          <Tabs.Trigger value='tab-3'>Tab 3</Tabs.Trigger>
          <Tabs.Trigger value='tab-3'>Tab 3</Tabs.Trigger>
          <Tabs.Trigger value='tab-3'>Tab 3</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </Box>
  );
}

export default Navigator;

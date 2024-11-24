import {Box} from '@chakra-ui/react';
import {forwardRef} from 'react';

function Subscriptions(props, ref) {
  return (
    <Box
      width='100%'
      height='2500px'
      display='flex'
      justifyContent='center'
      alignItems='center'
      padding='4'
      background='green'
    >
      <h1 ref={ref}></h1>
    </Box>
  );
}

export default forwardRef(Subscriptions);

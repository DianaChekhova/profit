import {Box} from '@chakra-ui/react';
import {forwardRef} from 'react';

function Contacts(props, ref) {
  return (
    <Box
      width='100%'
      height='500px'
      display='flex'
      justifyContent='center'
      alignItems='center'
      padding='4'
      background='grey'
    >
      <h1 ref={ref}></h1>
    </Box>
  );
}

export default forwardRef(Contacts);

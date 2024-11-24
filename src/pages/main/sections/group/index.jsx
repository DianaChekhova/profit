import {Box} from '@chakra-ui/react';
import {forwardRef} from 'react';

function GroupTraining(props, ref) {
  return (
    <Box
      width='100%'
      height='500px'
      display='flex'
      justifyContent='center'
      alignItems='center'
      padding='4'
      background='red'
    >
      <h1 ref={ref}></h1>
    </Box>
  );
}

export default forwardRef(GroupTraining);

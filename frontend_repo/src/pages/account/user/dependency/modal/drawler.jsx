import {Button} from '../../../../../components/ui/button.jsx';
import {
  DrawerActionTrigger,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerRoot,
} from '../../../../../components/ui/drawer.jsx';
import React, {useState, useEffect} from 'react';
import {Badge, Box, Heading, HStack, Text, VStack} from '@chakra-ui/react';
import {AbonimentBlock} from '../../../../../components/abonimentBlock/index.jsx';

const AbonimentDrawler = (props) => {
  const {isOpen, setOpen, getItems, setItems} = props;
  const [drawlerForm, setForm] = useState({
    subscription: {
      status: getItems?.subscription?.status || 'freeze',
      duration: getItems?.subscription?.duration || '12',
      type: getItems?.subscription?.type || 'morning',
      pool: getItems?.subscription?.pool || 'yes',
    },
  });

  const changeSubscription = (event, type) => {
    setForm((prevState) => {
      return {...prevState, subscription: {...prevState.subscription, [type]: event.target.value}};
    });
  };

  useEffect(() => {
    if (getItems) {
      setForm({
        subscription: {
          status: getItems?.subscription?.status || 'freeze',
          duration: getItems?.subscription?.duration || '12',
          type: getItems?.subscription?.type || 'morning',
          pool: getItems?.subscription?.pool || 'yes',
        },
      });
    }
  }, [getItems]);

  const handleSubmit = () => {
    setItems('', {...getItems, subscription: {...drawlerForm.subscription}});
  };

  return (
    <DrawerRoot
      open={isOpen}
      onOpenChange={(e) => setOpen(e.open)}
      size='lg'
    >
      <DrawerContent>
        <DrawerBody>
          <Heading
            fontSize='18px'
            fontWeight={500}
            color='black'
            margin='0 0 16px 0'
          >
            Смена тарифа
          </Heading>

          <Heading
            fontWeight={400}
            fontSize='24px'
            color='black'
            mb='24px'
          >
            Текущий тариф
          </Heading>

          <Box
            width='100%'
            minH='219px'
            p={4}
            borderWidth='1px'
            borderRadius='lg'
            boxShadow='md'
          >
            <VStack
              align='stretch'
              justifyContent='space-between'
              width='600px'
              minH='171px'
            >
              <HStack>
                <HStack
                  align='start'
                  alignItems='center'
                  spacing={1}
                >
                  <Badge
                    minH='32px'
                    colorPalette='green'
                  >
                    {`${
                      drawlerForm?.subscription?.duration == 12
                        ? '12 месяцев'
                        : drawlerForm?.subscription?.duration == 6
                          ? '6 месяцев'
                          : drawlerForm?.subscription?.duration == 3
                            ? '3 месяца'
                            : '1 месяц'
                    } `}
                  </Badge>
                  <Badge
                    minH='32px'
                    colorPalette='purple'
                  >
                    {`${drawlerForm?.subscription?.type == 'morning' ? 'Утренний' : 'Безлимит'} `}
                  </Badge>
                </HStack>
              </HStack>
              <VStack
                align='start'
                justifyContent='space-between'
                flexDirection='column'
                spacing={3}
              >
                <Text
                  color={'black'}
                  fontWeight='700'
                  fontSize='32px'
                  mb='16px'
                >
                  {drawlerForm?.subscription?.type === 'morning' ? 'Утренний' : 'Все включено'}
                </Text>
                <Text
                  color={'black'}
                  fontWeight='600'
                  fontSize='24px'
                >
                  {drawlerForm?.subscription?.pool === 'yes' ? '+ бассейн' : ''}
                </Text>
              </VStack>
            </VStack>
          </Box>
          <Heading
            mt='16px'
            fontSize='24px'
            fontWeight={400}
            color={'black'}
          >
            Выберите условия нового тарифа
          </Heading>
          <AbonimentBlock
            formData={drawlerForm.subscription}
            setForm={changeSubscription}
          />
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant='outline'>Отмена</Button>
          </DrawerActionTrigger>
          <DrawerActionTrigger asChild>
            <Button
              colorPalette='purple'
              onClick={handleSubmit}
            >
              Сохранить
            </Button>
          </DrawerActionTrigger>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default AbonimentDrawler;

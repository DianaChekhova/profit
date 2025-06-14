import React from 'react';
import {Box, Heading, VStack, createListCollection} from '@chakra-ui/react';
import {Radio, RadioGroup} from '../ui/radio.jsx';
import {SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText} from '../ui/select.jsx';
import styles from '../user/authentication/modal/tabs/tabs.module.scss';

const scheduleData = createListCollection({
  items: [
    {label: '12 месяцев', value: '12'},
    {label: '6 месяцев', value: '6'},
    {label: '3 месяца', value: '3'},
    {label: '1 месяц', value: '1'},
  ],
});

const statusData = createListCollection({
  items: [
    {label: 'Активен', value: 'active'},
    {label: 'Заморожен', value: 'freeze'},
  ],
});

export const AbonimentBlock = (props) => {
  const {needStatus, formData, setForm, mainPage} = props;

  const handleChange = (e, type) => {
    setForm(e, type);
  };

  console.log(formData);

  return (
    <Box
      width='100%'
      borderRadius='lg'
      mt='24px'
    >
      {!mainPage && (
        <Heading
          as='h2'
          fontSize='24px'
          fontWeight={400}
          color='black'
          mb={6}
        >
          Абонемент
        </Heading>
      )}
      <VStack
        gap='24px'
        align='stretch'
      >
        {needStatus && (
          <div>
            <Heading
              color='black'
              fontSize={!mainPage ? '12px' : '24px'}
              fontWeight={400}
            >
              Статус абонемента
            </Heading>
            <SelectRoot
              collection={statusData}
              size='sm'
              color='black'
              className={styles.select}
              width='100%'
              defaultValue={[formData.status]}
              onChange={(e) => handleChange(e, 'status')}
            >
              <SelectTrigger>
                <SelectValueText value={'status'} />
              </SelectTrigger>
              <SelectContent className={styles.select}>
                {statusData.items.map((item) => (
                  <SelectItem
                    color='black'
                    className={styles.selectItem}
                    item={item}
                    value={item.value}
                    key={item.value}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </div>
        )}
        <div>
          <Heading
            color='black'
            fontSize={!mainPage ? '12px' : '24px'}
            fontWeight={400}
            mb={!mainPage ? '' : '24px'}
          >
            Выберите срок абонемента
          </Heading>
          <SelectRoot
            collection={scheduleData}
            size='sm'
            color='black'
            className={styles.select}
            width='100%'
            defaultValue={[`${formData.duration}`]}
            onChange={(e) => handleChange(e, 'duration')}
          >
            <SelectTrigger>
              <SelectValueText value={'duration'} />
            </SelectTrigger>
            <SelectContent className={styles.select}>
              {scheduleData.items.map((item) => (
                <SelectItem
                  color='black'
                  className={styles.selectItem}
                  item={item}
                  value={item.value}
                  key={item.value}
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        </div>
        <RadioGroup
          onChange={(e) => handleChange(e, 'type')}
          value={formData.type}
          variant='outline'
          colorPalette='gray'
          size='sm'
        >
          <Heading
            size='md'
            color='black'
            mb='16px'
            fontWeight={400}
            fontSize={!mainPage ? '16px' : '24px'}
          >
            Выберите время занятий
          </Heading>
          <VStack
            align={'flex-start'}
            color='black'
            gap='9px'
          >
            <Radio
              fontSize='14px'
              fontWeight={400}
              value='morning'
            >
              Утренние занятия до 17:00
            </Radio>
            <Radio
              fontSize='14px'
              fontWeight={400}
              value='unlimited'
            >
              Безлимитные занятия
            </Radio>
          </VStack>
        </RadioGroup>
        <RadioGroup
          onChange={(e) => handleChange(e, 'pool')}
          value={formData.pool}
          variant='outline'
          colorPalette='gray'
          size='sm'
        >
          <Heading
            size='md'
            color='black'
            mb='16px'
            fontWeight={400}
            fontSize={!mainPage ? '16px' : '24px'}
          >
            Включить ли бассейн:
          </Heading>
          <VStack
            align={'flex-start'}
            color='black'
            gap='9px'
          >
            <Radio
              fontSize='14px'
              fontWeight={400}
              value='yes'
            >
              Да
            </Radio>
            <Radio
              fontSize='14px'
              fontWeight={400}
              value='no'
            >
              Нет
            </Radio>
          </VStack>
        </RadioGroup>
      </VStack>
    </Box>
  );
};

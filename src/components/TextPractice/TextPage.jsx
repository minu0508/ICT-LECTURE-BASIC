import { Text } from './Text';

export const TextPage = (args) => {
  return (
    <>
      <Text {...args}>Text</Text> <br />
      <Text {...args} size={'large'}>
        Large
      </Text>{' '}
      <br />
      <Text {...args} size={'normal'}>
        Normal
      </Text>{' '}
      <br />
      <Text {...args} size={'small'}>
        Small
      </Text>{' '}
      <br />
      <Text {...args} size={24}>
        Custom
      </Text>{' '}
      <br />
    </>
  );
};

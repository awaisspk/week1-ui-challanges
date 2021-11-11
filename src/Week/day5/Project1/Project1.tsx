import {Container} from '@components/Container';
import {Flex} from '@components/Flex';
import {Text} from '@components/Text';
import {styled} from '@stitches/react';
import {CheckBox} from './CheckBox';
import {Box} from '@components/Box';

export const Project1 = () => {
  return (
    <Container center>
      <Flex>
        <CheckBox>1-2 years</CheckBox>
      </Flex>
    </Container>
  );
};

const Wrapper = styled(Flex, {
  width: 'min(400px, 100% - 20px)',
  height: '500px',
  backgroundColor: '#1F1F3C',
  borderRadius: '1.6em',
  transformStyle: 'preserve-3d',
  '&:before': {
    content: '',
    backgroundColor: '#4744C5',
    position: 'absolute',
    left: '10%',
    width: '80%',
    height: '106%',
    bottom: '-3%',
    borderRadius: '1em',
    transform: 'translateZ(-1px)',
  },
});

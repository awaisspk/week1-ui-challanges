import {Box} from '@components/Box';
import {Box2} from '@components/Box2';
import {Container} from '@components/Container';
import {styled} from '@stitches/react';
import {motion} from 'framer-motion';
import type {NextPage} from 'next';
import {Day1} from 'Week/day1';
import {Day2} from 'Week/day2';
import {Cards} from 'Week/day2/data';

export const StyledBox = styled('div', {
  width: '100px',
  height: '100px',
  boxSizing: 'border-box',
  backgroundColor: 'red',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Home: NextPage = () => {
  return (
    <Container main="center" cross="center">
      {/* <Day1 /> */}
      <Day2 cards={Cards} />
    </Container>
  );
};

export default Home;

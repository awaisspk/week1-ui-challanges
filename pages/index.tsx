import {Container} from '@components/Container';
import type {NextPage} from 'next';
import {Day1} from 'Week/day1';
import {Day2} from 'Week/day2';
import {Cards} from 'Week/day2/data';
import {BouncingBar, ThemeToggle} from 'Week/day3';

const Home: NextPage = () => {
  return (
    <Container flow="col" main="center" cross="center" css={{minWidth: '100%'}}>
      {/* <Day1 />
      <Day2 cards={Cards} /> */}
      <ThemeToggle />
      {/* <BouncingBar /> */}
    </Container>
  );
};

export default Home;

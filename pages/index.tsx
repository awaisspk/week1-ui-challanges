import {Container} from '@components/Container';
import type {NextPage} from 'next';
import {Day1} from 'Week/day1';
import {Day2} from 'Week/day2';
import {Cards} from 'Week/day2/data';
import {BouncingBar, ThemeToggle} from 'Week/day3';
import {Day4} from 'Week/day4';
import {Day5} from 'Week/day5';
import {Day6} from 'Week/day6';
import {Day7} from 'Week/day7';

const Home: NextPage = () => {
  return (
    <Container flow="col" main="center" cross="center" css={{minWidth: '100%'}}>
      {/* <Day1 />
      <Day2 cards={Cards} /> */}
      {/* <ThemeToggle /> */}
      {/* <BouncingBar /> */}
      {/* <Day4 /> */}
      {/* <Day6 /> */}
      <Day7 />
    </Container>
  );
};

export default Home;

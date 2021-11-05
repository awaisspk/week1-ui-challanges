import {Container} from '@components/Container';
import type {NextPage} from 'next';
import {Day1} from 'Week/day1';
import {Day2} from 'Week/day2';
import {Cards} from 'Week/day2/data';
import {Day3} from 'Week/day3';
import {MySolution} from 'Week/day3/mySolution';

const Home: NextPage = () => {
  return (
    <Container main="center" cross="center">
      {/* <Day1 /> */}
      {/* <Day2 cards={Cards} /> */}
      <Day3 />
      <MySolution />
    </Container>
  );
};

export default Home;

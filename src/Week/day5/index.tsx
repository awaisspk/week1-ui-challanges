import {Container} from '@components/Container';
import {motion} from 'framer-motion';
import {useState} from 'react';

export const Day5 = () => {
  const [state, setState] = useState(false);

  return (
    <Container center flow="col" onClick={() => setState(!state)}>
      <h1>It is day 5</h1>
    </Container>
  );
};

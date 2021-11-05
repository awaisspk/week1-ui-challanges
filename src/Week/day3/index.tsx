import {Container} from '@components/Container';
import {styled} from '@stitches/react';
import {motion, AnimatePresence} from 'framer-motion';
import React, {useState} from 'react';
import {FaMoon, FaSun} from 'react-icons/fa';

export const Day3 = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <Container
      main="center"
      cross="center"
      css={{transition: '300ms', backgroundColor: isOn ? '#52527a' : 'white'}}
    >
      <Pill
        darkMode={isOn}
        onClick={() => setIsOn(!isOn)}
        css={{justifyContent: isOn ? 'flex-end' : 'flex-start'}}
      >
        <Handle layout transition={{damping: 0}}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.i
              className="icon"
              key={isOn ? 'moon' : 'sun'}
              initial={{y: -30, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              exit={{y: 30, opacity: 0}}
              transition={{duration: 0.2}}
            >
              {isOn ? <FaMoon /> : <FaSun />}
            </motion.i>
          </AnimatePresence>
        </Handle>
      </Pill>
    </Container>
  );
};

const Pill = styled('div', {
  height: '40px',
  width: '100px',
  backgroundImage:
    'radial-gradient(circle farthest-corner at 10% 20% , rgba(253,203,50,1) 0%, rgba(244,56,98,1) 100.2%)',
  borderRadius: '25px',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '0 5px',
  cursor: 'pointer',
  transition: 'all 0.3s',
  '& .icon': {
    color: '#f88748',
  },
  variants: {
    darkMode: {
      true: {
        backgroundImage:
          'radial-gradient(circle farthest-corner at 10% 20% , rgba(41,14,151,1) 0%, rgba(244,56,08,1) 100.2%)',

        '& .icon': {
          color: '#501a96',
        },
      },
    },
  },
});

const Handle = styled(motion.div, {
  height: '30px',
  width: '30px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  overflow: 'hidden',
});

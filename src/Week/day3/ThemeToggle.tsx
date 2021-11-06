import {Container} from '@components/Container';
import {Flex} from '@components/Flex';
import {styled} from '@stitches/react';
import {motion, AnimatePresence, Variants} from 'framer-motion';
import {useState} from 'react';
import {FaMoon, FaSun} from 'react-icons/fa';

export const ThemeToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const bgVariant: Variants = {
    off: {
      backgroundImage:
        'radial-gradient(circle farthest-corner at 10% 20% , rgba(253,203,50,1) 0%, rgba(244,56,98,1) 100.2%)',
    },
    on: {
      backgroundImage:
        'radial-gradient(circle farthest-corner at 10% 20% , rgba(41,14,151,1) 0%, rgba(244,56,08,1) 100.2%)',
    },
  };

  return (
    <Container flow="col" main="center" cross="center">
      <Flex
        center
        css={{
          transition: '300ms',
          backgroundColor: isOn ? '#52527a' : 'white',
          width: '300px',
          height: '300px',
          br: '40px',
        }}
      >
        <Pill
          onClick={() => setIsOn(!isOn)}
          css={{justifyContent: isOn ? 'flex-end' : 'flex-start'}}
          variants={bgVariant}
          animate={isOn ? 'on' : 'off'}
          darkMode={isOn}
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
      </Flex>
    </Container>
  );
};

const Pill = styled(motion.button, {
  border: 'none',
  height: 40,
  width: 100,
  borderRadius: '25px',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '0 5px',
  overflow: 'hidden',
  '& .icon': {
    color: '#f88748',
  },
  variants: {
    darkMode: {
      true: {
        '& .icon': {
          color: '#501a96',
        },
      },
    },
  },
});

const Handle = styled(motion.div, {
  width: 30,
  height: 30,
  backgroundColor: 'white',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

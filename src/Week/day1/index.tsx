import {styled} from '@stitchesConfig';
import {Box} from '@components/Box';
import {Flex} from '@components/Flex';
import {Text} from '@components/Text';
import {ThumbUp} from '@components/Box/Icons/ThumbUp';
import {ThumbDown} from '@components/Box/Icons/ThumbDown';
import {motion} from 'framer-motion';
import {Container} from '@components/Container';

export const Day1 = () => {
  return (
    <Container flow="col" main="spaceEvenly" cross="center">
      <Box css={{bc: 'white', px: '$12', py: '$12', br: '25px'}}>
        <Flex cross="center" main="spaceBtw" css={{maxW: '$3'}}>
          <Text
            css={{
              color: '#1F205D',
              fontSize: 'calc(1rem + 0.5vw)',
              fontWeight: '$700',
              flexBasis: '55%',
            }}
          >
            What do you think of the article
          </Text>
          <Flex gap="1">
            <Flex
              center
              css={{
                border: '2px solid #ECECF9',
                br: '$lg',
                px: '$4',
                py: '$4',
                textAlign: 'center',
                transition: '300ms',
              }}
            >
              <ThumbUp />
            </Flex>
            <Flex
              center
              css={{
                border: '2px solid #ECECF9',
                br: '$lg',
                px: '$4',
                py: '$4',
              }}
            >
              <ThumbDown />
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Box css={{bc: 'white', px: '$12', py: '$12', br: '25px'}}>
        <Text
          css={{
            color: '#1F205D',
            fontSize: '22px',
            fontWeight: '$700',
            flexBasis: '55%',
          }}
        >
          Tags
        </Text>
        <Flex wrap="wrap" gap="2" css={{maxW: '$6'}}>
          <Pill>housing benefits</Pill>
          <Pill>housing benefits</Pill>
          <Pill>One-time benefit</Pill>
          <Pill>Parental benefits</Pill>
          <Pill>parental scholarship</Pill>
          <Pill>social assitance</Pill>
          <Pill>benefit</Pill>
          <Pill>social assitance</Pill>
        </Flex>
      </Box>
    </Container>
  );
};

const StyledPill = styled('div', {
  px: '$2',
  py: '$2',
  border: '2px solid #ECECF9',
  br: '$lg',
  userSelect: 'none',
  transition: '200ms',

  $$textColor: '#151757',

  '@hover': {
    '&:hover': {
      $$textColor: 'white',
      backgroundColor: '#151757',
    },
  },

  [`& ${Text}`]: {
    color: '$$textColor',
    lineHeight: '$0',
    fontSize: '$1',
  },
});

const Pill: React.FC = ({children}) => {
  return (
    <StyledPill>
      <Text>{children}</Text>
    </StyledPill>
  );
};

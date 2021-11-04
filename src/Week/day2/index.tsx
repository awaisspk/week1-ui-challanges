import {Box} from '@components/Box';
import {Container} from '@components/Container';
import {Flex} from '@components/Flex';
import {Text} from '@components/Text';
import {LeftArrow, RightArrow} from './Arrow';
import {AnimatePresence} from 'framer-motion';

type Props = {
  icon: JSX.Element;
  title: string;
  content: string;
};

type Cards = {
  cards: Props[];
};

export const Day2 = (cards: Cards) => {
  return (
    <Container flow="col" main="center" cross="center">
      <Flex css={{maxH: '500px'}} gap="5">
        <LeftArrow />
        <AnimatePresence>
          {cards.cards.map((Card, index) => (
            <Flex
              key={index}
              css={{
                bc: 'white',
                px: '$5',
                py: '$5',
                br: '25px',
                maxH: '$5',
                boxShadow: '0px 25px 25px -20px rgba(1,43,154,0.15)',
                '@bp2': {
                  px: '$12',
                  py: '$10',
                },
              }}
            >
              <Flex
                main="center"
                cross="center"
                css={{maxW: '$3', justifySelf: 'center'}}
                gap="6"
              >
                <Box
                  css={{
                    bc: '#F3F3FB',
                    px: '$4',
                    py: '$4',
                    br: '22px',
                    alignSelf: 'center',
                  }}
                >
                  {Card.icon}
                </Box>
                <Box>
                  <Text variant="title" css={{color: '#2D3351'}}>
                    {Card.title}
                  </Text>
                  <Text css={{color: '#2D3351', lineHeight: '$9'}}>
                    {Card.content}
                  </Text>
                </Box>
              </Flex>
            </Flex>
          ))}
        </AnimatePresence>
        <RightArrow />
      </Flex>
    </Container>
  );
};

// coombine navigation and pagination component

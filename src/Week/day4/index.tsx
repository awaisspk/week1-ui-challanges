import {Box} from '@components/Box';
import {Button} from '@components/Buttons';
import {Container} from '@components/Container';
import {Flex} from '@components/Flex';
import {Text} from '@components/Text';
import {styled} from '@stitchesConfig';
import React from 'react';
import {Tick} from './Icons/Tick';

const Title = styled(Text, {
  color: '#BCB8CC',
  fontSize: 'clamp($3, $4, $5)',
  fontWeight: '$700',
  lineHeight: 1.3,
});

const P = styled(Text, {
  color: '#B6B6c6',
  fontSize: '$3',
  pt: '$2',
});

export const Day4 = () => {
  return (
    <Container
      flow="col"
      main="spaceAround"
      cross="center"
      css={{backgroundColor: '#231e36'}}
    >
      <Flex
        center
        css={{
          backgroundColor: '#1c172e',
          width: 'min(400px, 100% - 40px)',
          margin: 'auto',
          minHeight: '300px',
          br: '25px',
          boxShadow: '0px 42px 20px -29px rgba(22, 18, 39, 0.44)',
        }}
      >
        <Flex flow="col" gap="4">
          <Box>
            <Title>Open source</Title>
            <Title>Free forever</Title>
            <P>Enjoy our free, full version</P>
          </Box>
          <Button
            icon="github"
            css={{
              mt: '$4',
              backgroundColor: '#4828bb',
              px: '$6',
              py: '$3',
              br: '10px',
              alignSelf: 'start',

              '& svg': {
                fontSize: '22px',
              },

              color: '#d7d0f0',
            }}
          >
            Clone from Github
          </Button>
        </Flex>
      </Flex>

      <Flex
        center
        css={{
          backgroundColor: '#1c172e',
          width: 'min(700px, 100% - 40px)',
          minHeight: '300px',
          br: '25px',
          boxShadow: '0px 42px 20px -29px rgba(22, 18, 39, 0.44)',
        }}
      >
        <Flex
          flow="row"
          wrap="wrap"
          main="spaceBtw"
          css={{maxW: '80%', gap: '$4'}}
        >
          <Flex
            flow="col"
            css={{
              flexBasis: '90%',
              '@bp1': {
                flexBasis: '45%',
              },
            }}
          >
            <div>
              <Title>Looking to evaluate</Title>
              <P>Try out our platform and start developing ideas.</P>
            </div>
            <Button
              css={{
                mt: '$8',
                backgroundColor: '#4828bb',
                px: '$6',
                py: '$3',
                br: '10px',
                alignSelf: 'start',

                '& svg': {
                  fontSize: '22px',
                },

                color: '#d7d0f0',
              }}
            >
              Evaluate now
            </Button>
          </Flex>
          <Flex
            flow="col"
            as="ul"
            cross={{
              '@initial': 'start',
              '@bp1': 'center',
            }}
            main="center"
            css={{
              flexBasis: '100%',
              '@bp1': {
                flexBasis: '45%',
              },
            }}
          >
            <div>
              <Bullets>All features available</Bullets>
              <Bullets>Community support</Bullets>
              <Bullets>Only testing purposes</Bullets>
            </div>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

const StyledBullets = styled('li', P, {
  listStyle: 'none',
  '& svg': {
    marginRight: '5px',
  },
});

const Bullets: React.FC = ({children}) => {
  return (
    <StyledBullets>
      {<Tick />}
      {children}
    </StyledBullets>
  );
};

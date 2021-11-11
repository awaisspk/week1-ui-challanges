import {Box} from '@components/Box';
import {Container} from '@components/Container';
import {Flex} from '@components/Flex';
import {styled} from '@stitches/react';
import Image from 'next/image';

export const Project2 = () => {
  return (
    <Container center>
      <Box
        css={{
          width: 'min(580px, 100% - 40px)',
          backgroundColor: '#ffffff',
          borderRadius: '40px',
          boxShadow: '0px 25px 30px -19px rgba(18,56,68,0.2)',
          minH: '$4',
        }}
      >
        <Box
          css={{
            width: '90%',
            height: '90%',
            margin: 'auto',
          }}
        >
          <ImageContainer>
            <Image
              src="/images/Gumroad thumbnail.jpg"
              layout="fill"
              width="300px"
              height="300px"
              objectFit="contain"
            />
          </ImageContainer>
        </Box>
      </Box>
    </Container>
  );
};

const ImageContainer = styled('div', {
  position: 'relative',
});

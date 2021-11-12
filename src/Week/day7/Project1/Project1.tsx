import {Container} from '@components/Container';
import {Flex} from '@components/Flex';
import {Text} from '@components/Text';
import {styled} from '@stitches/react';
import React from 'react';
import {Label} from './Label';
import {CheckBox} from './CheckBox';

export const Project1 = () => {
  return (
    <Container center>
      <Flex flow="col">
        <Text as="h2">Sign in</Text>
        <Form>
          <Label center gap="3">
            <CheckBox />
            Phone number
          </Label>
        </Form>
      </Flex>
    </Container>
  );
};

const Form = styled('form', Flex, {});

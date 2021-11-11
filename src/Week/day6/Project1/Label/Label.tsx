import React from 'react';
import {Flex} from '@components/Flex';
import {styled} from '@stitchesConfig';

type StyledLabelProps = React.ComponentPropsWithoutRef<typeof StyledLabel>;
type Props = React.ComponentPropsWithoutRef<'label'> & StyledLabelProps;

export const Label: React.FC<Props> = (props) => {
  const {children, ...rest} = props;
  return <StyledLabel {...rest}>{children}</StyledLabel>;
};

const StyledLabel = styled('label', Flex, {
  fontFamily: 'system-ui, sans-serif',
  fontSize: '$3',
  fontWeight: 500,
  color: '#181818',
  userSelect: 'none',
});

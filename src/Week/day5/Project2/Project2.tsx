import {Container} from '@components/Container';
import {styled} from '@stitchesConfig';
import React from 'react';

export const Project2 = () => {
  return (
    <Container flow="col" center>
      <CheckBox>CheckBox</CheckBox>
      <CheckBox>CheckBox</CheckBox>
    </Container>
  );
};

const StyledCheckBox = styled('label', {
  fontFamily: 'system-ui , sans-serif',
  fontSize: '2rem',
  fontWeight: 'bold',
  lineHeight: '1.1',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',

  '& + label': {
    marginTop: '1rem',
  },

  '& input[type="checkbox"]': {
    // remove old checkbox
    appearance: 'none',
    backgroundColor: '#fff',
    margin: '0',

    font: 'inherit',
    color: 'CurrentColor',
    width: '1.15em',
    height: '1.15em',
    border: '0.15em solid CurrentColor',
    borderRadius: '0.15em',
    transform: 'translateY(-0.075em)',

    display: 'flex',
    placeContent: 'center',
    placeItems: 'center',
  },

  '& input[type="checkbox"]::before': {
    content: '',
    width: '0.65em',
    height: '0.65em',
    transform: 'scale(0)',
    transition: '120ms transform ease-in-out',
    boxShadow: 'inset 1em 1em CurrentColor',
    transformOrigin: 'bottom left',
    clipPath: 'polygon(10% 65%, 2% 78%, 39% 98%, 84% 25%, 72% 18%, 34% 78%)',
  },

  '& input[type="checkbox"]:checked::before': {
    transform: 'scale(1)',
  },

  '& input[type="checkbox"]:focus': {
    outline: 'max(2px, 0.15em) solid CurrentColor',
    outlineOffset: 'max(2px, 0.15em)',
  },

  '& input[type="checkbox"]:disabled': {
    color: 'gray',
    cursor: 'not-allowed',
  },
});

type LabelProps = React.ComponentProps<typeof StyledCheckBox>;

type InputProps = React.ComponentProps<'input'>;

type CheckBoxProps = {
  labelProps?: LabelProps;
  inputProps?: InputProps;
};

export const CheckBox: React.FC<CheckBoxProps> = ({
  children,
  labelProps,
  ...inputProps
}) => {
  return (
    <>
      <StyledCheckBox {...labelProps}>
        <input type="checkbox" name="checkbox" {...inputProps} />
        {children}
      </StyledCheckBox>
    </>
  );
};

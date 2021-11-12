import {styled} from '@stitchesConfig';

const StyledInput = styled('input', {
  appearance: 'none',
  display: 'grid',
  placeContent: 'center',
  placeItems: 'center',
  backgroundColor: 'white',
  box: 'max(16px, 1.15em)',
  position: 'relative',
  color: 'CurrentColor',
  borderRadius: '0.15em',
  outline: 'none',

  '&:before': {
    content: '',
    position: 'absolute',
    box: '0.65em',
    backgroundColor: 'black',
    transform: 'scale(0)',
    transition: '120ms transform ease-in-out',
    transformOrigin: 'bottom left',
    clipPath: 'polygon(10% 65%, 2% 78%, 39% 98%, 84% 25%, 72% 18%, 34% 78%)',
  },

  '&:checked::before': {
    transform: 'scale(1)',
  },
});

type StyledInputProps = Omit<React.ComponentProps<typeof StyledInput>, 'type'>;

export const CheckBox = (props: StyledInputProps) => {
  return (
    <>
      <StyledInput {...props} type="checkbox" />
    </>
  );
};

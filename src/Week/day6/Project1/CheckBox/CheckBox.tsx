import {styled} from '@stitchesConfig';
import {Label} from '../Label';
import {CheckBoxProps} from './types';

export const CheckBox = (props: CheckBoxProps) => {
  const {checked, label, id, disabled, ...rest} = props;

  return (
    <Label gap="4" cross="center">
      <StyledInput
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        aria-checked={checked}
        role="checkbox"
        {...rest}
      />
      {label}
    </Label>
  );
};

const StyledInput = styled('input', {
  appearance: 'none',

  backgroundColor: '#fff',
  margin: '0',

  font: 'inherit',
  color: 'CurrentColor',
  box: 'max(16px, 1.15em)',
  border: '0.15em solid CurrentColor',
  borderRadius: '0.15em',
  outline: 'none',

  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',

  '&:before': {
    content: '',
    width: '0.65em',
    height: '0.65em',
    transform: 'scale(0)',
    transition: '120ms transform ease-in-out',
    boxShadow: 'inset 1em 1em CurrentColor',
    transformOrigin: 'bottom left',
    clipPath: 'polygon(10% 65%, 2% 78%, 39% 98%, 84% 25%, 72% 18%, 34% 78%)',
  },

  '&:checked::before': {
    transform: 'scale(1)',
  },

  '&:focus-visible': {
    outline: 'max(2px, 0.15em) solid CurrentColor',
    outlineOffset: 'max(2px, 0.15em)',
  },

  '&:disabled': {
    color: 'gray',
    cursor: 'not-allowed',
  },
});

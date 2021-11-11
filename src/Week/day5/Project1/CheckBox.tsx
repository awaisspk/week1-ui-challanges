import {styled} from '@stitches/react';

export const CheckBox: React.FC = ({children}) => {
  return (
    <Label>
      <Input type="checkbox" name="checkbox" />
      {children}
    </Label>
  );
};

const Label = styled('label', {
  fontFamily: 'system-ui , sans-serif',
  fontSize: '2rem',
  fontWeight: 'bold',
  lineHeight: '1.1',

  display: 'grid',
  gridTemplateColumns: '1rem auto',
  alignItems: 'center',
  gap: '5px',

  '& + label': {
    marginTop: '1em',
  },
});
const Input = styled('input', {});

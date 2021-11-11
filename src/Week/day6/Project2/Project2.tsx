import {Flex} from '@components/Flex';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {styled} from '@stitchesConfig';
import {CgCheck} from 'react-icons/cg';

export const CheckBox = () => {
  return (
    <Flex gap="4" main="center">
      <StyledCheckbox id="c1">
        <CheckboxIndicator>
          <CgCheck />
        </CheckboxIndicator>
      </StyledCheckbox>
      <Label htmlFor="c1">Accept terms and conditions</Label>
    </Flex>
  );
};

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
});

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {});
const Label = styled('label', {});

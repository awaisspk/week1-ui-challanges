import {Button} from '@components/Buttons';

export const LeftArrow = () => {
  return (
    <Button variant="circle">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 24L12 16L20 8"
          stroke="#757BB1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
};

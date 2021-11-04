import {Button} from '@components/Buttons';

export const RightArrow = () => {
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
          d="M12 8L20 16L12 24"
          stroke="#757BB1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
};

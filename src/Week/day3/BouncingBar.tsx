import {styled} from '@stitches/react';
import {motion, useAnimation} from 'framer-motion';
import {useState} from 'react';

export const BouncingBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isTapping, setIsTapping] = useState(false);
  const svgControls = useAnimation();
  return (
    <>
      <SVG viewBox="0 0 400 200">
        <svg viewBox="0 0 400 200" className="bar">
          <motion.path
            d="M 0 100 Q 200 100 400 100 L 400 200 L 0 200 Z"
            animate={svgControls}
          />
        </svg>
      </SVG>
    </>
  );
};

const SVG = styled('svg', {
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  fill: 'white',
  zIndex: 2,
});

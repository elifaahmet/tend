import styled from 'styled-components';

type SlideProps = {
  width: number;
  key: string;
  focused?: boolean;
  scaleOnFocus?: number;
};

const getScaleAnimation = (scaleOnFocus = 1, focused?: boolean) => {
  if (focused) {
    return `${scaleOnFocus}`;
  }

  return '1';
};

const Slide = styled.div<SlideProps>`
  display: block;
  width: ${(props) => props.width ? `${props.width}px` : 'auto'};
  outline: currentcolor none medium;
  transform: scale(${(props) => getScaleAnimation(props.scaleOnFocus, props.focused)});
`;

export default Slide;

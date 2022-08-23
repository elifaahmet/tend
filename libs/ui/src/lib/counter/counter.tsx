import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { variant } from 'styled-system';
import { Grid, Row, Col } from '../grid/grid';
import Paragraph from '../typography/paragraph/paragraph';

/* eslint-disable-next-line */
export interface CounterProps {
  min?: number;
  max: number;
  slideTo: 'min' | 'max';
  alt?: string;
}

const CounterDigit = styled(Col)`
  ${variant}
  padding-right: 10px;
  border: 2px solid #173d38;
  border-radius: 1px;
  color: #000;
  background-color: #fff;
  font-size: 2.5rem;
  align-items: center;
  text-align: center;
  justify-content: 'center';
  flex: 1;
`;

export function Counter(props: CounterProps) {
  const { min, max, slideTo, alt } = props;
  const maxDigits = `${max}`.length;
  const [count, setCount] = useState(slideTo === 'max' ? min : max);

  useEffect(() => {
    const increment = () => {
      if (count >= max) return;

      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 1 / (max * 1000000));

      return () => clearTimeout(timer);
    };

    const decrement = () => {
      if (count <= min) return;

      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1 / (max * 1000000));

      return () => clearTimeout(timer);
    };

    return slideTo === 'max' ? increment() : decrement();
  }, [count, max, min, slideTo]);

  const countText = `${count}`.padStart(maxDigits, '0');
  const digits = [];
  for (let i = 0; i < maxDigits; i++) {
    digits.push(
      <CounterDigit xs={0.5} sm={1} md={1} lg={1.5} align="center" justify="center">
        <Paragraph bold color="black" variant="b3">
          {countText[i] ? countText[i] : '0'}
        </Paragraph>
      </CounterDigit>
    );
  }
  return (
    <Grid>
      <Row align="center" justify="center">
        {digits}
      </Row>
      <Row align="center" justify="center">
        <Paragraph color="offWhite" variant="b6">
          {alt}
        </Paragraph>
      </Row>
    </Grid>
  );
}

Counter.defaultProps = {
  min: 0,
  slideTo: 'max',
};

export default Counter;

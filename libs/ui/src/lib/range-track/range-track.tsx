import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { get } from '@styled-system/core';
import styled from 'styled-components';

import H5 from '../typography/headlines/h5/h5';
import Paragraph from '../typography/paragraph/paragraph';
import theme from '../theme';


//@TODO Do props really need to be handled this way? React already allows us to pas props in a more natural way.

export interface RangeTrackProps {
  min: number,
  max: number,
  values: Array<number>,
  step: number,
  question: string,
  onValueChange: (value: Array<number>) => void,
  formatValue: (value: string) => string,
};

const StyledRangeTrack = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  > * {
    margin-bottom: 0.4rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  flex: 1;
`;

const TrackOutsideDiv = styled.div`
  height: 2rem;
  display: flex;
  width: 100%;
`;

const TrackInsideDiv = styled.div`
  height: 2rem;
  display: flex;
  width: 100%;
  height: 0.75rem;
  align-self: center;
`;

const ThumbOutsideDiv = styled.div`
  height: 2.5rem;
  width: 6.5rem;
  border: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
`;

const ThumbDiv = styled.div
<
  { isDragged : boolean }
>`
  height: 1.5rem;
  width: 0.3rem;
  background: ${get(theme, 'colors.offWhite')};
  margin-bottom: 0.75rem;
`;

const LabelDiv = styled.div`
  position: absolute;
  top: -2.5rem;
`;

export const RangeTrack = (rangeProps: RangeTrackProps) => {

  const [values, setValues] = useState(rangeProps.values);

  const { min, max, step, formatValue, question, onValueChange } = rangeProps;
  return (
    <StyledRangeTrack>
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={(values) => { setValues(values); onValueChange(values)}}
        renderTrack={({ props, children }) => (
            <TrackOutsideDiv
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
              }}
            >
              <TrackInsideDiv
                ref={props.ref}
                style={{
                  cursor: 'pointer',
                  background: getTrackBackground({
                    values: values,
                    colors: [get(theme, 'colors.offWhite'), `${get(theme, 'colors.offWhite')}20`],
                    min: min,
                    max: max
                  }),
                }}
              >
                {children}
              </TrackInsideDiv>
            </TrackOutsideDiv>
        )}
        renderThumb={({ props, isDragged }) => (
          <ThumbOutsideDiv
            {...props}
            style={{
              ...props.style,
              cursor: 'pointer',
            }}
          >
            <LabelDiv>
              <H5 color="black">
              { formatValue(values[0].toFixed(0))}
              </H5>
            </LabelDiv>
            <ThumbDiv isDragged={isDragged} />
          </ThumbOutsideDiv>
        )}
      />
      <Paragraph variant="b3" color="black"> { question } </Paragraph>
    </StyledRangeTrack>
  );
}

export default RangeTrack;

import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import P from '../../elements/article-p';


interface StyleProps {
  bg: string[];
}

interface props {
  color: string[];
  children: React.ReactChild;
}

const Container = styled.div<StyleProps>`
  ${color}
  padding-block-start: 1rem;
  padding-block-end: 1.5rem;
  P {
    margin-inline-start: 1.5rem;
    margin-inline-end: 1.5rem;
  }
  @media (min-width: 1440px) {
    padding-block-end: 1.5rem;
    margin-block-start: -4rem;
  }
`

const Title = styled(P)`
  font-size: 5.0625rem;
  font-weight: bold;
  margin-block-start: 0rem;
`
export const TLDR = ({color, children}: props) => {
  return (
    <Container bg={color}>
      <Title>TL;DR</Title>
      <P>{children}</P>
    </Container>
  )
}

export default TLDR;

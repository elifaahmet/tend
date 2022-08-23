import React from 'react';
import styled from 'styled-components';
import {color} from 'styled-system';
import TLDR from "./tldr";
import {Layout} from "@tend/ui";


interface props {
  firstColumnContent: React.ReactChild;
  quoteText?: string;
  TLDRText?: string;
  TLDRBgColor?: string;
  rightColumnExtraPadding?: number[];
  leftColumnExtraPadding?: number[];
  separatorLineColor?: string;
  layoutBgColor?: string;
  rightUpperContent?: React.ReactChild;
}

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] minmax(0,1fr));
  grid-column-gap: 1rem;

  @media (min-width: 520px) {
    grid-column-gap: 2.8125rem;
  }


  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(12, [col-start] 1fr);
  }
`;

interface LineProps {
  backgroundColor: string;
}

const VerticalLine = styled.div<LineProps>`
  position: relative;
  justify-content: center;
  align-items: center;
  display: none;



  &:after {
    ${color}
    content: '';
    position: absolute;
    display: block;
    right: -1.88rem;
    top: 0;
    width: .75rem;
    height: 100%;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    display: flex;
    &[data-area="top"] {
      min-height: 3.125rem;
      display: block;
      grid-column: 6 / span 1;
      grid-row: 1 / span 1 ;
    }

    &:after {
      right: -1.76rem;
    }
  }
`;

interface ColumnProps {
  rightColumnExtraPadding?: number[];
  leftColumnExtraPadding?: number[];
}


const FirstColumnMainTextWrapper = styled.div<ColumnProps>`
  grid-row: 2;
  font-weight: 400;
  font-size: 1.31rem;
  line-height: 1.575rem;
  grid-column: 1 / span 12;
  padding-block-start: ${props => (2.3 + props.leftColumnExtraPadding[0])}rem;
  padding-block-end: 0rem;

  h1 {
    line-height: 2.5rem;
  }


   @media (min-width: 550px) {
    padding-block-start: ${props => (0.3 + props.leftColumnExtraPadding[0])}rem;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-row: 1;
    grid-column: 1 / 7;
    padding-block-start: ${props => (2 + props.leftColumnExtraPadding[1])}rem;
    padding-block-end: 2rem;
  }
`;

const SecondColumnWrapper = styled.div<ColumnProps>`
  grid-row: 3;
  grid-column: 1 / span 12;
  padding-block-start: ${props => props.rightColumnExtraPadding[0]}rem;
  padding-block-end: 1rem;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-row: 1;
    grid-column: 7 / 11;
    padding-block-start: ${props => (2 + props.rightColumnExtraPadding[1])}rem;
    padding-block-end: 2rem;
  }
`;


const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;


const QuoteTextParagraph = styled.div`
  border-top: 0.6rem #F79234 solid;
  border-bottom: 0.6rem #FF5554 solid;
  margin-block-end: 0.5rem;
  padding-block-start: 0.5rem;
  padding-block-end: 1rem;
  font-family: 'Pilat Condensed';
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.469rem;
  z-index:3;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    max-width: 25rem;
    border-bottom: none;
    margin-block: 2rem;
  }
`;
const TooLong = styled.div`
  grid-column: 1 / span 12;
  grid-row: 1 / auto;
  z-index: 3;


  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-row: 1 / auto;
    grid-column: 8 / span 5;
  }


  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    grid-column: 9 / span 4;
  }

  @media (min-width: 1800px) {
    grid-column: 10 / span 3;
  }

`;


export const TwoColumnBody = ({
                                firstColumnContent,
                                quoteText,
                                rightUpperContent,
                                TLDRText,
                                TLDRBgColor,
                                separatorLineColor = "defaultRed",
                                layoutBgColor = "offWhite",
                                rightColumnExtraPadding = [0, 0],
                                leftColumnExtraPadding = [0, 0],
                              }: props) => {
  return (
    <Layout bg={layoutBgColor}>
      <GridLayout>
        {TLDRText && <TooLong>
          <TLDR color={[TLDRBgColor]}>
            {TLDRText}
          </TLDR>
        </TooLong>}
        <FirstColumnMainTextWrapper leftColumnExtraPadding={leftColumnExtraPadding}>
          {firstColumnContent}

        </FirstColumnMainTextWrapper>
        <VerticalLine backgroundColor={separatorLineColor} data-area="top"/>
        <SecondColumnWrapper rightColumnExtraPadding={rightColumnExtraPadding}>
          <ColumnFlex>
            <div>{rightUpperContent}</div>
            {quoteText && <>
              <QuoteTextParagraph>
                {quoteText}
              </QuoteTextParagraph>
              {rightUpperContent && <div/>}
            </>}
          </ColumnFlex>

        </SecondColumnWrapper>
      </GridLayout>
    </Layout>
  )
}

export default TwoColumnBody;

import React, { useEffect, useState } from 'react';


import { variant, space, layout, color } from 'styled-system'
import styled, { ThemeProps } from 'styled-components';

import { debounce } from '../carousel/helpers';
import Rectangle from '../rectangle/rectangle';
import {Grid, Row} from '../grid/grid';
import Layout from '../layout/layout';
import theme from '../theme';

const rectangleMarginArray = [1.5, 1.5, 2.25, 3];

export interface TLayoutProps {
    upperChild?: React.ReactNode,
        leftChild?: React.ReactNode,
        rightChild?: React.ReactNode,
        children?: React.ReactNode,
        outerPaddingLeft?: Array<string> | string,
        outerPaddingRight?: Array<string> | string,
        innerMarginBottom?: Array<string>,
        xs?: number,
        sm?: number,
        md?: number,
        lg?: number,
        variant?: 'center' | 'left' | 'right' | 'paddedRight',
        /* When the variant is center & on mobile or table and the component shrinks on which way should the left and right children stay */
        whenShrink?: 'left' | 'right',
        leftLineColor?: string,
        rightLineColor?: string,
        verticalLineColor?: string,
        lowerBg?: string,
        upperBg?: string,
        rightChildFullWidthOnShrink?: boolean,
        leftChildFullWidthOnShrink?: boolean,
}

const StyledTLayout = styled(Grid)`
  ${space};
  ${color};
  min-width: 100%;
`;

const LowerStyledTLayout = styled.div`
  ${space};
  display: flex;
  flex-direction: row;
  width: 100%;
`;

interface StyledChildrenLayoutProps {
    variant: 'center' | 'left' | 'right' | 'paddedRight';
    side: 'left' | 'right';
    whenShrink?: 'left' | 'right';
    children?: React.ReactNode | React.ReactNodeArray;
    innerMarginBottom?: Array<string>;
}

const StyledChildrenLayout = styled.div<StyledChildrenLayoutProps>`
  ${layout};
  ${space};
  display: flex;
  flex-direction: column;
  ${(props: StyledChildrenLayoutProps) =>
    variant({
        variants: {
            center: {
                width: (props.side === 'left' && props.whenShrink !== 'right') || (props.side !== 'left' && props.whenShrink === 'right')
                    ? '85%'
                    : '13%',
                paddingLeft: props.side === 'right' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
                paddingRight: props.side === 'left' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
            },
            left: {
                width: props.side === 'left' ?  '85%' : '13%',
                paddingLeft: props.side === 'right' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
                paddingRight: props.side === 'left' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
            },
            right: {
                width: props.side === 'left' ? '13%' : '85%',
                paddingLeft: props.side === 'right' ? rectangleMarginArray.map(rem => `${rem}rem`)  : 0,
                paddingRight: props.side === 'left' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
            },
            paddedRight: {
                width: props.side === 'left' ? '13%' : '85%',
                paddingLeft: props.side === 'right' ? rectangleMarginArray.map(rem => `${rem}rem`)  : 0,
                paddingRight: props.side === 'left' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
            },
        }
    })};
  @media (min-width: ${(props: StyledChildrenLayoutProps & ThemeProps<{ breakpoints: Array<string> }>) => (props.theme.breakpoints[2])}) {
    ${(props: StyledChildrenLayoutProps) =>
    variant({
        variants: {
            center: {
                width: '49%',
                // paddingLeft: props.side === 'right' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
                // paddingRight: props.side === 'left' ? rectangleMarginArray.map(rem => `${rem}rem`) : 0,
            },
            left: {
                width: props.side === 'left' ?  '77%' : '21%',
            },
            right: {
                width: props.side === 'left' ? '21%' : '77%',
            },
            paddedRight: {
                width: props.side === 'left' ? '26%' : '72%',
            },
        }
    })};
  }
`;

interface StyledChildrenDivProps {
    variant: 'center' | 'left' | 'right' | 'paddedRight',
        childType: 'left' | 'right',
        side: 'left' | 'right',
        whenShrink?: 'left' | 'right',
        children?: React.ReactNode,
        rightChildFullWidthOnShrink?: boolean,
        leftChildFullWidthOnShrink?: boolean,
}

const StyledChildrenDiv = styled.div<StyledChildrenDivProps>`
  display: flex;
`;



export const TLayout = (props: TLayoutProps) => {

    const [isMobile, setIsMobile] = useState(true);

    const handleWindowResize = () => {
        if(window.innerWidth >= parseInt(theme.breakpoints[2].replace('px', ''))) {
            setIsMobile(false);
        } else if(window.innerWidth < parseInt(theme.breakpoints[2].replace('px', ''))) {
            setIsMobile(true);
        }
    }

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const ChildrenDiv = (props: StyledChildrenDivProps) => {
        const variant = isMobile ? props.whenShrink : props.variant;
        if ((isMobile && variant === props.side) || (!isMobile && props.childType === props.side)){
            return (
                <StyledChildrenDiv
                    {...props}
                >
                    {props.children}
                </StyledChildrenDiv>
            );
        } else return null;
    }

    return (
        <>
            <Layout bg={props.upperBg}>
                <StyledTLayout bg={props.upperBg}>
                    <Row>
                        {props.upperChild}
                    </Row>
                    <Row>
                        <LowerStyledTLayout>
                            <StyledChildrenLayout
                                variant={props.variant}
                                side="left"
                                whenShrink={props.whenShrink}
                            >
                                <Rectangle
                                    type="left"
                                    rectangleColor={props.leftLineColor}
                                    marginBottom={props.innerMarginBottom}
                                    marginTop={props.innerMarginBottom}
                                />
                            </StyledChildrenLayout>
                            <Rectangle
                                rectangleColor="defaultTransparent"
                                type="vertical"
                            />
                            <StyledChildrenLayout
                                variant={props.variant}
                                side="right"
                                whenShrink={props.whenShrink}
                            >
                                <Rectangle
                                    type="right"
                                    rectangleColor={props.rightLineColor}
                                    marginBottom={props.innerMarginBottom}
                                    marginTop={props.innerMarginBottom}
                                />
                            </StyledChildrenLayout>
                        </LowerStyledTLayout>
                    </Row>
                </StyledTLayout>
            </Layout>

            <Layout  bg={props.lowerBg}>
                <StyledTLayout bg={props.lowerBg}>
                    <Row>
                        <LowerStyledTLayout>
                            <StyledChildrenLayout
                                variant={props.variant}
                                side="left"
                                whenShrink={props.whenShrink}
                            >
                                <ChildrenDiv
                                    childType="left"
                                    side="left"
                                    variant={props.variant}
                                    whenShrink={props.whenShrink}
                                    //leftChildFullWidthOnShrink={props.leftChildFullWidthOnShrink}
                                >
                                    {props.leftChild}
                                </ChildrenDiv>

                                <ChildrenDiv
                                    childType="right"
                                    side="left"
                                    variant={props.variant}
                                    whenShrink={props.whenShrink}
                                    rightChildFullWidthOnShrink={props.rightChildFullWidthOnShrink}
                                >
                                    {props.rightChild}
                                </ChildrenDiv>
                            </StyledChildrenLayout>

                            <Rectangle
                                rectangleColor={props.verticalLineColor}
                                type="vertical"
                                marginTop={props.innerMarginBottom ? '0rem' : rectangleMarginArray.map(rem => `${rem * (-1)}rem` )}
                                height={props.innerMarginBottom ? props.innerMarginBottom.map(rem => `calc(100% + ${rem})` ) : rectangleMarginArray.map(rem => `calc(100% + ${rem}rem)`)}
                            />
                            <StyledChildrenLayout
                                variant={props.variant}
                                side="right"
                                whenShrink={props.whenShrink}
                            >
                                <ChildrenDiv
                                    childType="left"
                                    side="right"
                                    variant={props.variant}
                                    whenShrink={props.whenShrink}
                                    //leftChildFullWidthOnShrink={props.leftChildFullWidthOnShrink}
                                >
                                    {props.leftChild}
                                </ChildrenDiv>

                                <ChildrenDiv
                                    childType="right"
                                    side="right"
                                    variant={props.variant}
                                    whenShrink={props.whenShrink}
                                    rightChildFullWidthOnShrink={props.rightChildFullWidthOnShrink}
                                >
                                    {props.rightChild}
                                </ChildrenDiv>
                            </StyledChildrenLayout>
                        </LowerStyledTLayout>
                    </Row>
                </StyledTLayout>
            </Layout>
        </>
    );
};

TLayout.defaultProps = {
    leftLineColor: 'neutral.4',
    rightLineColor: 'neutral.4',
    verticalLineColor: 'neutral.4',
    variant: 'left',
    upperBg: 'neutral.0',
    lowerBg: 'neutral.0',
    whenShrink: 'right',
};

export default TLayout;

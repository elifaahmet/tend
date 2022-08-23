import React from 'react';
import styled from 'styled-components';

import HeadlineBody from '../headline-body/headline-body';
import Icon from '../icon/icon';


export interface IconHeadlineBodyProps {
  variant: 'xl' | 'large' | 'medium' | 'small' | 'base';
  layout: 'horizontal' | 'vertical';
  children?: React.ReactNode;
  title: string;
  color?: string;
  marginBottom?: string;
}


const StyledIconHeadlineBody = styled.div`
  display: flex;
  flex-direction: ${(props: IconHeadlineBodyProps) => props.layout === 'horizontal' ? 'row' : 'column'};
  > * {
    margin-bottom: ${(props: IconHeadlineBodyProps) => props.layout === 'horizontal' ? '0rem' : '0.75rem'};
    margin-right: ${(props: IconHeadlineBodyProps) => props.layout === 'horizontal' ? '1rem' : '0rem'};
  }
  & :last-child {
    margin-right: 0rem;
    margin-bottom: 0rem;
  }
  justify-content: space-between;
  margin-bottom: ${(props: IconHeadlineBodyProps) => props.marginBottom}
`;

export const IconHeadlineBody = (props: IconHeadlineBodyProps) => {
  return (
    <StyledIconHeadlineBody
      {...props}
    >
      <Icon iconName="TendPlus" />
      <HeadlineBody
        title={props.title}
        variant={props.variant}
        color={props.color}
      >
        { props.children }
      </HeadlineBody>
    </StyledIconHeadlineBody>
  );
};

IconHeadlineBody.defaultProps = {
  variant: 'large',
  color: 'neutral.4',
  marginBottom: '2.5rem',
};

export default IconHeadlineBody;

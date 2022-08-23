import styled from 'styled-components';
import { variant } from 'styled-system';

import Icon from '../icon/icon';
import Paragraph from '../typography/paragraph/paragraph';

interface IconTextListProps {
  textList: Array<string>;
  gridRowGap?: string | Array<string>;
  gridColumnGap?: string | Array<string>;
  textVariant?: "b1" | "b2" | "b3";
  iconSize?: string | Array<string>;
  iconColor?: "defaultRed" | "defaultYellow" | "black";
}

interface StyledIconTextListProps {
  gridRowGap: string | Array<string>;
  variant: 'normal';
}

const StyledIconTextList = styled.div<StyledIconTextListProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${(props: StyledIconTextListProps) =>
    variant({
      variants: {
        normal: {
          '> *': {
            marginBottom:  props.gridRowGap,
          },
          '& :last-child': {
            marginBottom: '0rem',
          }
        },
      },
    })}
`;

interface StyledIconTextProps{
  gridColumnGap: string | Array<string>;
  variant: 'normal';
}
const StyledIconText = styled.div<StyledIconTextProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${(props: StyledIconTextProps) =>
    variant({
      variants: {
        normal: {
          '> *': {
            marginRight:  props.gridColumnGap,
          },
          '& :last-child': {
            marginRight: '0rem',
          }
        },
      },
    })}
`;

export function IconTextList(props: IconTextListProps) {
  let key=0;
  return (
    <StyledIconTextList
      gridRowGap={props.gridRowGap}
      variant="normal"
    >
      {props.textList.map((text: string) => {
        return (
          <StyledIconText
            gridColumnGap={props.gridColumnGap}
            variant="normal"
            key={key++}
            >
              <Icon
                iconName="TendPlus"
                colors={[
                  props.iconColor,
                  props.iconColor,
                  props.iconColor,
                  props.iconColor
                ]}
                svgHeight={props.iconSize}
                svgWidth={props.iconSize}
              />
              <div style={{width: '100%' }}>
                <Paragraph variant={props.textVariant}>
                  { text }
                </Paragraph>
              </div>
          </StyledIconText>
          );
        })
      }
    </StyledIconTextList>
  );
}

IconTextList.defaultProps = {
  gridRowGap: ['0.8rem','0.8rem','1.2rem','1.5rem'],
  gridColumnGap: ['0.6rem','0.6rem','0.8rem','1rem'],
  textVariant: 'b3',
  iconSize: "1.5rem",
  iconColor: 'defaultYellow',
};

export default IconTextList;


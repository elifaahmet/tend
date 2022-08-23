import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import { Layout } from '@tend/ui';
import styled from 'styled-components'
import {color} from 'styled-system';
import CategoryTag from '../../labels/category-tag';
import MembersContent from '../../labels/members-content';


import {H2, Paragraph, Rule, SocialMediaLink, Icon} from '@tend/ui';

import GridAspectImage from './grid-aspect-image';

interface IProps {
  categories: [
    {
      label: string;
      slug: string;
    }
  ];
  member: boolean;
  title: string;
  body: string;
  img: string;
  imageCredit?: string;
  host: string;
  author?: string;
  readDuration?: string;
}

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: repeat(5, [row-start] auto);
  grid-column-gap: 2.8125rem;
  margin-block-start: 1rem;

  @media (min-width: 836px) {
    grid-column-gap: 3.75rem;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    margin-block-start: 4rem;
  }
`;

const TLeft = styled.div`
  margin-block-end: 1.5rem;
  grid-column: 1 / span 4;
  grid-row: 1;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column: 1 / span 6;
    grid-row: 1;
  }
`;

const TRight = styled.div`
  margin-block-end: 1.5rem;
  grid-column: 5 / span 2;
  grid-row: 1;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column: 7 / span 6;
    grid-row: 1;
  }
`;

const VerticalLine = styled.div<LineProps>`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;

  &[data-area="top"] {
    min-height: 3.125rem;
    display: block;
    grid-column: 4 / span 1;
    grid-row: 2 / span 8 ;
  }

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
    &[data-area="top"] {
      min-height: 3.125rem;
      display: block;
      grid-column: 6 / span 1;
      grid-row: 2 / span 8 ;
    }

    &:after {
      right: -2.25rem;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  grid-column: 1 / span 4;
  grid-row: 3;
  padding-inline: 0.9rem;
  padding-block-start: 1.2rem;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    padding-inline: 0rem;
  }

`

const HeadlineContainer = styled.div`
  grid-column: 1 / span 4;
  grid-row: 4;
  margin-block-end: 1rem;
  padding-inline: 0.9rem;
  z-index: 3;

  & > h2 {
      font-size: 2.25rem;
  }


  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    & > h2 {
        font-size: 4rem;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    margin-block-end: 1.5rem;
    padding-inline: 0rem;
    grid-column: 1 / span 5;
    z-index: 9999;
  }

   @media (min-width: ${props => props.theme.breakpoints[2]}) {
     & > h2 {
        font-size: 6.5rem;
    }
  }
`;

const BodyContainer = styled.div`
  grid-column: 1 / span 4;
  grid-row: 5;
  padding-inline: 0.9rem;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column: 1 / span 5;
    z-index: 9999;
    padding-inline: 0rem;
  }
`;

const Author = styled.div`
  grid-column: 1 / span 6;
  grid-row: 6;
  margin-block-start: 3rem;
  display: flex;
  align-items: center;

  & > span {
    margin-inline-start: 0.9rem;
    font-size: 0.875rem;
    ${color}
  }
`;

const Share = styled.div`
  grid-column: 1 / span 6;
  grid-row: 7;
  margin-block: 1rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 10px;
  ${color}
`;


const ImageContainer = styled.div`
    grid-column: 1 / span 6;
    grid-row: 7;
    display: block;
    position: relative;
    width: 95%;


    & > span {
      position: relative;
      left: 2.2%;
      top: 1.3rem;
    }



  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column: 6 / -1;
    grid-row: 4 / span 4;
    max-width: 40rem;
    padding-block-end: 1rem;
    width: 100%;

    & > span {
      ${color}
      position: relative;
      left: 25%;
      top: 0.3rem;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    padding-block-end: 0rem;

    & > span {
      position: relative;
      left: 30%;
      top: -1rem;
    }
  }

  @media (min-width: 3400px) {
    & > span {
      left: 85%;
    }
  }
`;


interface LineProps {
  backgroundColor: string;
}

const SMLinks = styled.div`
  display: flex;
  align-items: center;

  & > a {
    margin-inline-start: 1rem;
  }
`;

const SMLinkSeparator = styled.div`
  height: 1rem;
  border: 1px solid #F6F6F1;
  margin-inline-start: 1rem;
`;

const MetaComments = styled.div`
  margin-inline-start: 1rem;
  display: flex;
  min-width: 2.1rem;
  align-items: center;

  & > span {
    margin-inline-start: 0.5rem;
  }
`

const ImageSize = styled.div`
* > img {
  max-height: 100%;
  max-width: 100%;
}
`;

const TierHero = (props: IProps) => {
  const {categories, member, title, body, img, host, readDuration, author, imageCredit} = props;

  const router = useRouter();
  /**
   * @tech-debt
   *
   * needs to be added as env variables
   */
  const hardcodedHost = 'tend.money';

  const openFBShare = () => {
    if (typeof window !== 'undefined' && Object.hasOwnProperty.bind(window, 'FB')()) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.FB?.ui({
        method: 'share',
        display: 'popup',
        href: 'https://' + (host ? host : hardcodedHost) + router.basePath + router.asPath,
      });
    }
  };

  const [hashtags, setHashtags] = useState('');

  useEffect(() => {
    let hashtags = '';
    categories.forEach((category, index) => {
      if (index !== 0) {
        hashtags += ', '
      }
      hashtags += category.label.substring(1);
    });
    setHashtags(hashtags);
  }, []);

  return (
    <Layout bg="defaultGreen" fullWidthOnMobile={true}>
      <ImageSize>
        <GridLayout>
          <TLeft>
            <Rule ruleColor="defaultYellow" size={12}/>
          </TLeft>

          <TRight>
            <Rule ruleColor="defaultOrange" size={12}/>
          </TRight>

          <VerticalLine backgroundColor="defaultRed" data-area="top"/>

          <Tags>
            {categories.map((category, i) => {
              return (
                <CategoryTag
                  key={i}
                  href={category.slug}
                  value={category.label}/>
              )
            })}

            {member && (
              <MembersContent/>
            )}
          </Tags>

          <HeadlineContainer>
            <H2 fontSize={['2.25rem', '2.25rem', '5rem']} color={["white"]}>{title}</H2>
          </HeadlineContainer>

          <BodyContainer>
            <Paragraph color="white" variant="b2">
              {body}
            </Paragraph>

            {author && <Author color={'offWhite'}>
              <Icon iconName={'AuthorProfile'} svgWidth={['1.8rem', '1.8rem', '1.8rem']}/>
              <span>{author}</span>
            </Author> }
            <Share color={'offWhite'}>
              <div>
                {readDuration}
              </div>
              <SMLinkSeparator/>
              {/*<MetaComments>*/}
              {/*  <Icon iconName={'Comment'} color={'neutral.0'}/>*/}
              {/*  <span>45</span>*/}
              {/*</MetaComments>*/}
              {/*<SMLinkSeparator/>*/}
              <SMLinks>
                <SocialMediaLink fontSize="0.5rem" theme="dark" name="Twitter" noBorder variant={'extraSmall'}
                                 href={`https://twitter.com/intent/tweet?text=${title}&hashtags=${hashtags}&url=${encodeURIComponent(('https://' + (host ? host : hardcodedHost)) + router.basePath + router.asPath)}&via=tendmoney`}

                />
                <SocialMediaLink fontSize="0.5rem" theme="dark" name="Facebook" noBorder variant={'extraSmall'}
                                 onClick={openFBShare}/>
              </SMLinks>
            </Share>
          </BodyContainer>


          <ImageContainer color={'white'}>
            <GridAspectImage src={img}/>
            {imageCredit && <span>{imageCredit}</span>}
          </ImageContainer>


        </GridLayout>
      </ImageSize>
    </Layout>
  );
};

export default TierHero;

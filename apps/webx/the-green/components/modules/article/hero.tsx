import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import styled from 'styled-components'
import { color } from 'styled-system';
import CategoryTag from '../../labels/category-tag';
import MembersContent from '../../labels/members-content';

import { H2, Paragraph, Rule, SocialMediaLink } from '@tend/ui';

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
  host: string;
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

  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    margin-block-start: 4rem;
  }
`;

const TLeft = styled.div`
  margin-block-end: 1.5rem;
  grid-column: 1 / span 4;
  grid-row: 1;

  @media (min-width: 1440px) {
    grid-column: 1 / span 6;
    grid-row: 1;
  }
`;

const TRight = styled.div`
  margin-block-end: 1.5rem;
  grid-column: 5 / span 2;
  grid-row: 1;

  @media (min-width: 1440px) {
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

  @media (min-width: 836px) {
    &:after {
      right: -2.25rem;
    }
  }

  @media (min-width: 1440px) {
    &[data-area="top"] {
      min-height: 3.125rem;
      display: block;
      grid-column: 6 / span 1;
      grid-row: 2 / span 8 ;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  grid-column: 1 / span 4;
  grid-row: 3;
`

const HeadlineContainer = styled.div`
  grid-column: 1 / span 4;
  grid-row: 4;
  margin-block-end: 1rem;

  @media (min-width: 1440px) {
    margin-block-end: 1.5rem;
    grid-column: 1 / span 6;
    z-index: 9999;
  }
`;

const BodyContainer = styled.div`
  grid-column: 1 / span 4;
  grid-row: 5;

  @media (min-width: 1440px) {
    grid-column: 1 / span 6;
    z-index: 9999;
  }
`;

const Share = styled.div`
  grid-column: 1 / span 6;
  grid-row: 6;
  margin-block-start: 3rem;
  margin-block-end: 3rem;
`;

const ImageContainer = styled.div`
    grid-column: 1 / span 6;
    grid-row: 7;
    display: block;

  @media (min-width: 1440px) {
    grid-column: 6 / span 6;
    grid-row: 4 / span 4;
  }
`;

interface LineProps {
  backgroundColor: string;
}

const SMLinks = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(3, [col-start] min-content);
  margin-block-start: 2rem;
`;

const Hero = (props: IProps) => {
  const { categories, member, title, body, img, host } = props;

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
  },[]);

  return (
    <GridLayout>
      <TLeft>
        <Rule ruleColor="defaultYellow" size={12} />
      </TLeft>

      <TRight>
        <Rule ruleColor="defaultOrange" size={12} />
      </TRight>

      <VerticalLine backgroundColor="defaultRed" data-area="top" />

      <Tags>
        {categories.map((category, i) => {
          return (
            <CategoryTag
              key={i}
              href={category.slug}
              value={category.label} />
          )
        })}

        {member && (
          <MembersContent />
        )}
      </Tags>

      <HeadlineContainer>
        <H2 fontSize={['2.25rem', '2.25rem', '5rem']} color={["white"]}>{title}</H2>
      </HeadlineContainer>

      <BodyContainer>
        <Paragraph color="white" variant="b2">
          {body}
        </Paragraph>

        <Share>

        <SMLinks>
          <SocialMediaLink fontSize="0.5rem" theme="dark" name="Twitter"
                           href={`https://twitter.com/intent/tweet?text=${title}&hashtags=${hashtags}&url=${encodeURIComponent(('https://' + (host ? host : hardcodedHost)) + router.basePath + router.asPath)}&via=tendmoney`}

          />
          <SocialMediaLink fontSize="0.5rem" theme="dark" name="Facebook" onClick={openFBShare} />
        </SMLinks>
        </Share>
      </BodyContainer>


      <ImageContainer>
          <GridAspectImage src={img} />
      </ImageContainer>

    </GridLayout>
  );
};

export default Hero;

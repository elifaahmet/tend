/** @format */

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import CountrySwitcher from '../country-switcher';

import {
  Layout,
  Grid,
  Row,
  Col,
  Logo,
  Paragraph,
  Label,
  Anchor,
  LanguageSwitcher,
  SocialMediaLink,
  DownloadAppButton,
  Theme,
} from '@tend/ui';
import Space from './space';
import { useRouter } from 'next/router';

interface Navigation {
  map(arg0: (el: Navigation, i: string) => JSX.Element): React.ReactNode;
  filter(arg0: (el: Navigation) => boolean): Navigation;
  title: string;
  slug?: string;
  meta: {
    background: string;
    color: string;
  };
  children: Array<{
    title: string;
    slug: string;
  }>;
}

const StyledAnchor = styled(Anchor)`
  text-transform: none;
  &:visited {
    color: ${() => Theme.colors['offWhite']};
    text-transform: none;
  }
`;

interface GridRowDivProps {
  gridColumnGap?: string;
  gridRowGap?: string;
  direction?: string;
}

const GridRowDiv = styled.div<GridRowDivProps>`
  display: flex;
  flex-direction: ${(props: GridRowDivProps) => props.direction || `column`};
  width: 100%;
  > * {
    margin-bottom: ${(props: GridRowDivProps) =>
      props.direction === 'row' ? '0rem' : props.gridRowGap};
    margin-right: ${(props: GridRowDivProps) =>
      props.direction === 'row' ? props.gridColumnGap : '0rem'};
  }
  & :last-child {
    margin-right: 0rem;
    margin-bottom: 0rem;
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    flex-direction: row;
    > * {
      margin-right: ${(props: GridRowDivProps) => props.gridColumnGap};
      margin-bottom: 0rem;
    }
    & :last-child {
      margin-right: 0rem;
      margin-bottom: 0rem;
    }
  } ;
`;

interface GridColumnDivProps {
  gridRowGap: string;
}

const GridColumnDiv = styled.div<GridColumnDivProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  > * {
    margin-bottom: ${(props: GridColumnDivProps) => props.gridRowGap};
  }
  & :last-child {
    margin-bottom: 0rem;
  }
`;

const getOtherLinks = (navigation: Navigation | Navigation[], t) => {
  return (
    <GridColumnDiv gridRowGap="0.5rem">
      <Space>
        <Label variant="l3" color="offWhite" bold>
          {t('common:other')}
        </Label>
      </Space>
      {navigation.map((el) => (
        <Link href={el.slug} key={el.slug}>
          <StyledAnchor color="offWhite">{el.title}</StyledAnchor>
        </Link>
      ))}
    </GridColumnDiv>
  );
};

const GetLinks = (navigation: Navigation[], t) => {
  const { locale } = useRouter();
  const isLocaleMX = !!locale.match(/mx/i);
  const navigationWithChildren = navigation
    .filter((el) => !!el.children)
    .map((el) => {
      if (isLocaleMX && el.title.match(/ayuda/i))
        el.children = el.children.filter((el) => !el.slug.match(/faq/i));
      return el;
    });
  const otherNavigation = isLocaleMX
    ? navigation
        .filter((el) => !el.children)
        .filter((el) => el.slug !== 'the-green')
    : navigation.filter((el) => !el.children);

  return (
    <GridColumnDiv gridRowGap="1.5rem">
      <GridRowDiv gridRowGap="1.5rem">
        <GridColumnDiv gridRowGap="0.5rem">
          <Space>
            <Label variant="l3" color="offWhite" bold>
              {navigationWithChildren[0].title}
            </Label>
          </Space>
          {navigationWithChildren[0].children?.map((el) => (
            <Link href={el.slug} key={el.slug}>
              <StyledAnchor color="offWhite">{el.title}</StyledAnchor>
            </Link>
          ))}
          <Space marginTop="2rem">
            <Label variant="l3" color="offWhite" bold>
              {navigationWithChildren[2].title}
            </Label>
          </Space>
          {navigationWithChildren[2].children?.map((el) => (
            <Link href={el.slug} key={el.slug}>
              <StyledAnchor color="offWhite">{el.title}</StyledAnchor>
            </Link>
          ))}
        </GridColumnDiv>
        <GridColumnDiv gridRowGap="0.5rem">
          <Space>
            <Label variant="l3" color="offWhite" bold>
              {navigationWithChildren[1].title}
            </Label>
          </Space>
          {navigationWithChildren[1].children?.map((el) => (
            <Link href={el.slug} key={el.slug}>
              <StyledAnchor color="offWhite">{el.title}</StyledAnchor>
            </Link>
          ))}
          <Space marginTop="2rem">{getOtherLinks(otherNavigation, t)}</Space>
        </GridColumnDiv>
      </GridRowDiv>
    </GridColumnDiv>
  );
};

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { locale, pathname } = router;
  const isLocaleMX = locale.slice(-2) === 'MX';
  const [, setCookie, removeCookie] = useCookies();
  const [isLocaleMXState, setIsLocaleMXState] = useState(isLocaleMX);

  const navigation: Navigation[] = t('navigation', {
    returnObjects: true,
  });

  useEffect(() => {
    setIsLocaleMXState(!!locale.match(/mx/i));
  }, [locale]);

  const updateLocaleCookie = (locale) => {
    removeCookie('NEXT_LOCALE');
    setCookie('NEXT_LOCALE', locale);
  };
  return (
    <Layout bg="darkGreen">
      <Grid fluid>
        <Row justify="flex-start" paddingBottom="1rem" paddingTop="2rem">
          <Col xs={2.2} sm={5} md={5} lg={8}>
            <Logo color="offWhite" />
          </Col>
          <Col align="flex-start" xs={1.8} sm={3} md={3} lg={4}>
            {<CountrySwitcher />}
          </Col>
        </Row>
        {/**
        {!isLocaleMX && (
          <Row justify="flex-start" paddingBottom="2rem">
            <Col xs={2.2} sm={5} md={5} lg={8}></Col>
            <Col align="flex-start" xs={1.8} sm={3} md={3} lg={4}>
              <LanguageSwitcher
                color="white"
                languages={['en', 'es']}
                onLanguageSelect={(language: string) => {
                  router.push(pathname, pathname, {
                    locale: `${language}-${locale.slice(-2)}`,
                  });
                  updateLocaleCookie(`${language}-${locale.slice(-2)}`);
                }}
                selected={locale.slice(0, 2)}
              />
            </Col>
          </Row>
        )}
         **/}
        <Row
          justify="flex-start"
          paddingBottom="0.625rem"
          paddingTop="0.625rem"
        >
          <Col xs={2.2} sm={5} md={5} lg={8}>
            {GetLinks(navigation, t)}
          </Col>
          <Col xs={1.8} sm={3} md={3} lg={4}>
            <Row
              align="flex-end"
              justify="flex-start"
              paddingBottom="0.32rem"
              paddingTop="0.32rem"
            >
              <GridColumnDiv gridRowGap="1rem">
                <meta name="format-detection" content="telephone=no" />
                <Space>
                  <Paragraph
                    textTransform="uppercase"
                    marginTop="0rem"
                    color="offWhite"
                    variant="b2"
                    bold
                  >
                    {t('common:contact.title')}
                  </Paragraph>
                </Space>
                <Space>
                  <Paragraph marginTop="0rem" color="offWhite" variant="b3">
                    {t('common:contact.email')}
                  </Paragraph>
                </Space>
                <Space>
                  <Label marginTop="0rem" color="offWhite" variant="b3">
                    {t('common:contact.tel')}
                  </Label>
                </Space>
                <Space>
                  <Paragraph marginTop="0rem" color="offWhite" variant="b3">
                    {t('common:contact.working-hours')}
                  </Paragraph>
                </Space>
                <Space marginTop="1rem" marginBottom="3rem">
                  <GridRowDiv gridColumnGap="1rem" direction="row">
                    <SocialMediaLink
                      fontSize="1rem"
                      theme="dark"
                      name="Instagram"
                      href="https://www.instagram.com/tendmoney/"
                    />
                    <SocialMediaLink
                      fontSize="1rem"
                      theme="dark"
                      name="Twitter"
                      href="https://twitter.com/tendmoney"
                    />
                    <SocialMediaLink
                      fontSize="1rem"
                      theme="dark"
                      name="Facebook"
                      href="https://www.facebook.com/tendmoney"
                    />
                  </GridRowDiv>
                </Space>
                <Space marginTop="1rem">
                  <DownloadAppButton
                    imgWidth={['7.7rem', '10rem']}
                    src={t('common:images.app-store')}
                    href={t('common:app-urls.app-store')}
                    fontSize="0.8rem"
                    resizeMode={'fill'}
                    imgHeight={['2.5rem', '3.38rem']}
                    store="app store"
                  />
                </Space>
                <DownloadAppButton
                  imgWidth={['8.3rem', '11.3rem']}
                  src={t('common:images.google-play')}
                  href={t('common:app-urls.google-play')}
                  fontSize="0.8rem"
                  resizeMode={'fill'}
                  imgHeight={['2.5rem', '3.38rem']}
                  store="google play"
                />
              </GridColumnDiv>
            </Row>
          </Col>
        </Row>
        <Row paddingBottom="2rem" justify="flex-start" align="flex-end">
          {!isLocaleMXState &&
            <Col align="flex-start" xs={4} sm={5} md={5} lg={4}>
              <Space marginTop={['1rem', '1rem', '1rem', '-3rem']}>
                <GridRowDiv gridColumnGap="1rem" direction="row">
                  <Link href="/privacy">
                    <Anchor fontSize={['0.75rem', '0.75rem', '1rem', '1rem']}>
                      {t('common:privacy.title')}
                    </Anchor>
                  </Link>

                  <Link href="/terms">
                    <Anchor fontSize={['0.75rem', '0.75rem', '1rem', '1rem']}>
                      {t('common:terms.title')}
                    </Anchor>
                  </Link>
                </GridRowDiv>
              </Space>
            </Col>
          }
          <Col align="flex-start" xs={4} sm={3} md={3} lg={2}>
            <Space marginTop={['0rem', '0rem', '0rem', '-4rem']}>
              <Paragraph marginTop="1rem" color="offWhite" variant="b4">
                {`© ${new Date().getFullYear()} TEND MONEY`}
              </Paragraph>
            </Space>
          </Col>
        </Row>
        {!isLocaleMXState && (
          <Row paddingBottom="2rem" justify="flex-start" align="flex-end">
            <Col align="flex-start">
              <Space
                marginTop={['1.8rem', '1.8rem', '2.8rem', '3.8rem']}
                marginBottom={['1.8rem', '1.8rem', '2.8rem', '3.8rem']}
              >
                <Paragraph variant="b6" color="offWhite">
                  {t('common:disclosures.dive_bar')}
                </Paragraph>
                <Paragraph marginTop="1.8rem" variant="b6" color="offWhite">
                  {t('common:disclosures.cashback')}
                </Paragraph>
              </Space>
            </Col>
          </Row>
        )}
      </Grid>
    </Layout>
  );
};

export default Footer;

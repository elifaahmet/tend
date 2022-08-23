import React, {useEffect, useMemo, useState} from 'react';
import styled from 'styled-components';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';

import { DownloadAppButton, Label, Logo, Paragraph, SocialMediaLink } from '@tend/ui';
import Grid from '../layout/grid';
import NavigationLink from '../elements/navigation-link';
import {useRouter} from "next/router";
import {getMarketingBaseURL} from "../../utils/helpers";


interface Navigation {
  map(arg0: (el: Navigation, i: string) => JSX.Element): React.ReactNode;
  filter(arg0: (el: Navigation) => boolean): Navigation;
  title: string;
  slug: string;
  meta?: {
    background: string;
    color: string;
  };
  children: Array<{
    title: string;
    slug: string;
  }>;
}

const Layout = styled(Grid)`
  grid-row-gap: 1rem;
  margin-block-end: 3rem;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-areas:
      "LG LG LG LG LG LG"
      "LK LK LK CT CT CT"
      "LK LK LK A A A"
      "P P P . . ."
      "TM TM TM . . ."
    ;
  @media (min-width: 376px) {
    grid-template-areas:
      "LG LG LG LG LG LG"
      "LK LK LK CT CT CT"
      "LK LK LK A A A"
      "P P P TM TM TM";
  }

  @media (min-width: 836px) {
    grid-template-areas:
    "LG LG LG LG LG LG"
    "LK LK LK LK CT CT"
    "P  P  TM TM A  A";
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-template-areas:
    "LG LG LG LG LG LG LG LG LG LG LG LG"
    "LK LK LK LK LK LK LK LK CT CT CT CT"
    "P P P P TM TM TM TM A A A A";
  }
`;

const LogoArea = styled.div`
  margin-block-start: 2rem;
  margin-block-end: 3rem;
  grid-area: LG;
`;


const Links = styled(Grid)`
  grid-area: LK;
  grid-row-gap: 2rem;
  grid-template-areas:
    "BK BK BK"
    "SP SP SP"
    "E E E"
    "O O O";

  @media (min-width: 836px) {
    grid-template-columns: repeat(4, [col-start] 1fr);
    grid-template-areas:
    "BK BK E E"
    "BK BK O O"
    "SP SP O O";

  }


  @media (min-width: 1440px) {
    grid-template-columns: repeat(8, [col-start] 1fr);
    grid-template-areas:
    "BK BK BK BK E E E E"
    "BK BK BK BK O O O O"
    "SP SP SP SP O O O O";
  }
`;

const Contact = styled.div`
  grid-area: CT;
  display: grid;
  grid-row-gap: 1rem;
`;

const Banking = styled.div`
  grid-area: BK;
`;

const Support = styled.div`
  grid-area: SP;
`;

const Earn = styled.div`
  grid-area: E;
`;

const Other = styled.div`
  grid-area: O;
`;

const TendMoney = styled.div`
  grid-area: TM;
  align-self: flex-end;
`;

const Privacy = styled.div`
  grid-area: P;
  align-self: flex-end;
`;

interface NavLinksProps {
  title: string;
  navigation: Navigation;
  marketingBaseUrl: string;
}

const NavLinks = styled.div`
  display: grid;
  grid-row-gap: 0.5rem;
  grid-template-rows: repeat(5, min-content);
`;

const SMLinks = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(3, [col-start] min-content);
  margin-block-start: 2rem;
`;

const Apps = styled.div`
  grid-area: A;
  display: grid;
  grid-row-gap: 1rem;
`;

const StyledNavLinks = (props: NavLinksProps) => {
  return (
    <NavLinks>
      <Label variant="l3" color= "offWhite" bold>{props.title}</Label>
        { props.navigation.map(el =>
          (
            <NavigationLink
              href={`${props.marketingBaseUrl}/${el.slug}`}
              key={el.slug}
              color= "offWhite"
              value={el.title}
            />
          ))
        }
    </NavLinks>
  );
}

// Keys should match common.json translation file navigation field members
const SPECIFIC_MEMBERS_AND_WRAPPER_COMPONENTS_OF_NAVIGATION = {
  bank: Banking,
  support: Support,
  earn: Earn,
};

const Footer = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const marketingBaseUrl = useMemo(() => getMarketingBaseURL(locale), [locale]);
  const isLocaleMX = locale.slice(-2) === 'MX';
  const [isLocaleMXState, setIsLocaleMXState] = useState(isLocaleMX);
  const navigation: Navigation = t('navigation', {
    returnObjects: true
  });

  useEffect(() => {
    setIsLocaleMXState(!!locale.match(/mx/i));
  }, [locale]);



  const navigationItems = useMemo(() => {


    const navigationItems = Object.keys(SPECIFIC_MEMBERS_AND_WRAPPER_COMPONENTS_OF_NAVIGATION).map(item =>  [navigation.filter(el => el.slug === item)[0], SPECIFIC_MEMBERS_AND_WRAPPER_COMPONENTS_OF_NAVIGATION[item]]);

    const otherNavigation = {children: navigation.filter(el => !el.children), title: t('Other')};
    navigationItems.push([otherNavigation, Other]);


    return navigationItems;
  }, [navigation, t]);


  const googlePlayImageUrl = usePrefixedWithBasePath(t('images.google-play'));
  const appleAppStoreImageUrl = usePrefixedWithBasePath(t('images.app-store'));

  return (
    <Layout>
      <LogoArea>
        <Logo color="offWhite" />
      </LogoArea>
      <Links>
        {navigationItems.map(item => {
          const [navigationItem, WrapperComponent] = item;
          return (
            <React.Fragment key={navigationItem.title}>
            <WrapperComponent>
              <StyledNavLinks
                title={navigationItem.title}
                navigation={navigationItem.children}
                marketingBaseUrl={marketingBaseUrl}
              />
            </WrapperComponent>
            </React.Fragment>
          )
        })}
      </Links>
      <Contact>
        <Paragraph textTransform="uppercase" marginTop="0rem" color="offWhite" variant="b2" bold>
          {t('contact.title')}
        </Paragraph>
        <Paragraph  marginTop="0rem" color="offWhite" variant="b3">
        {t('contact.email')}
        </Paragraph>
        <Label  marginTop="0rem" color="offWhite" variant="b3">
          {t('contact.tel')}
        </Label>
        <Paragraph  marginTop="0rem" color="offWhite" variant="b3">
          {t('contact.working-hours')}
        </Paragraph>
        <SMLinks>
          <SocialMediaLink variant={'small'} fontSize="1rem" theme="dark" name="Instagram" href={t('social-media-links.instagram')}/>
          <SocialMediaLink variant={'small'} fontSize="1rem" theme="dark" name="Twitter" href={t('social-media-links.twitter')}/>
          <SocialMediaLink variant={'small'} fontSize="1rem" theme="dark" name="Facebook" href={t('social-media-links.facebook')} />
        </SMLinks>
      </Contact>
      {!isLocaleMXState &&
        <Privacy>
          <NavigationLink
            href={`${marketingBaseUrl}/privacy`}
            color= "offWhite"
            fontSize={['0.75rem', '0.75rem', '1rem', '1rem']}
            value={t('privacy.title')}
          />
        </Privacy>
      }
      <TendMoney>
        <Paragraph  marginTop="0rem" color="offWhite" variant="b4">
          {`© ${new Date().getFullYear()} ${t('Copyright')}`}
        </Paragraph>
      </TendMoney>
      <Apps>
        <DownloadAppButton
          imgWidth={["95%", "10rem", "12rem", "14rem"]}
          src={googlePlayImageUrl}
          href="https://play.google.com/store/apps/details?id=money.tend.app"
          fontSize="0.8rem"
          store="google play"
        />
        <DownloadAppButton
          imgWidth={["95%", "10rem", "12rem", "14rem"]}
          src={appleAppStoreImageUrl}
          href="https://apps.apple.com/us/app/tend-money/id1554963043"
          fontSize="0.8rem"
          store="app store"
        />
      </Apps>
     </Layout>
  );
};

export default Footer;

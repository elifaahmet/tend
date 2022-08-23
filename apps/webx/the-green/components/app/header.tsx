import React, {useMemo} from 'react';
import styled from 'styled-components';
import { background, color } from 'styled-system';
import { Layout, CTALink, Anchor } from '@tend/ui';
import Link from 'next/link';

import { ReactComponent as TheGreenLogo } from '../../public/images/the-green-logo.svg';

import SignIn from '../modules/sign-in/sign-in';
import MembersOnlyInfo from '../modules/members-only-info/members-only-info';
import LogOut from '../modules/log-out';
import useAuth from '../../hooks/use-auth';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import {useRouter} from "next/router";
import {getMarketingBaseURL} from "../../utils/helpers";


const StyledWrapper = styled.div`
  z-index: 999999;
  display: block;
  ${color}
  ${background}
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-column-gap: 2.8125rem;
  grid-row-gap: 3rem;
  grid-template-areas: 'Logo Logo Logo Menu Menu Menu';
  @media (min-width: 836px) {
    grid-column-gap: 3.75rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-template-areas: 'Logo Logo Logo . . . . . . Menu Menu Menu';
  }
`;

const Logo = styled.div`
  grid-area: Logo;
`;

const LogoWrapper = styled.span`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: 7.5rem;
  @media (min-width: 376px) {
    width: 8rem;
  }
  @media (min-width: 836px) {
    width: 12rem;
  }
  @media (min-width: 1024px) {
    width: 15rem;
  }
`;

const Menu = styled.div`
  grid-area: Menu;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-direction: row-reverse;

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-self: start;
  }
`;

const Info = styled.div`
  grid-area: Info;
  padding-inline-start: 0.5rem;
`;

const Login = styled.div`
  grid-area: SI;
  padding-inline-start: 0.5rem;

  button {
    @media (min-width: 1440px) {
      padding-inline-start: 0.75rem;
      padding-inline-end: 0.75rem;
    }
  }
`;

const NavLink = styled.div`
  grid-area: NL;
  padding-inline-start: 0.5rem;
  display: none;

  @media (min-width: 1440px) {
    display: inline-block;
  }
`;

const Header = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const { locale } = useRouter();
  const marketingBaseUrl = useMemo(() => getMarketingBaseURL(locale), [locale]);
  return (
    <StyledWrapper>
      <Layout bg="defaultGreen">
        <GridLayout>
          <Logo>
            <Link href="/">
              <Anchor>
                <LogoWrapper>
                  <TheGreenLogo />
                </LogoWrapper>
              </Anchor>
            </Link>
          </Logo>

          <Menu>
            <Login>{user?.isLoggedIn ? <LogOut /> : <SignIn />}</Login>

            <Info>
              <MembersOnlyInfo />
            </Info>

            <NavLink>
              <CTALink href={marketingBaseUrl} color="white">{t('Back To Tend')}</CTALink>
            </NavLink>
          </Menu>
        </GridLayout>
      </Layout>
    </StyledWrapper>
  );
};

export default Header;

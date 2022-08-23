import React from 'react';
import { Grid, Row, Col, GridProps } from '../grid/grid';
import styled from 'styled-components';
import { color } from 'styled-system';
import Anchor from '../anchor/anchor';
import DownloadAppButton from '../download-app-button/download-app-button';
import Logo from '../logo/logo';
import SocialMediaLink from '../social-media-link/social-media-link';
import Paragraph from '../typography/paragraph/paragraph';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

export interface FooterProps {
  bg?: string;
  links: Array<LinkProps>;
  contact: ContactProps;
  translationConfig: TranslationProps;
  socialMedia: SocialMediaProps;
  downloadAppLinks: DownloadAppLinkProps;
  gridStyle?: GridProps;
}

export interface TranslationProps {
  contactTitle: string;
  privacy: string;
  accessibility: string;
  terms: string;
}

export interface DownloadAppLinkProps {
  appleUrl: string;
  googlePlayUrl: string;
}

export interface SocialMediaProps {
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
}

export interface ContactProps {
  email: string;
  phone: string;
  workWeekDays: string;
  workWeekend: string;
}

export interface LinkProps {
  text: string;
  href: string;
}

const StyledFooter = styled.div<FooterProps>`
  ${color}
`;

export const Footer = (props: FooterProps) => {
  return (
    <StyledFooter {...props}>
      <Grid fluid {...props.gridStyle}>
        <Row paddingBottom="2.5em" paddingTop="1.25em">
          <Logo color="offWhite" />
        </Row>
        <Row justify="flex-start" paddingBottom="0.625em" paddingTop="0.625em">
          <Col xs={2} sm={4} md={4} lg={6}>
            {props.links &&
              props.links.map((link, index) => (
                <Anchor
                  key={`footer-anchor-${index}`}
                  href={link.href}
                  style={{
                    paddingBottom: '0.4rem',
                  }}
                >
                  {link.text}
                </Anchor>
              ))}
          </Col>
          <Col xs={2} sm={4} md={4} lg={6}>
            <Row
              marginTop={['0rem', '0rem', '-3rem', '-3rem']}
              paddingBottom={['0.32rem', '0.32rem', '0.32rem', '3rem']}
              justify="start"
            >
              <Col>
                <LanguageSwitcher
                  color="white"
                  languages={['en', 'es']}
                  onLanguageSelect={(language: string) => {
                    console.log(language);
                  }}
                  selected="en"
                />
              </Col>
            </Row>
            <Row paddingBottom="0.32em" paddingTop="0.32em">
              <Col>
                <Row paddingBottom="0.32em" paddingTop="0.32em">
                  <Paragraph color="offWhite" variant="b2" bold>
                    {props.translationConfig.contactTitle || 'CONTACT'}
                  </Paragraph>
                </Row>
                <Row paddingBottom="0.32em" paddingTop="0.32em">
                  <Paragraph color="offWhite" variant="b3">
                    {props.contact.email}
                  </Paragraph>
                </Row>
                <Row paddingBottom="0.32em" paddingTop="0.32em">
                  <Paragraph color="offWhite" variant="b3">
                    {props.contact.phone}
                  </Paragraph>
                </Row>
                <Row paddingBottom="0.32em" paddingTop="0.32em">
                  <Paragraph color="offWhite" variant="b3">
                    {props.contact.workWeekDays}
                  </Paragraph>
                </Row>
                <Row paddingBottom="0.32em" paddingTop="0.32em">
                  <Paragraph color="offWhite" variant="b3">
                    {props.contact.workWeekend}
                  </Paragraph>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row paddingBottom="0.32em" paddingTop="0.32em">
          <Col xs={4} sm={4} md={4} lg={6} paddingTop="1em" paddingBottom="1em">
            <Row paddingTop="1em" paddingBottom="1em">
              {props.socialMedia.instagramUrl && (
                <Col xs={0.75} lg={2}>
                  <SocialMediaLink fontSize="1em" theme="dark" name="Instagram" href={props.socialMedia.instagramUrl} />
                </Col>
              )}
              {props.socialMedia.twitterUrl && (
                <Col xs={0.75} lg={2}>
                  <SocialMediaLink fontSize="1em" theme="dark" name="Twitter" href={props.socialMedia.twitterUrl} />
                </Col>
              )}
              {props.socialMedia.facebookUrl && (
                <Col xs={0.75} lg={2}>
                  <SocialMediaLink fontSize="1em" theme="dark" name="Facebook" href={props.socialMedia.facebookUrl} />
                </Col>
              )}
            </Row>
          </Col>
          <Col paddingTop="1em" xs={4} sm={6} md={6} lg={6}>
            <Row justify="flex-start" paddingBottom="0.32em">
              {props.downloadAppLinks.googlePlayUrl && (
                <Col xs={2} sm={2.5} md={2.5} lg={4}>
                  <Row justify="flex-start" paddingBottom="0.32em">
                    <DownloadAppButton
                      href={props.downloadAppLinks.googlePlayUrl}
                      fontSize="0.8em"
                      store="google play"
                    />
                  </Row>
                </Col>
              )}
              {props.downloadAppLinks.appleUrl && (
                <Col xs={2} sm={1.5} md={1.5} lg={2}>
                  <Row justify="flex-start" paddingBottom="0.32em">
                    <DownloadAppButton href={props.downloadAppLinks.appleUrl} fontSize="0.8em" store="app store" />
                  </Row>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
        <Row padding="0.35em" reverse={['xs']} justify="flex-start">
          <Col padding="0.7em" xs={4} sm={6} md={6} lg={6}>
            <Paragraph color="offWhite" variant="b4">
              © 2020 TEND
            </Paragraph>
          </Col>
          <Col xs={4} sm={4} md={4} lg={6} paddingBottom="1rem">
            <Row align="center" justify="flex-start">
              <Col>
                <Anchor fontSize={['0.75rem', '0.75rem', '1rem', '1rem']} href="/privacy">
                  {props.translationConfig.privacy || 'PRIVACY'}
                </Anchor>
              </Col>
              <Col>
                <Anchor fontSize={['0.75rem', '0.75rem', '1rem', '1rem']} href="/accessibility">
                  {props.translationConfig.accessibility || 'ACCESSIBILITY'}
                </Anchor>
              </Col>
              <Col>
                <Anchor fontSize={['0.75rem', '0.75rem', '1rem', '1rem']} href="/terms">
                  {props.translationConfig.terms || 'TERMS'}
                </Anchor>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;

/** @format */

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Trans, useTranslation } from '@tend/webx/utils/next-i18next';

import {
  H4,
  Grid,
  Row,
  Accordion,
  AccordionItem,
  Layout,
  Paragraph,
  Col,
} from '@tend/ui';
import Space from '../layout/space';

const StyledParagraph = styled(Paragraph)`
  white-space: pre-line;
`;

export const Questions = () => {
  interface Question {
    map(arg0: (question: Question, i: number) => JSX.Element): React.ReactNode;
    name: string;
    topic: string;
    answer: string;
  }

  const { t } = useTranslation('faq');
  const questions: Question = t('questions.questions', {
    returnObjects: true,
  });

  const TravelLinkComponent = () => (
    <Link href="/travel">
      <a>Travel</a>
    </Link>
  );

  const UrlComponent = (props) => <a href={props.children}>{props.children}</a>;

  const MailComponent = (props) => (
    <a href={`mailto:${props.children}`}>{props.children}</a>
  );

  return (
    <Layout bg="offWhite">
      <Space marginBottom={['3rem', '3rem', '4rem', '5rem']}>
        <Grid>
          <Row
            justify="flex-start"
            paddingTop={['2rem', '2rem', '3rem', '4rem']}
            paddingBottom={['2rem', '2rem', '3rem', '4rem']}
          >
            <H4>{t('questions.headline')}</H4>
          </Row>
          <Row justify="flex-start">
            <Col
              noGutter
              align="flex-start"
              justify="flex-start"
              xs={4}
              sm={8}
              md={8}
              lg={12}
            >
              <Accordion>
                {questions.map((question, i) => (
                  <AccordionItem key={i} id={`${i}`} title={question.name}>
                    <StyledParagraph variant="b3">
                      <Trans
                        key={i + 1}
                        i18nKey={`faq:questions.questions.${i}.answer`}
                      >
                        {[
                          'text ',
                          <TravelLinkComponent key={i + 2} />,
                          <span key={i + 3} style={{ paddingLeft: '0.5rem' }}>
                            List Item
                          </span>,
                          <UrlComponent key={i + 4}>Url</UrlComponent>,
                          <MailComponent key={i + 5}>eMail</MailComponent>,
                        ]}
                      </Trans>
                    </StyledParagraph>
                  </AccordionItem>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Grid>
      </Space>
    </Layout>
  );
};

export default Questions;

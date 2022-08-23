import React, { useState } from 'react';
import { STATUS } from '../../../constants/form-status';
import useAuth from '../../../hooks/use-auth';
import usePrefixedWithBasePath from '../../../hooks/usePrefixedWithBasePath';

import styled from 'styled-components';
import Grid from '../../layout/grid';
import { Label, Textarea, Button, Paragraph } from '@tend/ui';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { useRouter } from "next/router";

const Layout = styled(Grid)`
  margin-block-end: 3rem;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    "MSG   MSG   MSG   MSG   MSG   MSG"
    "ERR   ERR   ERR   ERR   ERR   ERR"
    "BTN   BTN   BTN   BTN   BTN   BTN";

    @media (min-width: 836px) {
      grid-template-areas:
        "MSG   MSG   MSG   MSG   MSG   MSG"
        "ERR   ERR   ERR   ERR   ERR   BTN";
    }

    @media (min-width: 1440px) {
      grid-template-columns: repeat(12, 1fr);
      grid-template-areas:
        "MSG   MSG   MSG   MSG   MSG   MSG   MSG   MSG   MSG   MSG   MSG   MSG "
        "ERR   ERR   ERR   ERR   ERR   ERR   ERR   ERR   ERR   ERR   BTN   BTN";
    }
`;

const Block = styled.div`
  &[data-area|="message"]  { grid-area: MSG; };
  &[data-area|="error"]    {
    grid-area: ERR;
    @media (min-width: 836px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
    }
  };
  &[data-area|="submit"]   { grid-area: BTN;   };
`;

const MessageTextarea = styled(Textarea)`
  background: white;
  padding-inline-start: 0.5rem;
  padding-inline-start: 0.5rem;
  min-height: 12rem;
  resize: none;
`;

const MessageLabel = styled(Label)`
  margin-block-end: 1.125rem;
`;

const MessageButton = styled(Button)`
  display: inline-block;
  width: 100%;
  text-align: center;
  @media (min-width: 1440px) {
    display: block;
  }
`
const Error = styled(Paragraph)`
  display: inline-block;
`;

const Reply = ({ topicID, postNumber = '', onSuccess, inResponseTo }) => {
  const { user } = useAuth();
  const { locale } = useRouter();
  const [ values, setValues ] = useState({
    raw: '',
    topic_id: topicID,
    reply_to_post_number: postNumber,
  });
  const [ status, setStatus ] = useState(STATUS.IDLE);
  const [ errors, setErrors ] = useState([]);
  const discourseCreateTopicUrl = usePrefixedWithBasePath(`/api/discourse/create-topic?locale=${locale}`);
  const { t } = useTranslation();


  const handleChange = e => {
    e.persist();
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(STATUS.SUBMITTING);
    setErrors([]);

    try {
      const response = await fetch(discourseCreateTopicUrl, {
        method: 'POST',
        headers: {
          'API-Username': user ? user.username : "System"
        },
        body: JSON.stringify({
          ...values
        })
      });

      const data = await response.json();

      if(data.errors) {
        setErrors(data.errors);
        setStatus(STATUS.IDLE);
        return

      }

      setStatus(STATUS.COMPLETED);
      setValues({
        raw: '',
        topic_id: topicID,
        reply_to_post_number: postNumber
      });
      onSuccess(data.topic_id, user);

    } catch (error) {
      setStatus(STATUS.IDLE);
      return

    } finally {
      setStatus(STATUS.SUBMITTED);

    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Layout>

        <Block data-area="message">
          <MessageLabel htmlFor="raw" color="white">{t('Replying to')}&nbsp;{inResponseTo}</MessageLabel>
          <MessageTextarea
            value={values.raw}
            onChange={handleChange}
            name="raw"
            fontSize="1rem" />
        </Block>

        <Block data-area="error">
          {errors && (
            <Error
              color='red.0'
              bold
              fontSize={['1.5rem']}
            >{errors[0]}</Error>
          )}
        </Block>

        <Block data-area="submit">
          <MessageButton
            disabled={status === STATUS.SUBMITTING}
            type="submit"
            variant="medium"
            bg='yellow.0'
            textTransform="none"
            color="black"
            hoverColor="white"
            hoverBg="black">
            {t('Reply')}
          </MessageButton>
        </Block>

      </Layout>
    </form>
  );
};

export default Reply;

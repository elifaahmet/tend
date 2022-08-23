import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { STATUS } from '../../constants/form-status';
import styled from 'styled-components';
import Select from 'react-select';
import useAuth from '../../hooks/use-auth';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';

import Grid from '../layout/grid';
import { Label, Input, Textarea, Button, Paragraph } from '@tend/ui';
import { useTranslation } from '@tend/webx/utils/next-i18next';

const Layout = styled(Grid)`
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-row-gap: 3rem;
  margin-block-start: 2.8125rem;
  margin-block-end: 1.5rem;
  grid-template-areas:
    "CAT   CAT   CAT   CAT   CAT   CAT"
    "TITLE TITLE TITLE TITLE TITLE TITLE"
    "MSG   MSG   MSG   MSG   MSG   MSG"
    "ERR   ERR   ERR   ERR   ERR   ERR"
    "BTN   BTN   BTN   BTN   BTN   BTN";

    @media (min-width: 836px) {
      grid-template-areas:
        "CAT   CAT   CAT   CAT   CAT   CAT"
        "TITLE TITLE TITLE TITLE TITLE TITLE"
        "MSG   MSG   MSG   MSG   MSG   MSG"
        "ERR   ERR   ERR   ERR   ERR   BTN";
    }

    @media (min-width: 1440px) {
      grid-template-columns: repeat(12, [col-start] 1fr);
      grid-template-areas:
        "CAT   CAT   CAT   CAT   CAT   CAT   CAT   CAT   CAT   CAT   CAT  CAT"
        "TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE "
        "MSG   MSG   MSG   MSG   MSG   MSG   MSG   MSG   MSG   MSG   MSG   MSG "
        "ERR   ERR   ERR   ERR   ERR   ERR   ERR   ERR   ERR   ERR   BTN   BTN";
    }
`;

const Block = styled.div`
  &[data-area|="category"] { grid-area: CAT;   };
  &[data-area|="title"]    { grid-area: TITLE; };
  &[data-area|="message"]  { grid-area: MSG;   };
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

const MessageInput = styled(Input)`
  background: white;
  padding-inline-start: 0.5rem;
`;

const MessageTextarea = styled(Textarea)`
  background: white;
  padding-inline-start: 0.5rem;
  min-height: 21rem;
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


const style = {
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: '0',
    cursor: 'pointer'
  }),
  option: (styles, { isSelected }) => {
    return {
      ...styles,
      cursor: 'pointer',
      color: 'black',
      backgroundColor: isSelected ? '#FFC73D' : 'transparent',
      '&:hover': {
        backgroundColor: isSelected ? 'FFC73D' : '#FFF1CE'
      }
    };
  },
};


const PostForm = ({ categories }) => {
  const filtered_categories = categories.filter(category => !category.read_restricted);
  const router = useRouter();
  const { locale } = router;
  const { user } = useAuth();
  const { t } = useTranslation();
  const cleanForm = {
    title: '',
    raw: ''
  }

  const [ status, setStatus] = useState(STATUS.IDLE);
  const [ errorMessage, setErrorMessage ] = useState([]);

  const [ values, setValues ] = useState(cleanForm);
  const [ category, setCategory ] = useState({
    id: filtered_categories[0]?.id,
    name: filtered_categories[0]?.name
  });

  const discourseCreateTopicUrl = usePrefixedWithBasePath(`/api/discourse/create-topic?locale=${locale}`);

  const handleChange = e => {
    e.persist()
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  const handleSelect = category => {
    setCategory({
      name: category.name,
      id: category.id
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(STATUS.SUBMITTING);
    setErrorMessage([]);

    try {
      const response = await fetch(discourseCreateTopicUrl, {
        method: "POST",
        headers: {
          "API-Username": user ? user.username : 'System'
        },
        body: JSON.stringify({
          ...values,
          category: category.id
        })
      });

      const data = await response.json();

      if(data.errors) {
        setErrorMessage(data.errors);
        setStatus(STATUS.IDLE);
        return
      }

      setStatus(STATUS.COMPLETED);
      return router.push(`/message-board/t/${data.topic_slug}/${data.topic_id}`);
    } catch (error) {
      setStatus(STATUS.IDLE);
    } finally {
      setStatus(STATUS.SUBMITTED);
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <Layout>

        <Block data-area="category">
          <MessageLabel htmlFor="category" color='white'>{t('Category')}</MessageLabel>
          <Select
            name="category"
            value={{name: category.name, id: category.id}}
            styles={style}
            id={category.name}
            options={filtered_categories}
            className="message-select-container"
            classNamePrefix="message-select"
            onChange={handleSelect}
            getOptionLabel={option => option.name}
            getOptionValue={option => option.id} />
        </Block>

        <Block data-area="title">
          <MessageLabel htmlFor="title" color="white">{t('Title')}</MessageLabel>
          <MessageInput
            name="title"
            value={values.title}
            fontSize="1rem"
            onChange={handleChange}/>
        </Block>

        <Block data-area="message">
          <MessageLabel htmlFor="raw" color="white">{t('Message')}</MessageLabel>
          <MessageTextarea
            value={values.raw}
            onChange={handleChange}
            name="raw"
            fontSize="1rem"/>

        </Block>
        <Block data-area="error">
          {errorMessage && (
            <Error
              color='red.0'
              bold
              fontSize={['1.5rem']}
            >{errorMessage[0]}</Error>
          )}
        </Block>
        <Block data-area="submit">
          <MessageButton
            disabled={status === STATUS.SUBMITTING}
            type="submit"
            variant="medium"
            bg='yellow.0'
            textTransform="uppercase"
            color="black"
            hoverColor="white"
            hoverBg="black">
            {t('Post')}
          </MessageButton>
        </Block>
      </Layout>
    </form>
  );
};

export default PostForm;

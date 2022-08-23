import React, { useState } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import { Paragraph, Label, Input, Button, Textarea } from '@tend/ui';
import { STATUS } from '../../constants/form-status';
import { emailRe } from '../../constants/re';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';


interface FlexLayoutProps {
  bg: string[];
}

const FlexLayout = styled.div<FlexLayoutProps>`
  display: flex;
  flex-direction: column;
  min-height: 33.5rem;
  margin-block-start: 3rem;
  padding: 1rem;
  ${color}
`;

const StyledForm = styled.form`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
`;

const StyledField = styled.div`
  margin-block-end: 1rem;
`;

const StyledParagraph = styled(Paragraph)`
  margin-block-end: 1rem;
`;

const emptyForm = {
  email: '',
  message: ''
}


const Contact = () => {

  const { t } = useTranslation();
  const [ status, setStatus ] = useState(STATUS.IDLE);
  const [ touched, setTouched ] = useState({});
  const [ values, setValues ] = useState(emptyForm);
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ buttonText, setButtonText ] = useState(t('Make a suggestion'));


  const sendSuggestionUrl = usePrefixedWithBasePath('/api/send-suggestion');

  const getErrors = value => {
    let result = {};
    if(!value.email || !emailRe.test(value.email)) result = { ...result, email: t('form.error.field', {field: t('form.email')})};
    if(!value.message) result = { ...result, message: t('form.error.field', {field: t('form.message')})}

    return result;
  }

  const errors = getErrors(values);
  const isValid = Object.keys(errors).length === 0;

  const handleChange = e => {
    e.persist();
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });

  }

  const handleBlur = e => {
    const { id } = e.target;

    setTouched({ ...touched, [id]: true});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(status === STATUS.COMPLETED) {
      setTouched({});
      setErrorMessage('');
      setValues(emptyForm);
      setButtonText(t('Make a suggestion'));
      setStatus(STATUS.IDLE);
      return;
    }
    if(isValid) {
      setStatus(STATUS.SUBMITTING);
      try {
        const response = await fetch(sendSuggestionUrl, {
          method: "POST",
          body: JSON.stringify({
            name: values.email,
            senderMail: values.email,
            content: values.message,
          })
        });

        const data = await response.json();

        if(data.errors) {
          setErrorMessage(t('form.error.generic'));
          setStatus(STATUS.IDLE);
          return;
        }
        setValues(emptyForm);
        setButtonText(t('New Suggestion'));
        setStatus(STATUS.COMPLETED);
      } catch (error) {
        setErrorMessage(t('form.error.generic'));
        setButtonText(t('Try Again'))
        setStatus(STATUS.IDLE);
      } finally {
        setStatus(STATUS.COMPLETED);
      }
    } else {
      setStatus(STATUS.SUBMITTED)
    }
  };

  return (
    <FlexLayout bg={['red.0']}>
      {status !== STATUS.COMPLETED &&
      <StyledParagraph
          bold
          fontSize={['2.25rem']}
          lineHeight={['0.87']}
          color="black"
          textTransform="uppercase"
          >
        { t('We want your two cents') }
        </StyledParagraph>
      }
      <StyledForm onSubmit={handleSubmit}>
        {status !== STATUS.COMPLETED &&
          <StyledField>
            <Label
              htmlFor="email"
              variant={'b5'}
              color="offWhite"
              style={{
                marginBlockStart: "3px",
                marginBlockEnd: "5px"
              }}>
              { t('Your email') }
            </Label>

            <Input
              borderBottomColor="transparent"
              rule={false}
              textTransform="none"
              required
              placeholder={'Email'}
              bg="white"
              color="black"
              name="email"
              id="suggestion-form-email"
              type="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              style={{
                paddingLeft: "3px"
              }}
              />
          </StyledField>
        }
        {status !== STATUS.COMPLETED &&
          <StyledField style={{
            flexGrow: 2,
            display: 'flex',
            flexDirection: 'column'
            }}
          >
            <Label
              htmlFor="message"
              variant={'b5'}
              color="offWhite"
              style={{
                marginBlockStart: "3px",
                marginBlockEnd: "5px"
              }}>
              {t('Your message')}
            </Label>
            <Textarea
              rows={10}
              borderBottomColor="transparent"
              textTransform="none"
              placeholder={t('Your message')}
              bg="white"
              color="black"
              required
              onBlur={handleBlur}
              onChange={handleChange}
              name="message"
              type="text"
              value={values.message}
              id="suggestion-form-message"
              style={{
                resize: 'none',
                flexGrow: 2
              }}
            />
          </StyledField>
        }
        {status === STATUS.COMPLETED && !errorMessage && (
          <div style={{ marginTop: "2rem",  marginBottom: "2rem" }}>
            <Paragraph variant="b2" bold>
              { t('form.success') }
            </Paragraph>
          </div>
        )}

        {!!errorMessage && (
          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <Paragraph variant="b2">
              { errorMessage }
            </Paragraph>
          </div>
        )}
        {status === STATUS.SUBMITTED && (
          <ul>
            {
              Object.keys(errors).map((key) => {
                return (
                  <li key={key}>
                    <Paragraph color="defaultRed">
                      {errors[key]}
                    </Paragraph>
                  </li>
                )
              })

            }
          </ul>
        )}
        <Button
          disabled={status === STATUS.SUBMITTING}
          id="suggestion-form-button"
          type="submit"
          variant="medium"
          bg='black'
          textTransform="uppercase"
          color="white"
          hoverColor="black"
          hoverBg="white"
          style={{
            width: '100%',
            fontSize: '1rem'
          }}
          >
        {buttonText}
      </Button>
    </StyledForm>
  </FlexLayout>
  );
}

export default Contact;

/** @format */

import React, { useState, useEffect, Ref } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import axios from 'axios';
import { STATUS } from '../../constants/form-status';
import { emailRe, telRe } from '../../constants/re';

import {
  Grid,
  Row,
  Col,
  Layout,
  Button,
  H3,
  InputField,
  Paragraph,
} from '@tend/ui';
import Space from '../layout/space';

const emptyForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
};

export const Form = React.forwardRef(
  (props: unknown, ref: Ref<HTMLFormElement>) => {
    const [status, setStatus] = useState(STATUS.IDLE);
    const [touched, setTouched] = useState({});
    const [values, setValues] = useState(emptyForm);
    const [errorMessage, setErrorMessage] = useState('');

    const { locale } = useRouter();
    const { t, i18n } = useTranslation('tend-at-work');

    function getErrors(value) {
      let result = {};

      if (!value.name)
        result = {
          ...result,
          name: t('common:form.error.field', {
            field: t('common:form.name-short'),
          }),
        };
      if (!value.company)
        result = {
          ...result,
          company: t('common:form.error.field', {
            field: t('common:form.company'),
          }),
        };
      if (!value.email || !emailRe.test(value.email))
        result = {
          ...result,
          email: t('common:form.error.field', {
            field: t('common:form.email'),
          }),
        };
      if (!value.phone || !telRe.test(value.phone))
        result = {
          ...result,
          phone: t('common:form.error.field', {
            field: t('common:form.phone-number'),
          }),
        };
      if (!value.message)
        result = {
          ...result,
          message: t('common:form.error.field', {
            field: t('common:form.message'),
          }),
        };

      return result;
    }

    const errors = getErrors(values);
    const isValid = Object.keys(errors).length === 0;

    const handleChange = (e) => {
      e.persist();
      const { name, value } = e.target;

      setValues({
        ...values,
        [name]: value,
      });
    };

    const handleBlur = (e) => {
      const { id } = e.target;

      setTouched({ ...touched, [id]: true });
    };

    async function handleSubmit(e) {
      e.preventDefault();
      setStatus(STATUS.SUBMITTING);

      if (isValid) {
        try {
          await axios.post('/api/create-tend-at-work-ticket', values);
          setValues(emptyForm);
          setStatus(STATUS.COMPLETED);
        } catch (error) {
          setErrorMessage(t('common:form.error.generic'));
          setStatus(STATUS.IDLE);
        } finally {
          setStatus(STATUS.COMPLETED);
        }
      } else {
        setStatus(STATUS.SUBMITTED);
      }
    }

    return (
      <Layout bg="offWhite">
        <form ref={ref} onSubmit={handleSubmit}>
          <Grid>
            <Row justify="flex-start" paddingBottom="2rem" paddingTop="4rem">
              <Col
                justify="flex-start"
                align="flex-start"
                xs={4}
                sm={8}
                md={8}
                lg={12}
              >
                <Space marginBottom="2rem">
                  <H3>{t('form.headline')}</H3>
                </Space>
                <Space>
                  <Paragraph>{t('form.body')}</Paragraph>
                </Space>
              </Col>
            </Row>
            <Row justify="flex-start">
              <Col
                paddingBottom="2rem"
                justify="center"
                align="flex-start"
                xs={4}
                sm={8}
                md={8}
                lg={6}
              >
                <InputField
                  label={t('common:form.name-short')}
                  required
                  color="black"
                  name="name"
                  id="name"
                  type="text"
                  inputBlur={handleBlur}
                  inputChange={handleChange}
                  value={values.name}
                />
              </Col>
              <Col
                paddingBottom="2rem"
                justify="center"
                align="flex-start"
                xs={4}
                sm={8}
                md={8}
                lg={6}
              >
                <InputField
                  label={t('common:form.company')}
                  required
                  color="black"
                  name="company"
                  id="company"
                  type="text"
                  inputBlur={handleBlur}
                  inputChange={handleChange}
                  value={values.company}
                />
              </Col>
            </Row>
            <Row justify="flex-start">
              <Col
                paddingBottom="2rem"
                justify="center"
                align="flex-start"
                xs={4}
                sm={8}
                md={8}
                lg={6}
              >
                <InputField
                  label={t('common:form.email')}
                  required
                  color="black"
                  name="email"
                  id="email"
                  type="email"
                  inputBlur={handleBlur}
                  inputChange={handleChange}
                  value={values.email}
                />
              </Col>
              <Col
                paddingBottom="2rem"
                justify="center"
                align="flex-start"
                xs={4}
                sm={8}
                md={8}
                lg={6}
              >
                <InputField
                  label={t('common:form.phone-number')}
                  required
                  color="black"
                  name="phone"
                  id="phone"
                  type="tel"
                  inputBlur={handleBlur}
                  inputChange={handleChange}
                  value={values.phone}
                />
              </Col>
            </Row>
            <Row justify="flex-start">
              <Col
                paddingBottom="3rem"
                justify="center"
                align="flex-start"
                xs={4}
                sm={8}
                md={8}
                lg={12}
              >
                <InputField
                  label={t('common:form.message')}
                  required
                  color="black"
                  name="message"
                  id="message"
                  type="text"
                  inputBlur={handleBlur}
                  inputChange={handleChange}
                  value={values.message}
                />
              </Col>
            </Row>
            <Row justify="flex-start">
              <Col
                paddingBottom="2rem"
                justify="center"
                align="flex-start"
                xs={4}
                sm={8}
                md={8}
                lg={9}
              >
                {status === STATUS.SUBMITTED && (
                  <ul>
                    {Object.keys(errors).map((key) => {
                      return (
                        <li key={key}>
                          <Paragraph color="defaultRed">
                            {errors[key]}
                          </Paragraph>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {status === STATUS.COMPLETED && (
                  <Space marginTop="2rem">
                    <Paragraph variant="b2" bold>
                      {t('common:form.success')}
                    </Paragraph>
                  </Space>
                )}

                {!errorMessage && (
                  <Space marginTop="2rem">
                    <Paragraph color="defaultRed" variant="b2">
                      {errorMessage}
                    </Paragraph>
                  </Space>
                )}

                <Button
                  disabled={status === STATUS.SUBMITTING}
                  type="submit"
                  variant="medium"
                  bg="defaultMagenta"
                  textTransform="uppercase"
                  color="black"
                  hoverColor="white"
                  hoverBg="black"
                >
                  {t('common:cta.submit')}
                </Button>
              </Col>
            </Row>
          </Grid>
        </form>
      </Layout>
    );
  }
);

export default Form;

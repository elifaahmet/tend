/** @format */

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import axios from 'axios';
import { STATUS } from '../../constants/form-status';
import { emailRe, telRe } from '../../constants/re';

import {
  TCrossbarLayout,
  Grid,
  Row,
  Col,
  Layout,
  Button,
  Paragraph,
  InputField,
  Icon,
} from '@tend/ui';
import Space from '../layout/space';

const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

export const ModuleThree = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [touched, setTouched] = useState({});
  const [values, setValues] = useState(emptyForm);
  const [errorMessage, setErrorMessage] = useState('');

  const { locale } = useRouter();
  const { t, i18n } = useTranslation('common');

  const getErrors = (value) => {
    let result = {};

    if (!value.firstName)
      result = {
        ...result,
        firstName: t('common:form.error.field', {
          field: t('common:form.first-name'),
        }),
      };
    if (!value.lastName)
      result = {
        ...result,
        lastName: t('common:form.error.field', {
          field: t('common:form.last-name'),
        }),
      };
    if (!value.email || !emailRe.test(value.email))
      result = {
        ...result,
        email: t('common:form.error.field', { field: t('common:form.email') }),
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
  };

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
        await axios.post('/api/create-support-ticket', values);
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
    <>
      <TCrossbarLayout
        variant="left"
        leftLineColor="defaultMagenta"
        rightLineColor="defaultRed"
        whenShrink="left"
        upperBg="defaultGreen"
        marginBottom={['1.1875rem', '1.1875rem', '1.1875ren', '1.875rem']}
      />
      <Layout bg="defaultGreen">
        <Space marginBottom={['2.75rem', '2.75rem', '5rem', '5rem']}>
          <form onSubmit={handleSubmit}>
            <Grid>
              {status === STATUS.COMPLETED && (
                <Space marginTop="2rem">
                  <Paragraph color="white" variant="b2" fontWeight="bold">
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
              <Row paddingBottom="2rem">
                <Col
                  justify="flex-start"
                  align="flex-start"
                  xs={4}
                  sm={8}
                  md={8}
                  lg={12}
                >
                  <Icon
                    fontSize="5rem"
                    color="white"
                    iconName="International"
                  />
                </Col>
              </Row>
              <Row paddingBottom="2rem">
                <Col
                  justify="flex-start"
                  align="flex-start"
                  xs={4}
                  sm={8}
                  md={8}
                  lg={12}
                >
                  <Paragraph variant="b2" bold color="white">
                    Email
                  </Paragraph>
                </Col>
              </Row>
              <Row>
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
                    label={t('form.first-name')}
                    required
                    color="white"
                    name="firstName"
                    id="firstName"
                    type="text"
                    inputBlur={handleBlur}
                    inputChange={handleChange}
                    value={values.firstName}
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
                    label={t('form.last-name')}
                    required={true}
                    color="white"
                    name="lastName"
                    id="lastName"
                    type="text"
                    inputBlur={handleBlur}
                    inputChange={handleChange}
                    value={values.lastName}
                  />
                </Col>
              </Row>
              <Row>
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
                    label={t('form.phone-number')}
                    required={true}
                    color="white"
                    name="phone"
                    id="phone"
                    type="tel"
                    inputBlur={handleBlur}
                    inputChange={handleChange}
                    value={values.phone}
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
                    label={t('form.email')}
                    required={true}
                    color="white"
                    name="email"
                    id="email"
                    type="email"
                    inputBlur={handleBlur}
                    inputChange={handleChange}
                    value={values.email}
                    textTransform="none"
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  paddingBottom="2rem"
                  justify="center"
                  align="flex-start"
                  xs={4}
                  sm={8}
                  md={8}
                  lg={12}
                >
                  <InputField
                    label={t('form.message')}
                    required={true}
                    color="white"
                    name="message"
                    id="message"
                    type="text"
                    inputBlur={handleBlur}
                    inputChange={handleChange}
                    value={values.message}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  paddingBottom="2rem"
                  justify="center"
                  align="flex-start"
                  xs={4}
                  sm={8}
                  md={8}
                  lg={12}
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
                    {t('cta.send-email')}
                  </Button>
                </Col>
                <Col
                  justify="center"
                  align="center"
                  xs={0}
                  sm={0}
                  md={0}
                  lg={2}
                />
              </Row>
            </Grid>
          </form>
        </Space>
      </Layout>
    </>
  );
};

export default ModuleThree;

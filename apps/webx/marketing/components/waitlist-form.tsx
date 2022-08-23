/** @format */

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation, i18n } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import axios from 'axios';

const StyledForm = styled.div`
  max-width: 24.375rem;

  /* All form inputs */
  input,
  button {
    display: block;
    width: 100%;
    margin: 0.625rem 0;
    border: 0;
    transition: all 0.2s ease-out;
    outline: 0;
  }

  /* Email input */
  input[type='email'] {
    padding: 0.66667em 1.33334em;
    font-size: 1.125rem;
    line-height: 0.83334;
    color: #000;
    border-radius: 0;

    &:disabled {
      color: rgba(0, 0, 0, 0.6);
    }

    &::placeholder {
      color: #000;
    }
  }

  /* Buttons */
  input[type='submit'],
  button {
    padding: 1em;
    font-family: 'Pilat';
    font-size: 1rem;
    line-height: 1;
    font-weight: bold;
    text-align: center;
    background-color: #ffc73d;
    cursor: pointer;
    border-radius: 0;

    &:hover,
    &:focus,
    &:disabled {
      background-color: rgba(255, 199, 61, 0.8);
    }

    &:disabled {
      color: rgba(0, 0, 0, 0.6);
      background-color: rgba(255, 199, 61, 0.6);
      cursor: default;
    }
  }

  /* Success text */
  .success {
    padding: 0.625rem 0;
    margin: 0.625rem 0;
    font-family: 'Pilat Condensed';
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  /* Error message */
  .error {
    font-weight: bold;
  }
`;

/**
 * Waitlist Form component
 */
export default function WaitlistForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useTranslation();
  const { locale } = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData(e.target);
    const email = data.get('email');
    const localeValue = locale.toLowerCase();

    try {
      await axios.post('/api/waitlist', { email, localeValue });
      setIsSuccess(true);
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  function handleReset(e) {
    e.preventDefault();
    setIsSuccess(false);
  }

  return (
    <StyledForm className="waitlist-form">
      {isSuccess ? (
        <>
          <p className="success">{t('form.success-subscribe')}</p>
          <button onClick={handleReset}>{t('form.reset')}</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder={t('form.placeholder')}
            name="email"
            disabled={isLoading || null}
            required
          />
          <input
            type="submit"
            id="waitlistSubmit"
            value={
              isLoading
                ? t<string>('form.loading')
                : t<string>('form.buttonText')
            }
            disabled={isLoading || null}
          />
          {errorMessage && (
            <p className="error">
              {t('error.label')}:{' '}
              {t([`error.${errorMessage}`, 'error.unspecific'])}
            </p>
          )}
        </form>
      )}
    </StyledForm>
  );
}

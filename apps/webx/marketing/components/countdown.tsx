/** @format */

import React, { useEffect, useState } from 'react';
import { useTranslation, i18n } from '@tend/webx/utils/next-i18next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { padStart } from 'lodash';

const StyledCountdown = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18.75rem;
  max-width: 95%;
  font-family: 'Pilat Condensed';
  font-weight: bold;
  text-align: center;

  > div {
    width: 22.33334%;
  }

  .countdown-number {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0.08571em 0 0.2em;
    margin-bottom: 0.14286em;
    font-size: 2.1875rem;
    line-height: 1;
    background-color: #fff;

    &::before {
      position: absolute;
      top: 0;
      bottom: 0;
      display: block;
      width: 3px;
      background-color: #ff5554;
      content: '';
    }

    > div {
      width: 50%;
    }
  }

  .countdown-label {
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.875rem;
    letter-spacing: -0.01em;
    text-transform: uppercase;
  }
`;

/**
 * Countdown component
 */
export default function Countdown(): JSX.Element {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSecondsRemaining: 0,
  });

  const { days, hours, minutes, seconds } = timeRemaining;
  const dayDigits = padStart(`${days}`, 2, '0').split('');
  const hourDigits = padStart(`${hours}`, 2, '0').split('');
  const minuteDigits = padStart(`${minutes}`, 2, '0').split('');
  const secondDigits = padStart(`${seconds}`, 2, '0').split('');

  // Set up countdown timer
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const countdownResults = countdown();

      // Stop counting down if the time has elapsed
      if (!countdownResults.totalSecondsRemaining) {
        clearInterval(countdownInterval);
        return;
      }
      setTimeRemaining(countdownResults);
    }, 1000);
    return () => clearInterval(countdownInterval);

    // We explicitly only want this effect to run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledCountdown className="countdown">
      <div>
        <div className="countdown-number">
          <div>{dayDigits[0]}</div>
          <div>{dayDigits[1]}</div>
        </div>
        <div className="countdown-label">{t('countdown.days')}</div>
      </div>
      <div>
        <div className="countdown-number">
          <div>{hourDigits[0]}</div>
          <div>{hourDigits[1]}</div>
        </div>
        <div className="countdown-label">{t('countdown.hours')}</div>
      </div>
      <div>
        <div className="countdown-number">
          <div>{minuteDigits[0]}</div>
          <div>{minuteDigits[1]}</div>
        </div>
        <div className="countdown-label">{t('countdown.minutes')}</div>
      </div>
      <div>
        <div className="countdown-number">
          <div>{secondDigits[0]}</div>
          <div>{secondDigits[1]}</div>
        </div>
        <div className="countdown-label">{t('countdown.seconds')}</div>
      </div>
    </StyledCountdown>
  );
}

/**
 * Countdown calculator
 */
function countdown() {
  const countdownTarget = 1609524000; // epoch seconds @ 1/1/21 6pm GMT (noon central)
  const totalSecondsRemaining = Math.max(
    countdownTarget - Math.floor(Date.now() / 1000),
    0
  );
  let remainder = totalSecondsRemaining;

  // Days
  const days = Math.floor(totalSecondsRemaining / 60 / 60 / 24);
  remainder -= days * 24 * 60 * 60;

  // Hours
  const hours = Math.floor(remainder / 60 / 60);
  remainder -= hours * 60 * 60;

  // Minutes
  const minutes = Math.floor(remainder / 60);
  remainder -= minutes * 60;

  // Seconds
  const seconds = remainder;

  return { days, hours, minutes, seconds, totalSecondsRemaining };
}

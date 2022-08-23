/**@format */

import { ChangeEvent } from 'react';

/**
 * Assumes usage in controlled component implementation where onChange handler does not allow character other
 * than digits and decimals from user input.
 *
 * @param amount
 */
export function sanitizeMoneyInput(amount: number | string): string {
  return `${amount}`.replace(/[$,\s]/g, '');
}

export function formatNumberToMoneyString(amount: number | string): string {
  const sanitizedNumString = sanitizeMoneyInput(amount);
  return parseFloat(sanitizedNumString).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
}

export function formatNumberToIntegerMoneyString(
  amount: number | string
): string {
  const sanitizedNumString = sanitizeMoneyInput(amount);
  return parseInt(sanitizedNumString, 10).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
}

function formatNumberToSingleDecimalMoneyString(
  amount: number | string
): string {
  const sanitizedNumString = sanitizeMoneyInput(amount);
  return parseFloat(sanitizedNumString).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 1,
  });
}

/**
 * Null servers as a sentinel character so we can ignore updating state with return value.
 * @param e
 */
export function onChangeFormatInputToDollarString(
  e: ChangeEvent<HTMLInputElement>
): string | null {
  const { value } = e.target;
  const valueString = `${value || ''}`;
  const hasDecimal = (valueString.match(/\./g) || []).length === 1;
  const endsWithDecimal = !!valueString.match(/\.$/);
  const endWithOneDecimalPlace = !!valueString.match(/\.\d$/);
  const endWithTwoDecimalPlaces = !!valueString.match(/\.\d{2}$/);

  const lastChar = valueString.split('').reverse()[0];
  if (valueString === '$') {
    return '';
  } else if (lastChar.match(/[\d]/) && !hasDecimal) {
    return formatNumberToIntegerMoneyString(valueString);
  } else if (endsWithDecimal) {
    return `${formatNumberToIntegerMoneyString(valueString)}.`;
  } else if (endWithOneDecimalPlace) {
    return formatNumberToSingleDecimalMoneyString(valueString);
  } else if (endWithTwoDecimalPlaces) {
    return formatNumberToMoneyString(valueString);
  }

  return null;
}

/**
 * Formats money string to integer value or double precision decimal.
 * @param {string} valueString - fetched from component state
 */
export function onBlurReformatValueToMoney(valueString: string): string {
  const lastChar = valueString.split('').reverse()[0];
  const doesNotHaveDecimalPlace = !valueString.match(/\.\d{1,2}$/);

  if (lastChar === '.' || doesNotHaveDecimalPlace) {
    return formatNumberToIntegerMoneyString(valueString);
  }

  return formatNumberToMoneyString(valueString);
}

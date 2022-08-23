/**@format */

import React from 'react';
import styled from '@emotion/styled';
import { Input } from '@tend/shared/design/ui-kit';
import { H1, B1, Spacer } from '@tend/lego/product-ui-kit';

const ResendCodeWrapper = styled.div`
  & {
    p {
      display: inline-flex;
    }
  }
`;

export interface VerificationProps {
  phoneNumberLastFour: number;
  resendCode: () => void;
  captureSingleDigitInputValue: (value: number) => void;
}

export const Verification: React.FC<VerificationProps> = (props) => {
  const {
    phoneNumberLastFour,
    resendCode,
    captureSingleDigitInputValue,
  } = props;

  return (
    <div id="security-verification">
      <Spacer top={20} />
      <H1>SECURITY</H1>
      <H1>VERIFICATION.</H1>
      <Spacer top={20} bottom={20}>
        <B1>
          Enter the security verification <br />
          code we went to *{phoneNumberLastFour}
        </B1>
      </Spacer>
      <Spacer top={20} bottom={20} />
      <Input
        type="number"
        variant="single-digit"
        name="verification-code"
        captureSingleDigitInputValue={captureSingleDigitInputValue}
        onChange={() => null}
      />
      <Spacer top={20}>
        <ResendCodeWrapper>
          <B1 color="neutral-dark-gray">Didn't receive your code?</B1>&nbsp;
          <B1>
            <span onClick={resendCode}>Resend code</span>
          </B1>
        </ResendCodeWrapper>
      </Spacer>
    </div>
  );
};

export default Verification;

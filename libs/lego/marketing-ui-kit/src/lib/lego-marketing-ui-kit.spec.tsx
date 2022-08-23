/**@format */

import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme/marketing-theme';

import LegoMarketingUiKit from './lego-marketing-ui-kit';

describe('LegoMarketingUiKit', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(
      <ThemeProvider theme={theme}>
        <LegoMarketingUiKit />
      </ThemeProvider>
    );
    const byText = getByText('Welcome to lego-marketing-ui-kit!');
    expect(byText).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });
});

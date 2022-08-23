/** @format **/
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import {
  withCurrentUser,
  withGraphQL,
  withRouter,
  withTheme,
  withTranslation,
} from '@tend/frontend/shared/react-utils';
import { compose } from '@tend/frontend/shared/utils';
import { getProductTheme } from '@tend/lego/product-ui-kit';

import translationConfig from '../assets/translation.config.json';
import { AllActivity, InitiateTransfer, SendMoneyTo } from './pages';

const theme = getProductTheme();
const templateRoute = 'dashboard/move-money/transfer/a/send-money';

function App(props) {
  return (
    <Routes>
      <Route path={'/'} element={<SendMoneyTo {...props} />} />
      <Route
        path={'initiate-transfer/:tendId'}
        element={<InitiateTransfer {...props} />}
      />
      <Route path={'all-activity'} element={<AllActivity {...props} />} />
    </Routes>
  );
}

export default compose(
  withTheme(theme),
  withGraphQL('service-auth', 'service-transaction'),
  withCurrentUser,
  withRouter(templateRoute),
  withTranslation(translationConfig)
)(App);

import React from 'react';
import { wrapper } from '../redux/index';

const WrappedApp = ({ Component, pageProps }) => {
  return (
      <Component {...pageProps} />
  )
}

export default wrapper.withRedux(WrappedApp);
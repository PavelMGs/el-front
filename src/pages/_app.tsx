import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from '../components/layout/main-layout';
import wrapper from '../store';

// connecting custom styles
import '../styles/utilities/index.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default wrapper.withRedux(App);

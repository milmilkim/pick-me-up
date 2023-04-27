import '@/styles/nes.min.css';
import '@/styles/globals.css';
import '../components/layout/AppLayout';

import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { Provider } from 'jotai';
import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  //Use The layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <SessionProvider session={session}>
      <Provider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </SessionProvider>
  );
}

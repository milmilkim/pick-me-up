import '@/styles/nes.min.css';
import '@/styles/globals.css';
import '../components/layout/AppLayout';

import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { Provider } from 'jotai';
import { SessionProvider } from 'next-auth/react';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  //Use The layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const queryClient = new QueryClient();

  return getLayout(
    <SessionProvider session={session}>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </QueryClientProvider>
      </Provider>
    </SessionProvider>
  );
}

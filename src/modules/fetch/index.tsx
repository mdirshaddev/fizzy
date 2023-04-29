// React Typings
import type { PropsWithChildren } from 'react';

// React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// React Query Dev tools
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient();

export default function FetchProvider(props: PropsWithChildren) {
  const { children } = props;
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools position='bottom-right' />
    </QueryClientProvider>
  );
}

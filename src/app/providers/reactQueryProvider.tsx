'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // Set to 0 to always refetch
      gcTime: 1000 * 60 * 5, // 5 minutes (renamed from cacheTime in React Query v4)
      refetchOnWindowFocus: false
    },
  },
});

interface ProvidersProps {
  children: ReactNode;
}

export function ReactQueryProvider({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export const QUERY_CONFIG = {
  staleTime: 5 * 60 * 1000,
  cacheTime: 10 * 60 * 1000,
  retry: 1,
  retryDelay: (attemptIndex: number) => Math.min(1000 * 2 ** attemptIndex, 30000),
  refetchOnReconnect: true,
  refetchInFocus: true,
}

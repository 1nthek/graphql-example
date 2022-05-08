import { NextPage } from "next";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import "./index.scss";

const App = ({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) => {
  const clientRef = useRef<QueryClient | null>(null);
  const getClient = () => {
    if (!clientRef.current)
      clientRef.current = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      });
    return clientRef.current;
  };

  return (
    <QueryClientProvider client={getClient()}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};

App.getInitialProps = async ({
  ctx,
  Component,
}: {
  ctx: any;
  Component: NextPage;
}) => {
  const pageProps = await Component.getInitialProps?.(ctx);
  return { pageProps };
};

export default App;

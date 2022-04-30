import { NextPage } from "next";
import "./index.scss";

const App = ({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) => <Component {...pageProps} />;

// App.getInitialProps = async ({
//   ctx,
//   Component,
// }: {
//   ctx: any;
//   Component: NextPage;
// }) => {
//   const pageProps = await Component.getInitialProps?.(ctx);
//   return { pageProps };
// };

export default App;

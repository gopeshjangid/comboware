import React from "react";
import App from "next/app";
import Head from "next/head";
import { wrapper } from "../redux/store";
import "assets/css/nextjs-material-dashboard.css?v=1.1.0";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import NextNProgress from "nextjs-progressbar";
import theme from "../components/theme";
class MyApp extends App {
  static getInitialProps = wrapper.getInitialAppProps(
    (store) => async ({ Component, ctx }) => {
      return {
        pageProps: {
          // Call page-level getInitialProps
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
          // Some custom thing for all pages
          pathname: ctx.pathname,
        },
      };
    }
  );

  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Comboware</title>
          {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> */}
        </Head>
        <Layout>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NextNProgress
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </React.Fragment>
    );
  }
}

export default wrapper.withRedux(MyApp);

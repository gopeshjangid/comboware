
import React from "react";
import App from "next/app";
import Head from "next/head";
import {wrapper} from  "../redux/store";
import "assets/css/nextjs-material-dashboard.css?v=1.1.0";
class MyApp extends App {
 
  static getInitialProps = wrapper.getInitialAppProps(store => async ({Component, ctx}) => {
    return {
        pageProps: {
            // Call page-level getInitialProps
            ...(Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {}),
            // Some custom thing for all pages
            pathname: ctx.pathname,
        },
    };

});
  render() {
    const { Component, pageProps  } = this.props;

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
           <Component {...pageProps} />
         </Layout>
      </React.Fragment>
    );
  }
}

export default wrapper.withRedux(MyApp);

import React, { Fragment } from 'react';
<<<<<<< HEAD
import { createGlobalStyle } from 'styled-components';
import { Provider as RebassProvider } from 'rebass';
=======
import { createGlobalStyle, ThemeProvider } from 'styled-components';
>>>>>>> 6fd4d2d31209c549aeca04e32cf567d4f5d8d715
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import 'react-tippy/dist/tippy.css';
import config from 'react-reveal/globals';
import theme from '../theme';
import Helmet from './Helmet';
<<<<<<< HEAD
import Header from './Header';
import Footer from './Footer';
=======
>>>>>>> 6fd4d2d31209c549aeca04e32cf567d4f5d8d715

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Cabin;
}
`;

config({ ssrFadeout: true });

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyle />
<<<<<<< HEAD
    <RebassProvider theme={theme}>
      <ScrollingProvider>
        <Helmet />
        <Header />
        {children}
        <Footer />
      </ScrollingProvider>
    </RebassProvider>
=======
    <ThemeProvider theme={theme}>
      <ScrollingProvider>
        <Helmet />
        {children}
      </ScrollingProvider>
    </ThemeProvider>
>>>>>>> 6fd4d2d31209c549aeca04e32cf567d4f5d8d715
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

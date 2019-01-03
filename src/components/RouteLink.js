import React from 'react';
<<<<<<< HEAD
import { Label } from 'rebass';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkAnimated = styled.span`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 5px;
  color: inherit;
  border-bottom: ${props => `${props.borderWidth} solid transparent`};
  border-bottom-color: ${props =>
    props.selected && props.theme.colors.primaryLight};
  transition: 0.4s;
  scroll-behavior: smooth;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -${props => props.borderWidth};
    background: ${props => props.theme.colors.secondary};
    height: ${props => props.borderWidth};
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

const RouteLink = ({ onClick, selected, children }) => (
  <Label
    ml={[2, 3]}
    color="background"
    fontSize={[2, 3]}
    css={{ cursor: 'pointer' }}
  >
    <LinkAnimated onClick={onClick} selected={selected} borderWidth="4px">
      {children}
    </LinkAnimated>
  </Label>
=======
import { Box } from 'rebass';
import PropTypes from 'prop-types';
import LinkAnimated from './LinkAnimated';

const RouteLink = ({ onClick, selected, children }) => (
  <Box ml={[2, 3]} color="background" fontSize={[2, 3]}>
    <LinkAnimated onClick={onClick} selected={selected}>
      {children}
    </LinkAnimated>
  </Box>
>>>>>>> 6fd4d2d31209c549aeca04e32cf567d4f5d8d715
);

RouteLink.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  children: PropTypes.node,
};

export default RouteLink;

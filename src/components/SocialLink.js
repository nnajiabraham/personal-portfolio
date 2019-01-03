import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'rebass';
<<<<<<< HEAD
=======
import { path } from 'ramda';
>>>>>>> 6fd4d2d31209c549aeca04e32cf567d4f5d8d715
import { Tooltip } from 'react-tippy';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconLink = styled(Link)`
  transition: color 0.5s;
<<<<<<< HEAD
  color: ${props => props.theme.colors[props.color]};

  &:hover {
    color: ${props => props.theme.colors[props.hover]};
  }
`;

const SocialLink = ({ fontAwesomeIcon, name, url, color, hoverColor }) => (
  <Tooltip title={name} position="bottom" trigger="mouseenter">
    <IconLink href={url} target="_blank" color={color} hover={hoverColor}>
=======
  color: ${path(['theme', 'colors', 'primary'])};

  &:hover {
    color: ${path(['theme', 'colors', 'primaryLight'])};
  }
`;

const SocialLink = ({ fontAwesomeIcon, name, url }) => (
  <Tooltip title={name} position="bottom" trigger="mouseenter">
    <IconLink href={url} target="_blank">
>>>>>>> 6fd4d2d31209c549aeca04e32cf567d4f5d8d715
      <FontAwesome name={fontAwesomeIcon} />
    </IconLink>
  </Tooltip>
);

SocialLink.propTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
<<<<<<< HEAD
  color: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
=======
>>>>>>> 6fd4d2d31209c549aeca04e32cf567d4f5d8d715
};

export default SocialLink;

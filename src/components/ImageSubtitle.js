import styled from 'styled-components';
<<<<<<< HEAD
import { Text } from 'rebass';

const ImageSubtitle = styled(Text)`
  position: relative;
  display: inline;
  top: ${props => props.top};
  left: 0;
=======
import { Box } from 'rebass';

const ImageSubtitle = styled(Box)`
  position: absolute;
  display: inline;
>>>>>>> 6fd4d2d31209c549aeca04e32cf567d4f5d8d715
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
<<<<<<< HEAD
  top: ${props => props.top};
=======

  ${props => props.x || 'left'}: 0;
  ${props => props.y || 'top'}: 0;
>>>>>>> 6fd4d2d31209c549aeca04e32cf567d4f5d8d715
  ${props =>
    props.invert
      ? 'float: left; padding-right: 20px; clip-path: polygon(0 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%);'
      : 'float: right; padding-left: 20px; clip-path: polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%);'};
<<<<<<< HEAD

  @media (min-width: 400px) {
    top: ${props => props['top-s']};
  }
=======
>>>>>>> 6fd4d2d31209c549aeca04e32cf567d4f5d8d715
`;

export default ImageSubtitle;

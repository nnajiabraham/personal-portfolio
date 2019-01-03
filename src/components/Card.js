<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
import { Box, Card as CardRebass } from 'rebass';
=======
import styled from 'styled-components';
import { Card as CardRebass } from 'rebass';
>>>>>>> 6fd4d2d31209c549aeca04e32cf567d4f5d8d715

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 30px;

  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.minWidth}, 1fr)
  );
  justify-items: center;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

<<<<<<< HEAD
const NewCard = styled(CardRebass)`
=======
export const Card = styled(CardRebass).attrs({
  bg: 'white',
  boxShadow: 0,
  borderRadius: 8,
})`
>>>>>>> 6fd4d2d31209c549aeca04e32cf567d4f5d8d715
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
<<<<<<< HEAD
=======
  height: 100%;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
>>>>>>> 6fd4d2d31209c549aeca04e32cf567d4f5d8d715

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;

<<<<<<< HEAD
export const Card = ({ children, ...props }) => (
  <Box>
    <NewCard {...props} boxShadow={0}>
      {children}
    </NewCard>
  </Box>
);

=======
>>>>>>> 6fd4d2d31209c549aeca04e32cf567d4f5d8d715
export default Card;

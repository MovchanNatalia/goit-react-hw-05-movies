import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  position: absolute;

  top: 20px;
  left: 20px;
  padding: 15px 15px;
  border-radius: 2px;
  background-color: #42362b;

  font-size: 18px;
  font-weight: 700;
  color: #fff;

  &:hover,
  &:focus {
    color: #454f83;
  }
`;

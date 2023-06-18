import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 59px;
  padding: 10px 70px;
  color: #fff;
  background-color: #0dd9fe;
`;

export const Link = styled(NavLink)`
  padding: 0 10px;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #fff;
  position: relative;
  z-index: 20;
  &:nth-of-type(2) {
    margin-left: 24px;
  }

  &:hover,
  &:focus {
    color: #454f83;
  }

  &.active {
    color: #c093ea;
    &::after {
      content: '';
      position: absolute;
      display: block;
      z-index: -1;
      width: 100%;
      height: 55px;
      background-color: #42362b;
      border-radius: 2px;
      left: 0;
      bottom: -15px;
    }
  }
`;

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.5),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Image = styled.img`
  display: block;
  width: 300px;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  padding: 30px;
  color: #42362b;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font-weight: 500;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const TitleSpan = styled.span`
  font-weight: 700;
  color: #0000ff;
`;

export const MoreNavigate = styled.div``;

export const MoreList = styled.div`
  display: flex;
  padding: 20px 28px 18px;
`;

export const MoreItem = styled.div`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

export const LinkTo = styled(NavLink)`
  font-size: 16px;
  font-weight: 700;
  color: #42362b;
  position: relative;

  &.active {
    color: #5db09d;

    &::after {
      content: '';
      position: absolute;
      display: block;
      z-index: -1;
      width: 100%;
      height: 1.5px;
      background-color: currentColor;

      left: 0;
      bottom: -2px;
    }
  }

  &:hover,
  &:focus {
    color: #ffff00;
  }
`;

import styled from '@emotion/styled';

export const FormContainer = styled.div`
  width: 350px;
  margin: 30px auto;
`;

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 12px;
  border: 0;
  border: 3px solid #2471a3;
  background-color: transparent;
  color: #42362b;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #42362b;
  }

  &::placeholder {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.17;
    color: #42362b;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: -2px;
  bottom: 14px;
  padding: 2px;
  width: 16px;
  height: 16px;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  background-image: url('https://cdn-icons-png.flaticon.com/512/711/711319.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

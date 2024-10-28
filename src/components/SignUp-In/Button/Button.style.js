import styled from 'styled-components';

export const ButtonBox = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  color: white;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: black;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background-color: #111;
  }

  &:active {
    background-color: #222;
  }

  &:disabled {
    background-color: #888;
  }

  button {
    width: 100%;
    height: 40px;
    border: 0;
    background-color: transparent;
    color: white;
  }
`;

import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.161);
`;

export const ModalBox = styled.div`
  width: 400px;
  padding: 15px;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  display: block;
  width: 300px;
`;

export const Button = styled.button`
  background-color: lightblue;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    background-color: #bae9f8;
  }

  &:active {
    background-color: #6c8992;
  }
`;

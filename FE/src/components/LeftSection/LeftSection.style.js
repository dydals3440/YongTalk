import styled from 'styled-components';

const Container = styled.div`
  flex: 1%;
`;

const LoginBox = styled.form`
  background-color: pink;
  height: 150px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputLabel = styled.label`
  flex: 1;
`;

const Input = styled.input`
  flex: 4;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LoginContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  padding: 5px 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;

export {
  Container,
  LoginBox,
  InputGroup,
  InputLabel,
  Input,
  ButtonContainer,
  LoginContainer,
  Button,
};

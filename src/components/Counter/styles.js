import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .counter__title__increment {
    color: orange;
  }
  .counter__title__decrement {
    color: red;
  }
`;
export const CounterText = styled.h1`
  color: ${(props) => props.colorText};
  font-weight: bold;
  font-size: 35px;
  border: 1px solid ${(props) => props.colorText};
  box-sizing: border-box;
  border-radius: 50%;
  padding: 50px;
`;

export const ContainerButtons = styled.section`
  display: flex;
`;

const Buttons = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: white;
  letter-spacing: 2px;
`;

export const ButtonIncrement = styled(Buttons)`
  background-color: orange;
`;

export const ButtonDecrement = styled(Buttons)`
  background-color: red;
  margin-left: 10px;
`;

import React, { useState } from "react";
import {
  Container,
  CounterText,
  ContainerButtons,
  ButtonIncrement,
  ButtonDecrement,
} from "./styles";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const getColor = () => {
    if (counter > 0) return "orange";
    if (counter < 0) return "red";

    return "";
  };

  return (
    <Container>
      <CounterText colorText={getColor()}>{counter}</CounterText>
      <ContainerButtons className="buttons">
        <ButtonIncrement onClick={() => setCounter(counter + 1)}>
          incrementar
        </ButtonIncrement>
        <ButtonDecrement onClick={() => setCounter(counter - 1)}>
          decrementar
        </ButtonDecrement>
      </ContainerButtons>
    </Container>
  );
}

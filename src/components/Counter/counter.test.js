import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("Counter Component", () => {
  test("deve iniciar com o valor 0", () => {
    render(<Counter />);
    const counterTitle = screen.getByText("0");
    expect(counterTitle).toBeInTheDocument();
  });

  test("não deve conter a propriedade color ao renderizar", () => {
    render(<Counter />);
    const counterTitle = screen.getByText("0");
    expect(counterTitle).not.toHaveStyle("color: red");
  });

  test("deve conter um botão incrementar", () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", { name: "incrementar" });
    expect(buttonIncrement).toBeInTheDocument();
  });

  test("deve conter um botão decrementar", () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", { name: "decrementar" });
    expect(buttonIncrement).toBeInTheDocument();
  });

  test("deve incrementar + 1 ao clicar no botão incrementar", () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", { name: "incrementar" });

    expect(screen.queryByText("1")).toBeNull();

    userEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("deve decrementar - 1 ao clicar no botão decrementar", () => {
    render(<Counter />);
    const buttonDecrement = screen.getByRole("button", { name: "decrementar" });

    expect(screen.queryByText("-1")).toBeNull();

    userEvent.click(buttonDecrement);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  test("deve ter um color style orange quando valor for maior que 0", () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", { name: "incrementar" });

    expect(screen.getByText("0")).not.toHaveStyle("color: orange");

    userEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toHaveStyle("color: orange");
  });

  test("deve ter um color style red quando valor for menor que 0", () => {
    render(<Counter />);
    const buttonDecrement = screen.getByRole("button", { name: "decrementar" });

    expect(screen.getByText("0")).not.toHaveStyle("color: red");

    userEvent.click(buttonDecrement);
    expect(screen.getByText("-1")).toHaveStyle("color: red");
  });
});

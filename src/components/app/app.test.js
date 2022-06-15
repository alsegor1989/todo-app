import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./app";

describe("UI test", () => {
  test("Add todo", () => {
    render(<App />);
    const input = screen.getByTestId("input");
    fireEvent.input(input, { target: { value: "Jest test todo" } });
    fireEvent.submit(input);
    expect(screen.getByText("Jest test todo")).toBeInTheDocument();
    const removeBtn = screen.getByTestId("btn-remove");
    fireEvent.click(removeBtn);
    expect(screen.queryByText("Jest test todo")).toBeNull();
  });

  test("Check todo", () => {
    render(<App />);
    const input = screen.getByTestId("input");
    fireEvent.input(input, { target: { value: "Checked todo" } });
    fireEvent.submit(input);
    const addedTask = screen.getByText("Checked todo");
    expect(addedTask).toBeInTheDocument();
    const circle = screen.getByTestId("btn-check");
    fireEvent.click(circle);
    expect(screen.getByTestId("checked-elem")).toBeInTheDocument();
    const removeBtn = screen.getByTestId("btn-remove");
    fireEvent.click(removeBtn);
    expect(screen.queryByText("Checked todo")).toBeNull();
  });

  test("Clear completed", () => {
    render(<App />);
    const input = screen.getByTestId("input");
    fireEvent.input(input, { target: { value: "To be cleared todo" } });
    fireEvent.submit(input);
    const addedTask = screen.getByText("To be cleared todo");
    expect(addedTask).toBeInTheDocument();
    const circle = screen.getByTestId("btn-check");
    fireEvent.click(circle);
    expect(screen.getByTestId("checked-elem")).toBeInTheDocument();
    const ClearBtn = screen.getByTestId("btn-clear-completed");
    fireEvent.click(ClearBtn);
    expect(screen.queryByText("To be cleared todo")).toBeNull();
  });
});

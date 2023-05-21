import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PrimaryButton } from ".";

describe("PrimaryButton", () => {
  it("renders the button with correct text", () => {
    render(<PrimaryButton>Hello</PrimaryButton>);
    const buttonElement = screen.getByRole("button", { name: "Hello" });
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders the button as disabled when loading prop is true", () => {
    // Suppress the warning
    console.error = jest.fn();
    render(<PrimaryButton loading>Hello</PrimaryButton>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });

  it("invokes the onClick handler when the button is clicked", () => {
    const handleClick = jest.fn();
    render(<PrimaryButton onClick={handleClick}>Click me</PrimaryButton>);
    const buttonElement = screen.getByRole("button", { name: "Click me" });
    userEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

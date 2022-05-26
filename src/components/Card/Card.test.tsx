import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Card from "./Card";

expect.extend(toHaveNoViolations);

describe("Card Component", () => {
  it("Should render without errors", () => {
    const title = "thing one";
    const color = "#fff";
    const icon = { src: "file/path/here.png", alt: "an awesome icon" };
    const copy = "description goes here";
    render(
      <Card key={title} color={color} icon={icon} title={title} copy={copy} />
    );
    expect(screen.getByAltText(/an awesome icon/i)).toBeInTheDocument();
    expect(screen.getByText(/thing one/i)).toBeInTheDocument();
    expect(screen.getByText(/description goes here/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("Should render without axe a11y errors", async () => {
    const title = "thing one";
    const color = "#fff";
    const icon = { src: "file/path/here.png", alt: "an awesome icon" };
    const copy = "description goes here";
    render(
      <Card key={title} color={color} icon={icon} title={title} copy={copy} />
    );
    expect(await axe(screen.getByText("thing one"))).toHaveNoViolations();
  });
});

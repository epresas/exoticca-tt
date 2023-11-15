import { render, screen } from "@utils/test-utils";
import SubHeader from "./index";

describe("SubHeader", () => {
  const mockSetFilter = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the input with the correct label", () => {
    render(<SubHeader filter="" setFilter={mockSetFilter} />);
    const inputElement = screen.getByLabelText("Filtrar por título");
    expect(inputElement).toBeInTheDocument();
  });
});

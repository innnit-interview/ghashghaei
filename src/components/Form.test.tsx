import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

// Mock localStorage
beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: {
      setItem: jest.fn(),
      getItem: jest.fn(() => null),
      removeItem: jest.fn(),
      clear: jest.fn(),
    },
    writable: true,
  });
});

describe("Form Component", () => {
  test("renders the form elements correctly", () => {
    render(<Form />);

    // Check if title input is rendered
    expect(
      screen.getByPlaceholderText("Geben Sie den Titel ein")
    ).toBeInTheDocument();

    // Check if news content textarea is rendered
    expect(
      screen.getByPlaceholderText(
        "Bitte schreibe ein paar Worte zu deinem Update."
      )
    ).toBeInTheDocument();

    // Check if author input is rendered
    expect(screen.getByPlaceholderText("Vorname Nachname")).toBeInTheDocument();

    // Check if buttons are rendered
    expect(screen.getByText("Abbrechen")).toBeInTheDocument();
    expect(screen.getByText("Entwurf speichern")).toBeInTheDocument();
    expect(screen.getByText("Update veröffentlichen")).toBeInTheDocument();
  });

  test("shows error message when fields are empty on save draft", () => {
    render(<Form />);

    const saveDraftButton = screen.getByRole("button", {
      name: /Entwurf speichern/i,
    });

    fireEvent.click(saveDraftButton);

    // Check if error message is displayed
    expect(
      screen.getByText("Bitte füllen Sie alle Felder aus!")
    ).toBeInTheDocument();
  });

  test("saves draft to localStorage when fields are filled", () => {
    render(<Form />);

    // Fill in the title and news content
    fireEvent.change(screen.getByPlaceholderText("Geben Sie den Titel ein"), {
      target: { value: "Test Title" },
    });
    fireEvent.change(
      screen.getByPlaceholderText(
        "Bitte schreibe ein paar Worte zu deinem Update."
      ),
      {
        target: { value: "Test Content" },
      }
    );

    const saveDraftButton = screen.getByRole("button", {
      name: /Entwurf speichern/i,
    });
    fireEvent.click(saveDraftButton);

    // Check if localStorage.setItem was called with the correct data
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "formDraft",
      JSON.stringify({
        title: "Test Title",
        newsContent: "Test Content",
        authorName: "",
      })
    );
  });

  test("enables author input when toggle is checked", () => {
    render(<Form />);

    const toggleButton = screen.getByText("Absender ändern");
    fireEvent.click(toggleButton);
  });
});

import React from "react";
import {
  render,
  waitForElement,
  fireEvent,
} from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  return jest.clearAllMocks;
});

afterAll(() => {
  return jest.resetAllMocks;
});

test("renders without crashing", () => {
  render(<App />);
});

test("renders app title", () => {
  const { getByText } = render(<App />);
  const appTitle = getByText(/event manager/i);
  expect(appTitle).toBeInTheDocument();
});

test("that an event renders after api call", async () => {
  const fakeResponse = {
    activity: "lunch",
    endDate: "2019-02-26 13:00",
    id: 1,
    location: "Lagerhuset",
    startDate: "2019-02-26 12:00",
  };
  const mockFetch = Promise.resolve({
    json: () => Promise.resolve([fakeResponse]),
  });
  const mockedFetch = jest
    .spyOn(window, "fetch")
    .mockImplementationOnce(() => mockFetch as any);
  const { getAllByText } = render(<App />);
  const [ resolvedValue ] = await waitForElement(() => getAllByText("lunch"));
  expect(resolvedValue).toHaveTextContent("lunch");
  expect(mockedFetch).toHaveBeenCalledTimes(1);
});

test("open dialog", async () => {
  const { getByRole } = render(<App />);
  const openDialog = getByRole("button", { name: "add an event" });
  fireEvent.click(openDialog);
  const resolvedValue = await waitForElement(() => getByRole("dialog"));
  expect(resolvedValue).toHaveTextContent("Create new event");
});

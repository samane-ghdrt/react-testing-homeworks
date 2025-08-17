import TodoContainer from "../6-TodoApp/TodoContainer";
import {screen,render, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom"
describe("todoapp", () => {
  test('todoapp test', () => {
    render(<TodoContainer />);
    const input=screen.getAllByPlaceholderText('write a todo');
    const button=screen.getByRole('button');
    fireEvent.click(input,{target:{value:"Learn React"}})
    fireEvent.click(button);
    expect(screen.getAllByRole("listitem")).toHveLength(1);
  });

});
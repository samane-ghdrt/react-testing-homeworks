import Login from "../4-Login/Login";
import { screen,render,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
describe("test login",()=>{
    test("test login",()=>{
        render(<Login/>)
        expect(screen.getByRole("button")).toBeInTheDocument()
    }),
     test("test login",()=>{
        render(<Login/>)
        expect(screen.getByRole("button")).toHaveTextContent("login")
    }),
     test("test login",()=>{
        render(<Login/>)
        const button=screen.getByRole("button");
        fireEvent.click(button)
        expect(button).toHaveTextContent("logout")
    })
})
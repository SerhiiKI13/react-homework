import {createContext} from "react";
type MyContextType = {
    theme: string,
    changeTheme: (theme: string) => void
}

export const MyContext = createContext<MyContextType>({
    theme: 'light',
    changeTheme: (theme: string) => {
        console.log(theme)
    }
});
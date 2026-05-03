import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function useTheme(){
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error("Wrapped in ThemeProvider");
    }
    return context;
}
// This is how to create a custom theme
import { createTheme } from "@mui/material";

export const theme = createTheme({
   palette: {
    primary: {
        main: "#1760a5",
        light: "skyblue"
    }, 
    otherColor: {
        main: "#999"
    }
   } 
})
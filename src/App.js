import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import { Box, Stack, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color = {"text.primary"} className="App">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between"> 
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;











// {/* MUI BASICS */}

// This is to reuse styles on a similar component, creating a custom reusable component
// const BlueButton = styled(Button)({
//   backgroundColor: "skyblue",
//   color: "#888",
//   margin: 5,
//   "&:hover": {
//     backgroundColor: "lightblue"
//   },
//   "&:disabled": {
//     backgroundColor: "gray",
//     color: "white"
//   }
// })

//       {/* <Button 
//         variant="text"
//       >
//         Text
//       </Button>

//       <Button 
//         startIcon={<SettingsIcon />} 
//         variant="contained" 
//         color="secondary" 
//         size="small"
//       >
//         Settings
//       </Button>

//       <Button 
//         startIcon={<Add />} 
//         variant="contained" 
//         color="success" 
//         size="small"
//       >
//         Add new post
//       </Button>

//       <Button 
//         variant="outlined"
//       >
//         Outlined
//       </Button>

//       <Typography variant="h1" component="p">
//         It uses h1 style but its a p tag
//       </Typography> */}

//       {/* This is how to apply styles to override teh styles that come with MUI */}
//       {/* <Button variant="contained" sx={{
//         backgroundColor: "skyblue",
//         color: "#888",
//         margin: 5,
//         "&:hover": {
//           backgroundColor: "lightblue"
//         },
//         "&:disabled": {
//           backgroundColor: "gray",
//           color: "white"
//         }
//       }}>My Unique Button</Button> */}

//       {/* Using the custom reusable component here */}
//       {/* <BlueButton>My Button</BlueButton>
//       <BlueButton>Another Button</BlueButton> */}

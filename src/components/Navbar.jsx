import { Mail, Notifications, Pets } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
})) 

const Icons = styled(Box)(({ theme }) => ({
    // Display nothing in small screen
    display: "none",
    gap: "20px",
    alignItems: "center",
    // Displays only when screen is sm dimensions or above, hence the use of "up"
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    // Only displays in small screen
    display: "flex",
    gap: "10px",
    alignItems: "center",
    // Displays nothing when screen is sm dimensions or above
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open = {open}
                    onClose={(e) => setOpen(false)}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>

                <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}}>Tharun</Typography>

                <Pets sx={{display: {xs: "block", sm: "none"}}}/>

                <Search><InputBase placeholder="search..."/></Search>

                {/* PC Version View */}
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar 
                        sx={{width: 30, height: 30}} 
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        onClick = {e => setOpen(true)}
                    />
                </Icons>

                {/* Mobile version view */}
                <UserBox onClick = {e => setOpen(true)}>
                    <Avatar 
                        sx={{width: 30, height: 30}} 
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                    <Typography variant="span">John</Typography>
                </UserBox>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar
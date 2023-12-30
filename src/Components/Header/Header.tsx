import { ShoppingCart, Menu, Search } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  alpha,
  styled,
} from "@mui/material";
import { useState } from "react";
import Categories from "./Categories";
const StyledThing = styled("div")(() => ({
  flexGrow: 1,
}));

const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const Header = () => {
  console.log("Header");
  const [user, setUser] = useState();
  return (
    <AppBar position="static">
      <Toolbar>
        <Categories />
        <StyledThing>
          <SearchWrapper>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </SearchWrapper>
        </StyledThing>
        <IconButton>
          <ShoppingCart />
        </IconButton>
        {user ? (
          <IconButton>
            <Avatar />
          </IconButton>
        ) : (
          <Button>Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

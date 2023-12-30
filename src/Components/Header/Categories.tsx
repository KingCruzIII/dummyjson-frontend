import { Button, MenuItem, Menu, Toolbar, Typography } from "@mui/material";
import { useProducts } from "../../Contexts/ProductsContext";
import { useCallback, useEffect, useState } from "react";
import { map, slice } from "ramda";
import { Menu as MenuIcon } from "@mui/icons-material";

const Categories = () => {
  const { categories } = useProducts();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="text"
        startIcon={<MenuIcon />}
        onClick={handleClick}
      >
        Categories
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {map((item) => {
          return <MenuItem>{item}</MenuItem>;
        }, categories)}
      </Menu>
    </>
  );
};

export default Categories;

// {
// <Toolbar>
// <Button variant="outlined" startIcon={<Menu />}>
//   Categories
// </Button>
// <div style={{ flexGrow: 1 }} />
// {map((item) => {
//   return <Button>{item}</Button>;
// }, slice(0, 8, categories))}
// <div style={{ flexGrow: 1 }} />
// </Toolbar>
// }

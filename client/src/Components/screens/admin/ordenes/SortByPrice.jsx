import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { pricetolow, pricetohigh } from "../../../../actions";
import styled from "styled-components";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function SortByPrice() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const dispatch = useDispatch();

  const low = (event) => {
    event.preventDefault();
    dispatch(pricetolow());
  };

  const high = (event) => {
    event.preventDefault();
    dispatch(pricetohigh());
  };

  return (
    <StyledSortButton>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        className="addProduct"
        onClick={handleClick}
        style={{height: "2rem"}}
      >
        Sort By Price
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem className="option-drop">
          <ListItemText
            primary="Price-low to high"
            onClick={low}
            onClose={handleClose}
          />
        </StyledMenuItem>

        <StyledMenuItem className="option-drop">
          <ListItemText primary="Price-high to low" onClick={high} />
        </StyledMenuItem>
      </StyledMenu>
    </StyledSortButton>
  );
}

const StyledSortButton = styled.div`
.addProduct{
  background: #D5D5D5 !important;
  box-shadow: none;
  color: #0a0a0a !important;
  text-transform: none;
  border: 1px solid transparent;
  transition: none;
  border-radius: 10px;
  font-size: 1em;

  &:hover{
    background: white !important;
    box-shadow: none;
    border: 1px solid #D9D9D9;
  }
}

.customized-menu{
  background: red;
  box-shadow: 0 15px 20px 0 rgb(0 0 0 / 8%), 0 1px 4px 0 rgb(0 0 0 / 8%) !important;
}
`

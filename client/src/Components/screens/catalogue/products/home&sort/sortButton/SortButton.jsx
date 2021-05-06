import React from 'react'
// import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { productToHigh, productToLow } from '../../../../../../actions';
  
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

const SortButton = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const dispatch = useDispatch();

    const low = (event) => {
        event.preventDefault();
        dispatch(productToHigh());
    };

    const high = (event) => {
        event.preventDefault();
        dispatch(productToLow());
    };
    return (
        <div>

            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                className="addProduct"
                onClick={handleClick}
                style={{ height: "4.5vh" }}
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
            <StyledMenuItem>
                <ListItemText
                    primary="Price-low to high"
                    onClick={low}
                    onClose={handleClose}
                />
            </StyledMenuItem>

            <StyledMenuItem>
                <ListItemText primary="Price-high to low" onClick={high} />
            </StyledMenuItem>
        </StyledMenu>
        </div>
    )
}


export default SortButton

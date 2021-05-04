import React from 'react'
import { useSelector } from "react-redux";
import styled from 'styled-components';
// import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { productToHigh, productToLow } from '../../../../../../actions';


const useStyles = makeStyles({
    root: {
      padding: 15,
      width: 300,
      height: 80,
    },
  });
  
  function valuetext(value) {
    return `${value}°C`;
  }
  
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
    // let {status} = useSelector((state)=>state.theme);
    const classes = useStyles();
    // const [value, setValue] = React.useState([20, 37]);
    //estado local del rango

    const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        // console.log(event.currentTarget)
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
        // <StyledSortButton light={status}>
        //     <span>Order by: Price</span>
        // </StyledSortButton>
    )
}

const StyledSortButton = styled.button`
    background:${({light})=>light ? 'transparent' : '#222222'};
    color:${({light})=>light ? 'inherit' : 'white'};
    display:flex;
    justify-content:center;
    align-items:center;
    background:none;
    padding: 1rem 1rem;
    border: 1px solid #d4d4d4;
    border-radius: 13px;
    width:9rem;
    img{
        width:1rem;
        height:1rem;
        margin-right:0.3rem;
        //background:yellow;
    }
    span{
        //background:red;
        //width:1.1rem;
        height:1.1rem;
        display:flex;
        align-items:center;
        
    }
`;

export default SortButton

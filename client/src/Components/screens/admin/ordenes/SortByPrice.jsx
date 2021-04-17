import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';

import styles from './SortByPrice.module.css';
import { pricetolow } from "../../../../actions";

const useStyles = makeStyles({
    root: {
      padding:15,
      width: 300,
      height:80,
     
    },
  });

  function valuetext(value) {
    return `${value}°C`;
  }

  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },

        })((props) => (
          <Menu
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

 

export default function SortByPrice() {

    const classes = useStyles();
    const [value, setValue] = React.useState([20, 37]);
    //estado local del rango


    console.log('value', value);
    console.log('setValue', setValue);

    let { orders, search, ordersFilter } = useSelector((state) => state.reducer);

    const [anchorEl, setAnchorEl] = React.useState(null);

  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleClose = () => {
        setAnchorEl(null);
      };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const dispatch = useDispatch();

    const low = () => {
      
      
      console.log('event');
      dispatch(pricetolow());
      console.log('low');

      
    }

   

    return (

        (
            <div>
              <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                className="addProduct purple-btn"
                onClick={handleClick}
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
                    
                          <div className={classes.root}>
                              <div id="range-slider">
                                  Price
                              </div>
                  
                              <Slider
                                  value={value}
                                  onChange={handleChange}
                                  valueLabelDisplay="auto"
                                  aria-labelledby="range-slider"
                                  getAriaValueText={valuetext}
                                  
                              />
                          </div>

                    </StyledMenuItem>

                    <StyledMenuItem>
                        <div onClick={low}>
                            <ListItemText primary="Price-low to high"   />
                        </div>
                        
                    </StyledMenuItem>
                    
                    <StyledMenuItem>
                        <ListItemText primary="Price-high to low" />
                    </StyledMenuItem>

              </StyledMenu>
            </div>
          )
                 
    )

}

const StyledAdminPanel = styled.div`
 
    .right{
        width:87%;
        display:flex;
        flex-direction:column;
        .top{
            height:15vh;
        }
        .addProduct{
          background:#5E3F71;
          color:white;
          display:flex;
          align-items: center;
          justify-content:center;
      }
      .purple-btn:hover{
          background-color: #734191
      }
       
    }
`;
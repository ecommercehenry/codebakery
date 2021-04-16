import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';

import styles from './SortByPrice.module.css';

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

    console.log('value', value);
    console.log('setValue', setValue);

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

    return (

        (
            <div>
              <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Open Menu
              </Button>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                    <StyledMenuItem>
                    <ListItemText  />
                        <div className={classes.root}>
                            <div id="range-slider">
                                Temperature range
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
                    <ListItemText primary="Price-low to high" />
                    </StyledMenuItem>
                    
                    <StyledMenuItem>
                    <ListItemText primary="Price-high to low" />
                    </StyledMenuItem>

              </StyledMenu>
            </div>
          )
        
        
                
                
    )

}



{/* <form action="#">
 
            <div className={styles.select_box}>
            
                <label for="select_box1" className={styles.label.select_box1}><span className={styles.label_desc}>Choose your country</span> </label>
                    <select id="select-box1" className="select">
                        <option value="Choice 1">Price-low to high</option>
                        <option value="Choice 2">Price-high to low</option>
                        <option value="Choice 3">Neverland</option>
                    </select>
            
            </div>
        </form>  */}
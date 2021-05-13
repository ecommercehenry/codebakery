import React, { useState  } from "react";
import GET_ALL_ORDERS_USER from "../../../Apollo/queries/getAllOrdersUser";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Prueba from "./Prueba"; 
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 850,
    //backgroundColor: theme.palette.background.paper,
    background: "white",
    position: "relative",
    height: "fit-content"
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

export default function UserProduct() {
  const [click, setClick] = useState(1); 

  console.log(click, 'click')
  const classes = useStyles();
  const [index, setIndex ]= useState(null)
  const [open, setOpen] = useState(false);

  const detailHandler = (id) => {
    setClick(2)
    setIndex(id)

  }
  const handleClick = () => {
    setOpen(!open);
  };
  let { id } = useParams();
  const { data } = useQuery(GET_ALL_ORDERS_USER, {
    variables: {
      userId: parseInt(id),
      fetchPolicy: "no-cache",
    },
  });

  console.log(data)

  return (
    <StyledUserOrders>
    <div className="container-profile">
            <h1>Orders History</h1>
    </div>
    {click === 1 ? 
    (<div className="order-container">
      <List className={classes.root} subheader={<li />}>
        {data?.getAllOrdersUser.orders.length > 0 ? data?.getAllOrdersUser?.orders.map((sectionId) => (
          <li key={`section-${sectionId.id}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader>{`Orders ${sectionId.id}`}</ListSubheader>
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Detail Order" />

                {open ? <ExpandLess /> : <ExpandMore />}
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItem key={`item-${sectionId.id}`}>
                        <ListItemText
                          primary={`Status ${sectionId.status} `}
                        />
                        <Button value="name" onClick={() => detailHandler(sectionId.id)} >
                          detail
                        </Button>
                      </ListItem>
                    </ListItem>
                  </List>
                </Collapse>
              </ListItem>
            </ul>
          </li>
        )) : "You haven't made an order yet"}
      </List>
    </div>
    
    ) : (
      <Prueba setClick={setClick} click={click} setIndex={setIndex} index={index}/>

    )} 
    </StyledUserOrders>
  );
}

const StyledUserOrders  = styled.div`
margin-top: 1rem;
h1 {
    font-weight: 700;
    color: #5e3f71;
    margin-bottom: 0;
  }

.container-profile {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    // margin-bottom: 40rem;
    width: 100%;
    height: 3.3rem;
    background-color: #f1f1f1;
    z-index: 1;
  }

.order-container{
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 4.5rem);
}

@media (max-width: 850px) {
    .container-profile{
      display: none;
    }
  }
`


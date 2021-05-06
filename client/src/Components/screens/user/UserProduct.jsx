import React from "react";
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
import StarBorder from "@material-ui/icons/StarBorder";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 850,
    //backgroundColor: theme.palette.background.paper,
    background: "rgb(236, 227, 250)",
    position: "absolute",
    left: 250,
    top: 85,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  titlee: {

    position: 'absolute',
    left: '15rem',
    top: '1.5rem',
  }, 
}));

export default function UserProduct() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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

  return (
    <div>
      <h1 className={classes.titlee}>Orders History</h1>
      <List className={classes.root} subheader={<li />}>
        {data?.getAllOrdersUser?.orders.map((sectionId) => (
          <li key={`section-${sectionId.id}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader>{`Orders ${sectionId.id}`}</ListSubheader>
              <ListSubheader>{`Status ${sectionId.status}`}</ListSubheader>
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Detail Order" />

                {open ? <ExpandLess /> : <ExpandMore />}
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      {
                     sectionId.lineal_order.map(
                        (item) => (
                            <ListItem key={`item-${sectionId.id}-${item}`}>
                            <ListItemText primary={`Product ${item.name} `} />
                            <ListItemText primary={`Price $ ${item.price}`} />
                          </ListItem>
                        )
                      )}
                    </ListItem>
                  </List>
                </Collapse>
              </ListItem>
            </ul>
          </li>
        ))}
      </List>
      ;
    </div>
  );
}



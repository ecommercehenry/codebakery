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
import StarBorder from "@material-ui/icons/StarBorder";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import closeIcon from "../../../icons/close2.svg"; 
import Prueba from "./Prueba"; 

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
    position: "absolute",
    left: "15rem",
    top: "1.5rem",
  },
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

  return (
    click === 1 ? 
    (<div>
      <h1 className={classes.titlee}>Orders History</h1>
      <List className={classes.root} subheader={<li />}>
        {data?.getAllOrdersUser?.orders.map((sectionId) => (
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
                      {/* {
                     sectionId.lineal_order.map(
                        (item) => (
                            <ListItem key={`item-${sectionId.id}-${item}`}>
                            <ListItemText primary={`Product ${item.name} `} />
                            <ListItemText primary={`Price $ ${item.price}`} />
                          </ListItem>
                        )
                      )} */}
                    </ListItem>
                  </List>
                </Collapse>
              </ListItem>
            </ul>
          </li>
        ))}
      </List>
      ;
    </div>) : (
      <Prueba setClick={setClick} click={click} setIndex={setIndex} index={index}/> 
  //  <div style={{
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       backgroundColor: "rgba(0, 0, 0, 0.664)",
  //       zIndex: 5,
  //       position: "fixed",
  //       height: "100vh",
  //       width: "100vw",
  //       top: "0",
  //       left: "0",
  //       paddingLeft: "10vw",
  //     }}
  //   >
  //     <StyledForm>
  //     <button onClick={()  => setClick(1)} className="closeee"><img src={closeIcon} width="30px" display="flex" alt="closeIcon"/></button> 
  //       <div className="infoProductt">
  //         <div className="namee">
            
  //           <label>Password</label>
  //           {
  //           (console.log(click, 'seguncdo'))
  //           }

  //         </div>
  //     </div>
  //     </StyledForm>
  // </div>

    ) 
  );
}

const StyledForm = styled.form`
width:35%;
height: 80vh;
background: white;
border-radius:65px;
padding: 3rem 4rem;
border:1px solid #f3dff3;
position: relative;

.closeee{
  display: flex;
  justify-content: flex-end;

}
.infoProductt{
  //background:blue;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  .namee{
      //background:green;
      height:20%;
      display:flex;
      flex-direction:column;
      justify-content:center;
  }
`; 
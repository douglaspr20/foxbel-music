import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import MuiListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles(() => ({
  ListSubheader: {
    fontWeight: 'bold',
    fontSize: '22px',
    lineHeight: '27px',
    color: '#fff',
    paddingLeft: 40
  }
}));

const ListItem = withStyles({
  root: {
    fontSize: '16px',
  lineHeight: '20px',
  paddingLeft: 40,
    "&$selected": {
      color: '#E86060',
      fontWeight: 'bold'
    },
    "&$selected::before": {
      background: '#E86060',
      content: "''",
      display: 'block',
      height: 20,
      width: 5,
      position: 'absolute',
      left: '0px'
    }
  },
  selected: {}
})(MuiListItem);


const LateralMenu = () => {
  const classes = useStyles();
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader component="li" className={classes.ListSubheader}>Mi Librería</ListSubheader>}
    >
      <ListItem button selected className={classes.ListItem} >
        <ListItemText primary="Recientes" />
      </ListItem>
      <ListItem button className={classes.ListItem}>
        <ListItemText primary="Artistas" />
      </ListItem>
      <ListItem button className={classes.ListItem}>
        <ListItemText primary="Álbums" />
      </ListItem>
      <ListItem button className={classes.ListItem}>
        <ListItemText primary="Canciones" />
      </ListItem>
      <ListItem button className={classes.ListItem}>
        <ListItemText primary="Estaciones" />
      </ListItem>

      <ListSubheader component="li" className={classes.ListSubheader}>Playlist</ListSubheader>
      <ListItem button className={classes.ListItem}>
        <ListItemText primary="Metal" />
      </ListItem>
      <ListItem button className={classes.ListItem}>
        <ListItemText primary="Para Bailar" />
      </ListItem>
      <ListItem button className={classes.ListItem}>
        <ListItemText primary="Rock 90s" />
      </ListItem>
      <ListItem button className={classes.ListItem}>
        <ListItemText primary="Baladas" />
      </ListItem>
    </List>
  );
};

export default LateralMenu;

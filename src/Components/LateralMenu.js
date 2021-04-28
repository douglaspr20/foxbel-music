import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles(() => ({
  ListSubheader: {
    fontWeight: 'bold',
    fontSize: '22px',
    lineHeight: '27px',
    color: '#fff'
  },
  ListItem: {

  }
}));


const LateralMenu = () => {
  const classes = useStyles();
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader component="li" className={classes.ListSubheader}>Mi Librería</ListSubheader>}
    >
      <ListItem button selected>
        <ListItemText primary="Recientes" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Artistas" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Álbums" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Canciones" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Estaciones" />
      </ListItem>

      <ListSubheader component="li" className={classes.ListSubheader}>Playlist</ListSubheader>
      <ListItem button>
        <ListItemText primary="Metal" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Para Bailar" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Rock 90s" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Baladas" />
      </ListItem>
    </List>
  );
};

export default LateralMenu;

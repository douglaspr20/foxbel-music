import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Slider from '@material-ui/core/Slider';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles((theme) => ({
    appBar: {
      display: 'flex',
      justifyContent: 'space-around',
      zIndex: theme.zIndex.drawer + 1,
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
   slider: {
    width: 75,
   }
  }));

const Reproductor = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <>
         <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <SkipPreviousIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit">
            <PlayCircleFilledIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit">
            <SkipNextIcon fontSize="large" />
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.slider}>
          <Slider color="secondary" value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
          </div>
          <IconButton edge="end" color="inherit">
            <VolumeUp fontSize="small"/>
          </IconButton>
        </Toolbar>
      </AppBar>
        </>
    )
}

export default Reproductor

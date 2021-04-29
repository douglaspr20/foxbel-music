import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Slider from '@material-ui/core/Slider';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';

import TrackContext from '../context/tracks/TrackContext';

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

  const [value, setValue] = useState(30);

  const [options, setOptions] = useState({
    play: true,
    pause: false
  })
  const { trackPlay } = useContext(TrackContext);

  let audio;

  if(trackPlay === null){
  }else{
    audio = new Audio(trackPlay.preview)
  }
  

  const play = () => {
    setOptions({ play: true, pause: false })
    audio.play()
  }

  const pause = () => {
    setOptions({ play: false, pause: true })
    audio.pause()
  }
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
          {(options.play) ?
            (
              <IconButton color="inherit" onClick={play} >
                <PlayCircleFilledIcon fontSize="large"/>
              </IconButton>
            ) 
            :
            <IconButton color="inherit">
              <PauseCircleFilledIcon fontSize="large" onClick={pause}/>
            </IconButton>
          }

          <IconButton color="inherit">
            <SkipNextIcon fontSize="large" />
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.slider}>
            <Slider color="secondary" value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
          </div>
          <IconButton edge="end" color="inherit">
            <VolumeMuteIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Reproductor

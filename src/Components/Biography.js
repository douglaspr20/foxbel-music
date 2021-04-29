import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from '@material-ui/core/CardActions';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TrackContext from "../context/tracks/TrackContext";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: 'relative'
  },
  cover: {
    width: 250,
  },
  playIconContainer: {
    position: 'absolute',
    left: 50,
    top: 80
  },
  icon: {
    fontWeight: 900,
    fontSize: '72px',
    lineHeight: '83px',
    color: '#fff',
  },
  titleArtist: {
    position: 'absolute',
    top: 40,
    left: '20%',
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "27px",
    color: '#fff'
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  bestOf: {
    position: 'absolute',
    left: '20%',
    bottom: '20%',
    fontSize: 14,
    lineHeight: 17,
    color: '#fff'
  },
  fan: {
    position: 'absolute',
    left: '32%',
    bottom: '43.5%',
    fontSize: 10,
    lineHeight: 12,
    color: "#662323",
    fontWeight: 'bold',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    left: '19%'
  },
  btnPlay: {
    background: '#E86060',
    mixBlendMode: 'normal',
    color: '#fff',
    border: 'none',
    borderRadius: 100,
    fontStyle: 'normal',
    fontWeight: 'normal',
    paddingTop: 6,
    paddingBottom: 7,
    paddingLeft: 22,
    paddingRight: 22
  },
  btnFollow: {
    background: 'none',
    border: '1px solid #EB5757',
    color: '#EB5757',
    borderRadius: 100,
    paddingTop: 6,
    paddingBottom: 7,
    paddingLeft: 38,
    paddingRight: 38
  }
}));

const Biography = () => {
  const classes = useStyles();
  const { tracks, artist } = useContext(TrackContext);


  if (!tracks || !artist) return null;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={tracks[0].album.cover_big}
        title={artist.name}
      />

      <div
        style={{
          position: 'relative',
          background: `linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7)), url(${artist.picture_big})`,
          backgroundPosition: '100% 50%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: "normal",
          opacity: .5,
          height: 250,
          width: '100%',
        }}
      >
      </div>
      <Typography className={classes.titleArtist}>{artist.name}</Typography>
      <Typography className={classes.bestOf}>
        Lo mejor de {artist.name} {' '}
      </Typography>
      <Typography className={classes.fan}>
        {artist.nb_fan} seguidores
      </Typography>

      <CardActions className={classes.buttonsContainer}>
        <Button className={classes.btnPlay} variant="contained" color="primary">
          Reproducir
        </Button>
        <Button className={classes.btnFollow} >
          Seguir
        </Button>
        <IconButton aria-label="More options">
          <MoreHorizIcon style={{ color: '#fff' }} />
        </IconButton>
      </CardActions>

      <IconButton aria-label="Add List" className={classes.playIconContainer} >
        <PlayArrowIcon className={classes.icon} />
      </IconButton>
    </Card>
  );
};

export default Biography;

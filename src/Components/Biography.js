import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TrackContext from "../context/tracks/TrackContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  titleArtist: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "27px",
    color: '#fff'
  },
  content: {
    display: "flex",
  },
  cover: {
    width: 250,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  bestOf: {
    fontSize: 14,
    lineHeight: 17,
  },
  fan: {
    fontSize: 10,
    lineHeight: 12,
    color: "#662323",
  },
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
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7)), url(${artist.picture_big})`,
          backgroundPosition: '100% 50%', 
          backgroundSize: 'contain', 
          backgroundRepeat: 'no-repeat',
          mixBlendMode: "normal",
          opacity: 0.5,
          height: 250,
          width: '100%',
        }}
      >
        <CardContent className={classes.content}>
          <Typography className={classes.titleArtist}>{artist.name}</Typography>
        </CardContent>
        <CardContent className={classes.content} style={{color: '#fff'}}>
          <Typography>
            Lo mejor de {artist.name}
          </Typography>
          {' '}
          <Typography>
            {artist.nb_fan} seguidores
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default Biography;

import React, { useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import TrackContext from '../context/tracks/TrackContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    titleArtist: {
        fontWeight: 'bold',
        fontSize: '22px',
        lineHeight: '27px',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
       display: 'flex'
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    infoArtist: {
        background: `linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7))`,
        mixBlendMode: 'normal',
        opacity: 0.5,
        transform: 'matrix(-1, 0, 0, 1, 0, 0)',
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    bestOf: {
        fontSize: 14,
        lineHeight: 17
    },
    fan: {
        fontSize: 10,
        lineHeight: 12,
        color: '#662323'
    }
}));

const Biography = () => {
    const classes = useStyles();
    const { tracks, artist } = useContext(TrackContext)

    if (!tracks || !artist) return null

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={tracks[0].album.cover_big}
                title={artist.name}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography className={classes.titleArtist}>
                        {artist.name}
                    </Typography>
                </CardContent>
                <div className={classes.infoArtist} styles={{backgroundImage: `${artist.picture_big}`}}>

                </div>

                <CardContent className={classes.content}>
                    <Typography className={classes.bestOf}>
                        Lo mejor de {artist.name} 
                    </Typography>
                    <Typography className={classes.fan}>
                        {artist.nb_fan} seguidores
                    </Typography>
                </CardContent>
            </div>

        </Card>
    )
}

export default Biography

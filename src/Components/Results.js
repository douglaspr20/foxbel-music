import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TrackContext from '../context/tracks/TrackContext';

const useStyles = makeStyles({
    title: {
        fontWeight: 'bold',
        fontSize: '22px',
        lineHeight: '27px',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    root: {
        minWidth: 160,
        maxWidth: 160,
        marginRight: 22,
        marginBottom: 22,
        borderRadius: 0,
        boxShadow: 'none',
        position: 'relative'
    },
    titleTrack: {
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '17px',
        color: '#555555',
    },
    titleArtist: {
        fontSize: '12px',
        lineHeight: '15px',
        color: '#555555',
    },
    playIconContainer: {
        position: 'absolute',
        height: 36,
        width: 32,
        left: 64,
        top: 62,
    },
    icon: {
        fontWeight: 900,
        fontSize: '36px',
        lineHeight: '41px',
        color: '#FFFFFF',
    },
    moreIconContainer: {
        position: 'absolute',
        height: 36,
        width: 32,
        right: 0,
        top: 2,
    },
});

const Results = () => {
    const { tracks } = useContext(TrackContext)

    const classes = useStyles();
    console.log(tracks)


    if (tracks.length === 0) {
        return (
            <div>
                <h1>Aún no hay resultados. Comienza tu busqueda!!!</h1>
            </div>
        )
    }
    return (
        <>
            <Typography component="h5" variant="h5" color="primary" className={classes.title}>
                Resultados
            </Typography>
            <div className={classes.container}>

                {
                    tracks.map(track => {
                        return (
                            <Card key={track.id} className={classes.root}>
                                <CardMedia
                                    component="img"
                                    alt={track.album.title}
                                    height="160"
                                    width="160"
                                    image={track.album.cover_big}
                                    title={track.album.title}
                                />
                                <div >
                                    <CardContent >
                                        <Typography className={classes.titleTrack}>
                                            {track.album.title}
                                        </Typography>
                                        <Typography className={classes.titleArtist}>
                                            {track.artist.name}
                                        </Typography>
                                    </CardContent>
                                </div>
                                    <IconButton aria-label="Add List" className={classes.playIconContainer} >
                                        <PlayArrowIcon className={classes.icon} />
                                    </IconButton>

                                    <IconButton aria-label="More options" className={classes.moreIconContainer}>
                                        <MoreVertIcon className={classes.icon} />
                                    </IconButton>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Results

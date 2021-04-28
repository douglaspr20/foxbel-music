import React, { useReducer } from 'react';
import TrackReducer from './TrackReducer';
import TrackContext from './TrackContext';
import axios from 'axios';
import { GET_TRACKS, GET_ARTIST } from '../types'

const TrackState = (props) => {

    const initialState = {
        tracks: [],
        artist: null
    }

    const [state, dispatch] = useReducer(TrackReducer, initialState)

    const getTracks = async (search) => {
        try {
            const res = await axios.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`, {
                headers: {
                    "x-rapidapi-key": "a8920bee68msh08216df24fda426p119ea4jsnee9c90cce419",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "useQueryString": true
                }
            })

            dispatch({
                type: GET_TRACKS,
                payload: res.data.data
            })

            if (res) {
                const { artist } = res.data.data[0]
                const resArtist = await axios.get(`https://deezerdevs-deezer.p.rapidapi.com/artist/${artist.id}`, {
                    headers: {
                        "x-rapidapi-key": "a8920bee68msh08216df24fda426p119ea4jsnee9c90cce419",
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                        "useQueryString": true
                    }
                })

                dispatch({
                    type: GET_ARTIST,
                    payload: resArtist.data
                })
            }
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <TrackContext.Provider value={{
            tracks: state.tracks,
            artist: state.artist,
            getTracks
        }}>
            {props.children}
        </TrackContext.Provider>
    )
}

export default TrackState;
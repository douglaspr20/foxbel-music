import {GET_TRACKS, GET_ARTIST, PLAY_TRACK} from '../types'; 

const TrackReducer = (state, action) => {
    switch (action.type) {
        case GET_TRACKS:
            return {
                ...state,
                tracks: action.payload
            }
            case GET_ARTIST:
                return {
                   ...state,
                   artist: action.payload 
                }
            case PLAY_TRACK:
                return {
                    ...state,
                    trackPlay: action.payload
                }
        default:
            return state
    }

}

export default TrackReducer; 
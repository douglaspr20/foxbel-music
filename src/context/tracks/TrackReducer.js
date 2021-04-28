import {GET_TRACKS, GET_ARTIST} from '../types'; 

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
        default:
            return state
    }

}

export default TrackReducer; 
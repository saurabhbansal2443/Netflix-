import { createSlice } from "@reduxjs/toolkit";

let movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies :null,
    },
    reducers : {
        addNowPlayingMovies : (state , action ) => {
            state.nowPlayingMovies = action.payload;    
        }
    }
})

export const {addNowPlayingMovies} = movieSlice.actions 
export default movieSlice.reducer;
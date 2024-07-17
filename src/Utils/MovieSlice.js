import { createSlice } from "@reduxjs/toolkit";

let movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies :null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies  : null,
    },
    reducers : {
        addNowPlayingMovies : (state , action ) => {
            state.nowPlayingMovies = action.payload;    
        },
        addPopularMovies: (state , action ) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies : (state , action )=>{
            state.upcomingMovies = action.payload;
        }   
    }
})

export const {addNowPlayingMovies , addPopularMovies , addTopRatedMovies , addUpComingMovies} = movieSlice.actions 
export default movieSlice.reducer;
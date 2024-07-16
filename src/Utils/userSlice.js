import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name : "user",
    initialState : null ,
    reducers : {
        addUser : (state , action )=>{
            // state = action.payload;
            return action.payload;
        },
        deleteUser : (state , action )=>{
            // state = null ;
            return null 
        }
    }
})

export const {addUser , deleteUser } = userslice.actions;

export default userslice.reducer;
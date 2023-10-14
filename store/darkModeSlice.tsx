import { createSlice } from "@reduxjs/toolkit";





let defaultState = false;

const darkModeSlice = createSlice({
    name:"darkModeReducer",
    initialState:defaultState,
    reducers:{

darkModeToggler:(state)=>{
state = !state;
return state;
}


    }
})

export const {darkModeToggler} =darkModeSlice.actions

export default darkModeSlice.reducer
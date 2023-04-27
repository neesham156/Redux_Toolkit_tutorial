import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state:any,action:any){
            state.push(action.payload);
            console.log(action.payload)
        },
        removeUser(state:any,action:any){
            state.splice(action.payload,1)
        },
        deleteUser(state,Action){},
    },
})

export {userSlice};
export const {addUser,removeUser}=userSlice.actions;
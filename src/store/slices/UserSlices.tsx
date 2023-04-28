import { createSlice } from "@reduxjs/toolkit";
import {deleteAllUser} from '../actions'
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
        // deleteAllUser(state){
        //     return [];
        // },
    },
    extraReducers(builder){
        builder.addCase(deleteAllUser,()=>{
            return [];  
        })

    },
})

export { userSlice, deleteAllUser };
export const {addUser,removeUser}=userSlice.actions;
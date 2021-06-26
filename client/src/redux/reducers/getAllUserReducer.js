 import {createReducer} from '@reduxjs/toolkit'
 import { allUsers } from '../actions/getAllUser'

 const initialState = {
    userInfo : [],
}

export const getAllUserReducer = createReducer(initialState,(builder) => {
    builder.addCase(allUsers,(state,action) => {
        state.userInfo = action.payload
    })
})
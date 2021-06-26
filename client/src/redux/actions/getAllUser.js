import {createAction} from '@reduxjs/toolkit'
import axios from "axios";

export const allUsers = createAction("GET_USERS")
export const getAllUsersInfo = (token) => {
    return async(dispatch) => {
        const response = await axios.get("http://localhost:5000/allUsers",{
            headers:{
                Authorization : token
            }
        })
        // console.log(response,"********************")
        const result = response.data
        dispatch(allUsers(result))
    }
}
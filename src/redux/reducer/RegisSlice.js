import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    error: '',
}

export const Register = createAsyncThunk(
    'regis/Register',
    async (obj, {dispatch}) => {
        const {data} = await axios.post(`http://roywest3.pythonanywhere.com/api/v1/register/`, obj)
        console.log(data)
    }
);

export const AuthRegister = createAsyncThunk(
    'regis/Register',
    async (obj, {dispatch}) => {
        const {data} = await axios.post(`http://roywest3.pythonanywhere.com/api/v1/api/token/`, obj)
        console.log(data)
        localStorage.setItem("access", JSON.stringify(data.access))
        localStorage.setItem("refresh", JSON.stringify(data.refresh))
    }
);


const RegisSlice = createSlice({
    name: 'regis',
    initialState,
    reducers: {

    }
})

export const {} = RegisSlice.actions;
export default RegisSlice.reducer;

import {createAsyncThunk} from "@reduxjs/toolkit";

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_,thunkApi) => {
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
            return thunkApi.fulfillWithValue(users)
        }catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }

)
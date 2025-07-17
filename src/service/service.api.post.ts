import {createAsyncThunk} from "@reduxjs/toolkit";
import type {IPost} from "../models/IPost.ts";

export const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_,thunkApi) => {
        try {
            const users: IPost[] = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())
            return thunkApi.fulfillWithValue(users)
        }catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }

)
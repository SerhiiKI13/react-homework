import {createAsyncThunk} from "@reduxjs/toolkit";
import type {IComment} from "../models/IComment.ts";

export const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_,thunkAPI) =>{
        try {
            const comments: IComment[] = await fetch('https://jsonplaceholder.typicode.com/comments').then(value => value.json())
            return thunkAPI.fulfillWithValue(comments)
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
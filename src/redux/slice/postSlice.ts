import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../models/IPost.ts";
import {loadPosts} from "../../service/service.api.post.ts";

type initialStateType = {
    post: IPost[]
}
const initialState: initialStateType = {post: []}

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled,(state, action: PayloadAction<IPost[]>) =>{
            state.post = action.payload;
        })
    })

export const postActions = {
    ...postSlice.actions,
    loadPosts
}
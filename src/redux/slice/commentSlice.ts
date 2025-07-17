import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../models/IComment.ts";
import {loadComments} from "../../service/service.api.comments.ts";
type initialState = {
    comments: IComment[],
}
const initialState: initialState = {
    comments: [],
}

export const commentSlice = createSlice({
    name:'commentSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled,(state, action: PayloadAction<IComment[]>) =>{
            state.comments = action.payload
        })
        .addCase(loadComments.rejected,(state,action)=> {
            console.log(state)
            console.log(action)
        })
})

export const commentSliceActions = {
    ...commentSlice.actions,
    loadComments
}
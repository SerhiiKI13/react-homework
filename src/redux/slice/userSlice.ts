import {createSlice, isFulfilled, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../models/IUser.ts";
import {loadUsers} from "../../service/service.api.users.ts";

type InitialStateType = {
    users: IUser[];
    changeLoading: boolean;
}
const initialState: InitialStateType = {users: [], changeLoading: false};
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        changeLoading: (state, action:PayloadAction<boolean>) => {
            state.changeLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        })
            .addMatcher(isFulfilled(loadUsers),(state) =>{
                state.changeLoading = true;
            })
    }
})

export const userSliceActions = {
    ...userSlice.actions,
    loadUsers
}
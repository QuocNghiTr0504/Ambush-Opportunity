import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    visible: false,
    percent: 0.0
}

const progressBarSlice = createSlice({
    name: 'progressBar',
    initialState,
    reducers: {
        setProgressBar: (state, action) => {
            state.percent = action.payload
            state.visible = true;
        },
        hideProgressBar: (state) => {
            state.visible = false
            state.percent = 0
        }
    }
})

export const { hideProgressBar, setProgressBar } = progressBarSlice.actions
export default progressBarSlice.reducer
// notificationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type NotificationType = 'success' | 'info' | 'warning' | 'error';
export interface NotificationState {
    message: string | null;
    type: NotificationType | null;
}

const initialState: NotificationState = {
    message: null,
    type: null,
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state, action: PayloadAction<{ message: string, type: NotificationType }>) {
            state.message = action.payload.message;
            state.type = action.payload.type;
        },
        clearNotification(state) {
            state.message = null;
            state.type = null;
        },
    },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

export default notificationSlice.reducer;

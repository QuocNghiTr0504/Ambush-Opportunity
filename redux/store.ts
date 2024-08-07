import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from '@/redux/slices/notificationSlice';
import authReducer from '@/redux/slices/authSlice';
import clientReducer from '@/redux/slices/clientSlice';
import progressBarReducer from '@/redux/slices/progressBarSlice';

export const store = configureStore({
    reducer: {
        notification: notificationReducer,
        auth: authReducer,
        client: clientReducer,
        progressBar: progressBarReducer
    },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
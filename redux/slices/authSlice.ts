import { AuthAPI } from '@/api/auth/AuthAPI';
import { ILoginInfo } from '@/interfaces/ILoginInfo';
import { ISuccessLoginResponse } from '@/interfaces/ISuccessLoginResponse';
import { IUserInfo } from '@/interfaces/IUserInfo';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setNotification } from './notificationSlice';
import { getAPIError } from '@/helpers/apiHelper';
import { ClientAPI } from '@/api/client/ClientAPI';
import { setProgressBar } from './progressBarSlice';
import { IRegisterInfo } from '@/interfaces/IRegisterInfo';
import { redirect } from 'next/navigation';

interface ThunkConfig {
    rejectValue: string
}




export const loginThunk = createAsyncThunk<{ token: string }, { loginInfo: ILoginInfo }, ThunkConfig>('auth/login', async (param, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    const { loginInfo } = param;
    try {
        dispatch(setProgressBar(70))
        let loginResponse = await AuthAPI.login(loginInfo);
        const { token } = loginResponse.data as ISuccessLoginResponse;
        if (typeof window != 'undefined')
            localStorage.setItem('token', token);
        dispatch(setProgressBar(100))
        dispatch(fetchProfileThunk());
        dispatch(setNotification({ message: 'Login succesfully ', type: 'success' }))
        return { token }
    }
    catch (e) {
        let errorMessage: string = getAPIError(e);
        dispatch(setProgressBar(100))
        dispatch(setNotification({ message: 'Login failed: ' + errorMessage, type: 'error' }))

        return rejectWithValue(errorMessage);
    }
})
export const fetchProfileThunk = createAsyncThunk<IUserInfo, void, ThunkConfig>('auth/fetchProfile', async (thunkAPI) => {
    let profileResponse = await ClientAPI.me();
    let profile = profileResponse.data as IUserInfo
    return profile;
})
export const fetchAuthTokenThunk = createAsyncThunk<{ authToken: string }, void, ThunkConfig>('auth/fetchAuthToken', async (_, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
        let response = await AuthAPI.fetchToken();
        const token = response.data.token;
        if (typeof window != 'undefined')
            localStorage.setItem('authToken', token); // Store the token
        return { authToken: token }
    } catch (e) {
        let err = getAPIError(e);
        dispatch(setProgressBar(100))
        dispatch(setNotification({ message: "Cannot retrieve token, please try again: " + err, type: "error" }))
        return rejectWithValue(err)
    }
})
export const registerThunk = createAsyncThunk<void, { registerInfo: IRegisterInfo }, ThunkConfig>('auth/register', async ({ registerInfo }, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
        dispatch(setProgressBar(70))

        if (typeof window != 'undefined')
            localStorage.removeItem("registeredEmail")

        await AuthAPI.register(registerInfo);

        dispatch(setProgressBar(100))

        if (typeof window != 'undefined')
            localStorage.setItem("registeredEmail", registerInfo.email)

        dispatch(setNotification({ message: 'Register account successfully, we have sent a confirmation link to your email', type: 'success' }));

    } catch (e) {
        let err = getAPIError(e);
        dispatch(setProgressBar(100))
        dispatch(setNotification({ message: "Register failed, please try again: " + err, type: "error" }))
        return rejectWithValue(err)
    }
})
export interface IAuthSliceState {
    isAuthenticated: boolean,
    userInfo: IUserInfo | null,
    token: string | null,
    authToken: string | null,
    loading: boolean
}
let initialState: IAuthSliceState = {
    isAuthenticated: (typeof window != 'undefined') ? !!localStorage.getItem('token') : false,
    userInfo: null,
    token: null,
    loading: false,
    authToken: null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload;
        },
        setProfile: (state, action) => {
            state.userInfo = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.userInfo = null
            state.token = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers(builder) {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.token = action.payload.token
            state.isAuthenticated = true;
            state.loading = false
        })
        builder.addCase(loginThunk.pending, (state) => {
            state.loading = true
        })
        builder.addCase(loginThunk.rejected, (state) => {
            state.userInfo = null
            state.isAuthenticated = false;
            state.token = null
            state.loading = false
        })
        builder.addCase(fetchProfileThunk.fulfilled, (state, action) => {
            state.userInfo = action.payload;
        })
        builder.addCase(fetchProfileThunk.rejected, (state, action) => {
            state.userInfo = null;
            state.isAuthenticated = false;
            state.token = null;
            if (typeof window != 'undefined')
                localStorage.removeItem('token')
        })
        builder.addCase(fetchAuthTokenThunk.fulfilled, (state, action) => {
            state.authToken = action.payload.authToken
        })
    },
});

export const { setToken: login, logout } = authSlice.actions;
export default authSlice.reducer;
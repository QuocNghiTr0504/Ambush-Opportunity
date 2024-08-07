import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface UserData {
    id: string;
    number: number;
    email: string;
    userName: string;
    countryCode: string;
    countryCallingCode: number;
    level: number;
    kycStatus: number;
    platFormNumber: number;
    platFormName: string;
    roles: string[];
}
// Define the initial state
export interface ClientState {
    user: UserData | null;
    loading: boolean;
    error: string | null;
}

const initialState: ClientState = {
    user: null,
    loading: false,
    error: null,
};


// Define reducers for setting loading state, fetching success, and failure
const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {

        fetchUser: (state, action: PayloadAction<UserData>) => {
            state.user = action.payload;
            state.error = null;
        },
    },
});

export const { fetchUser } = clientSlice.actions;


export default clientSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of the auth slice with a 'user' property set to null.
const initialState = {
    user: null, // This represents the authenticated user's information; null indicates no user is logged in.
};

// The 'authSlice' is created using Redux Toolkit's createSlice function, which automatically generates
// action creators and action types that correspond to the reducers and state.
const authSlice = createSlice({
    name: "auth", // The name of the slice, which will be used as the first part of the action type.
    initialState, // The initial state for the slice.
    reducers: {
        // The reducers are functions that handle actions and update the state accordingly.
        // Redux Toolkit uses Immer internally to allow you to write "mutating" logic in reducers.
        // It doesn't actually mutate the state because Immer produces immutability-compatible versions of the state.
        SetUser: (state, action) => {
            // The SetUser reducer is designed to update the 'user' property in the state.
            // The 'action.payload' contains the new user object that should be set to the state.
            state.user = action.payload;
        },
        // You can add more reducers here as needed to handle other actions related to authentication.
    },
});

// Export the generated reducer function for the auth slice, to be included in the store.
export default authSlice.reducer;

// Export the generated action creators for the auth slice.
// 'SetUser' is an action creator function that will return an action object with the type property and the payload.
export const { SetUser } = authSlice.actions;

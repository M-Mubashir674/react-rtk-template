import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';

import { BASE_URL } from 'src/constants/constants.js';
import { SetUser } from 'src/features/auth/authReducer.js';

// Set up the base query configuration with the base URL and
// include credentials for CORS requests (like cookies, authorization headers, etc.)
const baseQueryConfig = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
    // The prepareHeaders function allows you to manipulate the headers
    // before a request is sent. Here, it returns the headers unchanged.
    // You might typically add authentication tokens here.
    prepareHeaders: (headers) => {
        // Here you would normally add your authentication tokens.
        // For example:
        // const token = api.getState().auth.token;
        // if (token) {
        //   headers.set('authorization', `Bearer ${token}`);
        // }
        return headers;
    },
});

// This is an intercepting function to enhance the baseQuery with additional functionality.
// It handles responses and errors globally, for example showing a toast notification
// when the session expires or another error occurs.
const interceptBaseQuery = async (args, api, extraOptions) => {
    // We execute the baseQueryConfig function with the arguments provided.
    const result = await baseQueryConfig(args, api, extraOptions);

    // If the response has an error with a 401 status code (Unauthorized),
    // it's indicative of a session expiration or authentication issue.
    if (result?.error?.originalStatus === 401) {
        // We use react-toastify to display an error message.
        toast.error('Session Expired');
        // Dispatch the SetUser action to update the state, likely to clear the user data.
        api.dispatch(SetUser(null));
    } else if (result?.error) {
        // If there's another error, we display that error message.
        toast.error(result.error.data);
    }

    // Return the result (success or error) to the calling code.
    return result;
};

// We create an API slice using RTK Query. This will manage the data fetching
// and caching logic for our API calls within our Redux store.
export const apiSlice = createApi({
    // The reducerPath is a unique key indicating where this API slice's reducer will be mounted in the Redux state.
    reducerPath: 'apiSlice',
    // The enhanced baseQuery with the interception logic is used for this API slice.
    baseQuery: interceptBaseQuery,
    // An object of endpoints will be defined here.
    // Each endpoint represents one API operation and will be created using builder.query or builder.mutation.
    endpoints: () => ({}),
});

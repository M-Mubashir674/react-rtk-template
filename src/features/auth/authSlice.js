import { apiSlice } from 'src/features/api/apiSlice.js';

// Extending the apiSlice with additional endpoints for authentication-related operations
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Adding a login mutation endpoint
        login: builder.mutation({
            // Defines the query that will be made when this mutation is triggered
            query: (credentials) => ({
                // Specifies the path for the login request, which is a POST method
                url: "/api/auth/login/super-admin",
                method: "POST", // The HTTP method to be used for the request
                body: credentials, // The body of the request, containing the login credentials
            }),
            // Optionally, you could add 'transformResponse' here to handle the response
            // and prepare it before it reaches the component that uses this mutation.
        }),
        // Adding a logout mutation endpoint
        logout: builder.mutation({
            // Defines the query for the logout operation
            query: () => ({
                // Specifies the path for the logout request, which is a POST method
                url: "/api/auth/logout",
                method: "POST", // The HTTP method to be used for the request
                // There is no body for the logout request, as it typically doesn't require one
            }),
            // Similar to login, 'transformResponse' could be added here if necessary.
        }),
        // More endpoints related to authentication can be added here as needed
    }),
});

// Exporting the reducer automatically created by 'injectEndpoints'
// This is not typically needed unless you are manually adding this reducer to the store
export default authApiSlice.reducer;

// Exporting the auto-generated hook for the login mutation
// This hook can be used within components to trigger the login process
export const { useLoginMutation, useLogoutMutation } = authApiSlice;

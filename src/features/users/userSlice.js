// Import the base API slice to extend with endpoints related to users.
import { apiSlice } from "src/features/api/apiSlice";

// Extend the base `apiSlice` with endpoints related to user operations.
export const userSlice = apiSlice.injectEndpoints({
    // Define the endpoints within an object passed to the `injectEndpoints` method.
    endpoints: (builder) => ({
        // Endpoint for fetching users with a GET request.
        getUsers: builder.query({
            // Define the query as a function returning the URL and the HTTP method.
            query: () => ({
                url: "/api/admin/super-admin/users/all",
                method: "GET",
            }),
            // Specify the tag associated with this endpoint to allow for cache updates.
            providesTags: ["Users"],
        }),
        // Endpoint for deleting a user by ID with a DELETE request.
        deleteUserById: builder.mutation({
            // The query takes the user ID (`_id`) as an argument.
            query: (_id) => ({
                url: `/api/admin/dealer-admin/delete`,
                method: "DELETE",
                // Include the user ID in the request body.
                body: { _id },
            }),
            // Invalidate the "Users" tag to update the cache after a user is deleted.
            invalidatesTags: ["Users"],
        }),
        // Endpoint for updating a user by ID with a PATCH request.
        updateUserById: builder.mutation({
            // The query takes the entire user object as an argument.
            query: (user) => ({
                url: `/api/admin/dealer-admin/update`,
                method: "PATCH",
                // Send the updated user data in the request body.
                body: user,
            }),
            // Invalidate the "Users" tag to update the cache after a user is updated.
            invalidatesTags: ["Users"],
        }),
    }),
});

// Export hooks for the defined endpoints to be used within components.
export const {
    useGetUsersQuery, // Hook for fetching users.
    useDeleteUserByIdMutation, // Hook for deleting a user by ID.
    useUpdateUserByIdMutation, // Hook for updating a user by ID.
} = userSlice;

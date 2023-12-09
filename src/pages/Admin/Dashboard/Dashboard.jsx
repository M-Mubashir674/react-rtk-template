import {useGetUsersQuery} from "src/features/users/userSlice.js";

const Dashboard = () => {
    const {data} = useGetUsersQuery();
    return (
        <>
            <h1>Admin Dashboard</h1>
        </>
    );
};

export default Dashboard;

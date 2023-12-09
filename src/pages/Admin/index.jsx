import Dashboard from "src/pages/Admin/Dashboard/Dashboard.jsx";
import Main from "src/layouts/Main/Main.jsx";

const Admin = () => {
    return (
        <Main>
            {
                er.map(res => <p>res</p>)
            }
            <Dashboard/>
        </Main>
    );
};

export default Admin;

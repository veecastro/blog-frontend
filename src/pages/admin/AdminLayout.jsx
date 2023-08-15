import Header from "./components/header/Header"
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="flex flex-col h-screen lg:flex-row">
            <Header />
            <main className="bg-[#f9f9f9] flex-1 p-4 lg:p-6">
                {/* outlet allows for a route to be rendered within a route */}
                <Outlet />

            </main>
        </div>
    );
    }

    export default AdminLayout;
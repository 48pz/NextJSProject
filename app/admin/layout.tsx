import AdminNav from "../components/admin/AdminNav";

export const metadata = {
    title: "O-mart Admin",
    description: "O-mart Admin Dashboard"
}

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <AdminNav/>
            {children}
        </div>
    );
}

export default AdminLayout;
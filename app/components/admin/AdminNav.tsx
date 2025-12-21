"use client"

import { Link } from "@mui/material";
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md";
import AdminNavItem from "./AdminNavItem";
import { usePathname } from "next/navigation";
import Container from "../Container";
export const dynamic = "force-dynamic";
const AdminNav = () => {
    //nextjs hook it returns current url
    const pathname = usePathname()
    return (
        <div className="w-full shadow-sm top-20 pt-4">
            <Container>
                <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
                    <Link href='/admin' className="!no-underline">
                        <AdminNavItem lable="Summary" icon={MdDashboard} selected={pathname === "/admin"} />
                    </Link>
                    <Link href='/admin/add-products' className="!no-underline">
                        <AdminNavItem lable="AddProducts" icon={MdLibraryAdd} selected={pathname === "/admin/add-products"} />
                    </Link>
                    <Link href='/admin/manage-products' className="!no-underline">
                        <AdminNavItem lable="ManageProducts" icon={MdDns} selected={pathname === "/admin/manage-products"} />
                    </Link>
                    <Link href='/admin/manage-orders' className="!no-underline">
                        <AdminNavItem lable="ManageOrders" icon={MdFormatListBulleted} selected={pathname === "/admin/manage-orders"} />
                    </Link>
                </div>
            </Container>
        </div>
    );
}

export default AdminNav;
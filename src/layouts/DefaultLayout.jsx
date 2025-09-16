// layout component that wraps pages with a consistent header and footer - uses Outlet as a placeholder for page-specific content. Allows us to avoid repeated imports of Header and Footer

import { Outlet } from "react-router"; // a placeholder from React Router - all child routes of route using DefaultLayout will render where Outlet is
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>);
}
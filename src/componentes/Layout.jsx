import { Outlet } from "react-router";
import Container from "react-bootstrap/Container";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <Header />

                <main className="flex-grow-1 py-4">
                    <Container>
                        <Outlet />
                    </Container>
                </main>
                
                <Footer />
            </div>
        </>
    )
}
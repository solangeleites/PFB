import { BrowserRouter, Routes, Route } from "react-router-dom";
import Picture from "../pages/pictures/Picture";
import Contact from "../pages/contact/Contact";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import Header from "../components/header/Header";

const Router = () => {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pictures" element={<Picture />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    );
    }
    export default Router;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';

import Navbar from './Components/Navbar';
import OurStory from './Pages/OurStory';
import Footer from './Components/Footer';
import Blog from './Pages/News';
import Product1 from './Pages/Product1.jsx';
import Home from './Pages/Home.jsx';
import Doorbells from './Pages/Doorbells.jsx';
import Accessories from './Pages/Accessories.jsx';
import Cart from './Pages/Cart.jsx';


function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                {/* Navbar */}
                <Navbar />

                {/* Main Content */}
                <main className="flex-grow">
                    <Routes>
                        {/* Set the default route ("/") to OurStory */}
                        <Route path="/" element={<Home />} />
                        <Route path="/doorbells" element={<Doorbells />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/ourstory" element={<OurStory />} />
                        <Route path="/product1" element={<Product1 />} />
                        <Route path="/accessories" element={<Accessories />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;

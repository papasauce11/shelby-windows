import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Home from './pages/Home';
import About from './pages/About';
import ProductCategory from './pages/ProductCategory';
import ProductDetail from './pages/ProductDetail';
import SupplierDetail from './pages/SupplierDetail';
import OurWork from './pages/OurWork';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/windows" element={<ProductCategory key="windows" />} />
            <Route path="/doors" element={<ProductCategory key="doors" />} />
            <Route path="/windows/:slug" element={<ProductDetail />} />
            <Route path="/doors/:slug" element={<ProductDetail />} />
            <Route path="/suppliers/:slug" element={<SupplierDetail />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Analytics mode={'production'} />
      <SpeedInsights debug={false} />
    </>
  );
}

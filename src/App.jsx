import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Eager load home
import Home from './pages/Home';

// Lazy load other pages
const About = lazy(() => import('./pages/About'));
const ProductCategory = lazy(() => import('./pages/ProductCategory'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const SupplierDetail = lazy(() => import('./pages/SupplierDetail'));
const OurWork = lazy(() => import('./pages/OurWork'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));

function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-teal-200 border-t-teal-600 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

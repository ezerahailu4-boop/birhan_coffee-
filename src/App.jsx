import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Chatbot from './components/Chatbot';

// existing pages
import Home from './pages/Home';
import StepPage from './pages/StepPage';
import About from './components/About';
import FarmToCup from './components/FarmToCup';
import Coffees from './components/Coffees';
import CSR from './components/CSR';
import Contact from './components/Contact';
import Team from './components/Team';

// new pages
import Testimonials from './pages/Testimonials';
import Certifications from './pages/Certifications';
import OriginsMap from './pages/OriginsMap';
import SampleRequest from './pages/SampleRequest';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Investor from './pages/Investor';

// WhatsApp redirect component
function WhatsApp() {
  useEffect(() => {
    const appLink = 'whatsapp://send?phone=251911243099&text=Hello%2C%20I%27m%20interested%20in%20Birhan%20Coffee.';
    const webLink = 'https://wa.me/251911243099?text=Hello%2C%20I%27m%20interested%20in%20Birhan%20Coffee.';
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    window.location.href = isMobile ? appLink : webLink;
  }, []);
  return (
    <div style={{ background:'#07050a', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:16 }}>
      <div style={{ fontSize:'3rem' }}>💬</div>
      <p style={{ fontFamily:'DM Sans,sans-serif', color:'rgba(245,236,215,0.6)' }}>Opening WhatsApp…</p>
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === item.id);
      if (ex) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0));
  };

  const cartCount = cart.reduce((a, b) => a + b.qty, 0);

  return (
    <Router>
      <div className="grain" />
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />

      <Routes>
        <Route path="/" element={<Home onExplore={() => document.getElementById('coffees')?.scrollIntoView({ behavior: 'smooth' })} onAddToCart={addToCart} />} />
        <Route path="/story" element={<About />} />
        <Route path="/farmtocup" element={<FarmToCup />} />
        <Route path="/farmtocup/:slug" element={<StepPage />} />
        <Route path="/coffees" element={<Coffees onAddToCart={addToCart} />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/contact" element={<Contact />} />

        {/* Our Story dropdown */}
        <Route path="/testimonials"   element={<Testimonials />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/origins-map"    element={<OriginsMap />} />

        {/* About Us dropdown */}
        <Route path="/sample-request" element={<SampleRequest />} />
        <Route path="/whatsapp"       element={<WhatsApp />} />
        <Route path="/gallery"        element={<Gallery />} />

        {/* Contact dropdown */}
        <Route path="/blog"           element={<Blog />} />
        <Route path="/faq"            element={<FAQ />} />
        <Route path="/investor"        element={<Investor />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {cartOpen && (
        <Cart cart={cart} onClose={() => setCartOpen(false)} onUpdateQty={updateQty} onCheckout={() => { setCart([]); }} />
      )}
      <Chatbot />
    </Router>
  );
}

import { useState } from 'react';

export default function Cart({ cart, onClose, onUpdateQty, onCheckout }) {
  const total = cart.reduce((a, b) => a + b.price * b.qty, 0).toFixed(2);
  const [checkingOut, setCheckingOut] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', card: '', expiry: '', cvv: '' });

  const handlePay = e => {
    e.preventDefault();
    setCheckingOut(false);
    setSuccess(true);
    onCheckout();
    setTimeout(() => setSuccess(false), 4000);
  };

  if (success) return (
    <Overlay onClose={onClose}>
      <div style={{ textAlign: 'center', padding: '60px 40px' }}>
        <div style={{ fontSize: '4rem', marginBottom: 20, animation: 'float 2s ease-in-out infinite' }}>☕</div>
        <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2.4rem', color: '#F5ECD7', marginBottom: 12 }}>Ameseginalew!</h2>
        <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.6)', lineHeight: 1.7, marginBottom: 32 }}>
          Thank you! Your order has been received.<br />Your Birhan Coffee is on its way.
        </p>
        <button className="btn-primary" onClick={onClose}>Continue Shopping</button>
      </div>
    </Overlay>
  );

  return (
    <Overlay onClose={onClose}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Header */}
        <div style={{ padding: '28px 28px 20px', borderBottom: '1px solid rgba(245,236,215,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.8rem', color: '#F5ECD7', fontWeight: 300 }}>
              {checkingOut ? 'Checkout' : 'Your Cart'}
            </h2>
            {!checkingOut && <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.7rem', color: '#C27C3A', marginTop: 2 }}>{cart.length} item{cart.length !== 1 ? 's' : ''}</p>}
          </div>
          <button onClick={checkingOut ? () => setCheckingOut(false) : onClose} style={{ background: 'none', border: 'none', color: 'rgba(245,236,215,0.4)', fontSize: '1.5rem', cursor: 'pointer' }}>
            {checkingOut ? '← Back' : '×'}
          </button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 28px' }}>
          {!checkingOut ? (
            cart.length === 0 ? (
              <div style={{ textAlign: 'center', paddingTop: 80 }}>
                <div style={{ fontSize: '3rem', opacity: 0.25, marginBottom: 16 }}>☕</div>
                <p style={{ fontFamily: 'DM Sans,sans-serif', color: 'rgba(245,236,215,0.3)' }}>Your cart is empty.<br />Explore our Ethiopian origins.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {cart.map(item => (
                  <div key={item.id} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '14px 0', borderBottom: '1px solid rgba(245,236,215,0.06)' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(194,124,58,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>{item.emoji}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.1rem', color: '#F5ECD7', marginBottom: 2 }}>{item.name}</p>
                      <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.72rem', color: '#C27C3A' }}>${item.price.toFixed(2)} each</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <button onClick={() => onUpdateQty(item.id, -1)} style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(245,236,215,0.15)', color: '#F5ECD7', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
                      <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.9rem', color: '#F5ECD7', minWidth: 18, textAlign: 'center' }}>{item.qty}</span>
                      <button onClick={() => onUpdateQty(item.id, 1)} style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(245,236,215,0.15)', color: '#F5ECD7', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                    </div>
                    <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.3rem', color: '#C27C3A', minWidth: 60, textAlign: 'right' }}>${(item.price * item.qty).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            )
          ) : (
            <form id="payment-form" onSubmit={handlePay} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: 'rgba(194,124,58,0.1)', border: '1px solid rgba(194,124,58,0.2)', borderRadius: 4, padding: '20px', textAlign: 'center', marginBottom: 8 }}>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C27C3A', marginBottom: 4 }}>Total to Pay</p>
                <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2.8rem', color: '#F5ECD7' }}>${total}</p>
              </div>
              {[
                { id: 'name', label: 'Cardholder Name', ph: 'Full Name', type: 'text' },
                { id: 'email', label: 'Email', ph: 'email@example.com', type: 'email' },
                { id: 'card', label: 'Card Number', ph: '1234 5678 9012 3456', type: 'text', maxLength: 19 },
              ].map(f => (
                <div key={f.id}>
                  <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.35)', display: 'block', marginBottom: 7 }}>{f.label}</label>
                  <input required type={f.type} placeholder={f.ph} maxLength={f.maxLength}
                    value={form[f.id]} onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(245,236,215,0.14)', color: '#F5ECD7', padding: '12px 14px', borderRadius: 4, fontFamily: 'DM Sans,sans-serif', fontSize: '0.9rem', outline: 'none' }}
                    onFocus={e => e.target.style.borderColor = '#C27C3A'} onBlur={e => e.target.style.borderColor = 'rgba(245,236,215,0.14)'} />
                </div>
              ))}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { id: 'expiry', label: 'Expiry', ph: 'MM/YY', max: 5 },
                  { id: 'cvv', label: 'CVV', ph: '123', max: 3 },
                ].map(f => (
                  <div key={f.id}>
                    <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.35)', display: 'block', marginBottom: 7 }}>{f.label}</label>
                    <input required placeholder={f.ph} maxLength={f.max}
                      value={form[f.id]} onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(245,236,215,0.14)', color: '#F5ECD7', padding: '12px 14px', borderRadius: 4, fontFamily: 'DM Sans,sans-serif', fontSize: '0.9rem', outline: 'none' }}
                      onFocus={e => e.target.style.borderColor = '#C27C3A'} onBlur={e => e.target.style.borderColor = 'rgba(245,236,215,0.14)'} />
                  </div>
                ))}
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={{ padding: '20px 28px', borderTop: '1px solid rgba(245,236,215,0.08)' }}>
            {!checkingOut && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.4)' }}>Subtotal</span>
                <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.8rem', color: '#C27C3A' }}>${total}</span>
              </div>
            )}
            {checkingOut ? (
              <button form="payment-form" type="submit" style={{ width: '100%', background: 'linear-gradient(135deg, #1a5c1a, #2d8c2d)', border: 'none', color: '#F5ECD7', padding: 16, borderRadius: 3, fontFamily: 'DM Sans,sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}>
                🔒 Complete Purchase
              </button>
            ) : (
              <button onClick={() => setCheckingOut(true)} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Proceed to Checkout →
              </button>
            )}
          </div>
        )}
      </div>
    </Overlay>
  );
}

function Overlay({ onClose, children }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 3000 }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)' }} onClick={onClose} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 440,
        background: '#0f0a07', borderLeft: '1px solid rgba(245,236,215,0.1)',
        animation: 'slideInRight 0.3s ease',
        overflow: 'hidden',
      }}>
        {children}
      </div>
    </div>
  );
}


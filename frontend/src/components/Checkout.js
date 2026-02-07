import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext'; 

function Checkout({ cartItems, total, onBack, onSubmitOrder }) {
  
  const [isHoveredBtn, setIsHoveredBtn] = useState(false);
  const [isHoveredBack, setIsHoveredBack] = useState(false);
  const { t } = useLanguage(); 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitOrder(formData);
  };

  const styles = {
    section: {
      padding: '120px 20px 60px',
      backgroundColor: '#f9f9f9',
      minHeight: '80vh',
      fontFamily: 'inherit'
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap', 
      gap: '40px',
      alignItems: 'flex-start'
    },
    formPanel: {
      flex: '2 1 400px',
      background: 'white',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
    },
    header: {
      color: '#222',
      marginBottom: '25px',
      borderBottom: '2px solid #f0f0f0',
      paddingBottom: '15px'
    },
    summaryPanel: {
      flex: '1 1 300px',
      background: 'white',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: '100px'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '600',
      color: '#555'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '1rem',
      boxSizing: 'border-box',
      fontFamily: 'inherit'
    },
    textarea: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '1rem',
      boxSizing: 'border-box',
      fontFamily: 'inherit',
      resize: 'vertical'
    },
    summaryItem: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '15px',
      fontSize: '0.95rem',
      color: '#555'
    },
    totalRow: {
      borderTop: '2px solid #eee',
      paddingTop: '15px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '1.2rem',
      fontWeight: '800',
      color: '#222',
      marginBottom: '25px'
    },
    mainButton: {
      width: '100%',
      backgroundColor: isHoveredBtn ? '#FFC107' : '#222',
      color: isHoveredBtn ? '#000' : '#FFC107',
      border: 'none',
      padding: '15px',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '800',
      cursor: 'pointer',
      transition: 'all 0.3s',
      textTransform: 'uppercase',
      marginTop: '10px',
      transform: isHoveredBtn ? 'translateY(-2px)' : 'none',
      boxShadow: isHoveredBtn ? '0 5px 15px rgba(255, 193, 7, 0.4)' : 'none'
    },
    backBtn: {
      background: 'none',
      border: 'none',
      color: isHoveredBack ? '#222' : '#777',
      cursor: 'pointer',
      marginBottom: '20px',
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      transition: 'color 0.2s'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Left Form */}
        <div style={styles.formPanel}>
          <button 
            style={styles.backBtn} 
            onClick={onBack}
            onMouseEnter={() => setIsHoveredBack(true)}
            onMouseLeave={() => setIsHoveredBack(false)}
          >
            {t.back_to_shop}
          </button>
          
          <h2 style={styles.header}>{t.checkout_title}</h2>
          <p style={{marginBottom: '20px', color: '#666'}}>
            {t.checkout_desc}
          </p>
          
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>{t.lbl_first_name}</label>
              <input type="text" name="firstName" required onChange={handleChange} placeholder={t.ph_first_name} style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>{t.lbl_last_name}</label>
              <input type="text" name="lastName" required onChange={handleChange} placeholder={t.ph_last_name} style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>{t.lbl_email}</label>
              <input type="email" name="email" required onChange={handleChange} placeholder="ivan@abv.bg" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>{t.lbl_phone}</label>
              <input type="tel" name="phone" required onChange={handleChange} placeholder="0888 123 456" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>{t.lbl_city}</label>
              <input type="text" name="city" required onChange={handleChange} placeholder={t.ph_city} style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>{t.lbl_address}</label>
              <textarea name="address" rows="2" required onChange={handleChange} placeholder={t.ph_address} style={styles.textarea}></textarea>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>{t.lbl_notes}</label>
              <textarea name="notes" rows="2" onChange={handleChange} placeholder={t.ph_notes} style={styles.textarea}></textarea>
            </div>
          </form>
        </div>

        {/* Right Summary */}
        <div style={styles.summaryPanel}>
          <h3 style={{...styles.header, fontSize: '1.2rem'}}>{t.summary_title}</h3>
          
          <div style={{maxHeight: '300px', overflowY: 'auto', marginBottom: '20px'}}>
            {cartItems.map((item, index) => (
              <div key={index} style={styles.summaryItem}>
                <span>{item.name} ({item.grams}г)</span>
                <span style={{fontWeight: 'bold'}}>
                    {item.price.toFixed(2)} {t.currency}
                </span>
              </div>
            ))}
          </div>

          <div style={styles.totalRow}>
            <span>{t.total_label}</span>
            <span>{total.toFixed(2)} {t.currency}</span>
          </div>

          <button 
            onClick={handleSubmit} 
            style={styles.mainButton} 
            onMouseEnter={() => setIsHoveredBtn(true)} 
            onMouseLeave={() => setIsHoveredBtn(false)}
            >
            {t.send_order_btn}
          </button>
          
          <p style={{fontSize: '0.8rem', color: '#999', marginTop: '15px', textAlign: 'center'}}>
            {t.checkout_footer_note}
          </p>
        </div>

      </div>
    </section>
  );
}

export default Checkout;
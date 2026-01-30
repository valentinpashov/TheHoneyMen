import React, { useState } from 'react';

function Checkout({ cartItems, total, onBack, onSubmitOrder }) {
  
  const [isHoveredBtn, setIsHoveredBtn] = useState(false);
  const [isHoveredBack, setIsHoveredBack] = useState(false);

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


  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Left Form - Personal info */}
        <div style={styles.formPanel}>
          <button 
            style={styles.backBtn} 
            onClick={onBack}
            onMouseEnter={() => setIsHoveredBack(true)}
            onMouseLeave={() => setIsHoveredBack(false)}
          >
            ← Обратно към магазина
          </button>
          
          <h2 style={styles.header}>Данни за заявка</h2>
          <p style={{marginBottom: '20px', color: '#666'}}>
            Попълнете данните си. След натискане на бутона, ще бъде генериран имейл с вашата поръчка.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Име</label>
              <input type="text" name="firstName" required onChange={handleChange} placeholder="Иван" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Фамилия</label>
              <input type="text" name="lastName" required onChange={handleChange} placeholder="Петров" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Имейл</label>
              <input type="email" name="email" required onChange={handleChange} placeholder="ivan@abv.bg" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Телефон за връзка</label>
              <input type="tel" name="phone" required onChange={handleChange} placeholder="0888 123 456" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Населено място</label>
              <input type="text" name="city" required onChange={handleChange} placeholder="гр. София" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Адрес за доставка (Еконт/Спиди или точен адрес)</label>
              <textarea name="address" rows="2" required onChange={handleChange} placeholder="Офис на Еконт..." style={styles.textarea}></textarea>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Допълнителни бележки (опционално)</label>
              <textarea name="notes" rows="2" onChange={handleChange} placeholder="Напр: Да се обади преди доставка..." style={styles.textarea}></textarea>
            </div>
          </form>
        </div>

        {/* Right Summary  */}
        <div style={styles.summaryPanel}>
          <h3 style={{...styles.header, fontSize: '1.2rem'}}>Вашата заявка</h3>
          
          <div style={{maxHeight: '300px', overflowY: 'auto', marginBottom: '20px'}}>
            {cartItems.map((item, index) => (
              <div key={index} style={styles.summaryItem}>
                <span>{item.name} ({item.grams}г)</span>
                <span style={{fontWeight: 'bold'}}>{item.price.toFixed(2)} лв.</span>
              </div>
            ))}
          </div>

          <div style={styles.totalRow}>
            <span>Прогнозна сума:</span>
            <span>{total.toFixed(2)} лв.</span>
          </div>

          <button 
            onClick={handleSubmit} 
            style={styles.mainButton} 
            onMouseEnter={() => setIsHoveredBtn(true)} 
            onMouseLeave={() => setIsHoveredBtn(false)}
            >
            Изпрати заявка по Имейл ➤
          </button>
          
          <p style={{fontSize: '0.8rem', color: '#999', marginTop: '15px', textAlign: 'center'}}>
            *Ще се свържем с вас за потвърждение.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Checkout;
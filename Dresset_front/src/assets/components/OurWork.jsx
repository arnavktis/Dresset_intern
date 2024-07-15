import React from 'react';

const OurWork = () => {
  const styles = {
    container: {
      position: "relative",
      top: '85vh',
      textAlign: 'center',
      padding: '50px 20px',
      backgroundColor: '#E0F7FA',
      borderRadius: '15px',
      maxWidth: '800px',
      margin: '0 auto'
    },
    heading: {
      fontSize: '36px',
      color: '#000',
      marginBottom: '20px'
    },
    description: {
      fontSize: '16px',
      color: '#666',
      marginBottom: '40px'
    },
    priceContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '40px'
    },
    priceBox: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '150px',
      textAlign: 'center'
    },
    price: {
      fontSize: '24px',
      color: '#000',
      marginBottom: '10px'
    },
    service: {
      fontSize: '18px',
      color: '#666',
      marginBottom: '10px'
    },
    subText: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '20px'
    },
    button: {
      display: 'inline-block',
      padding: '10px 20px',
      backgroundColor: '#000',
      color: '#fff',
      borderRadius: '5px',
      textDecoration: 'none',
      marginTop: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>OUR WORK</h1>
      <p style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.
      </p>
      <div style={styles.priceContainer}>
        <div style={styles.priceBox}>
          <div style={styles.price}>$40</div>
          <div style={styles.service}>DRESSINGS</div>
          <div style={styles.subText}>See, One price. Simple.</div>
          <a href="#" style={styles.button}>GET SERVICE</a>
        </div>
        <div style={styles.priceBox}>
          <div style={styles.price}>$40</div>
          <div style={styles.service}>DRESSINGS</div>
          <div style={styles.subText}>See, One price. Simple.</div>
          <a href="#" style={styles.button}>GET SERVICE</a>
        </div>
        <div style={styles.priceBox}>
          <div style={styles.price}>$40</div>
          <div style={styles.service}>DRESSINGS</div>
          <div style={styles.subText}>See, One price. Simple.</div>
          <a href="#" style={styles.button}>GET SERVICE</a>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
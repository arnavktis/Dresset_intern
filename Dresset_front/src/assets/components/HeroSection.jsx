import React from 'react';

const HeroSection = () => (
  <section style={{
    
    position: 'absolute',
    // padding: '60px 29px',
    backgroundColor: '#f0f0f0',
    height: '100vh',
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }}>
    <div style={{
    //   maxWidth: '800px',
    //   height: "100px",
    //   margin: '',
      padding: '20px',
      backgroundColor: 'rgba(217, 217, 217, 0.4)',
      borderBottom: '1px solid #E0E0E0',
      backdropFilter: 'blur(7.5px)',
      borderRadius: '5px',
    }}>
      <h1 style={{ fontSize: '3em', marginBottom: '20px', color: '#333' }}>
        Lorem Ipsum Dolor sit amet, consectetuer.
      </h1>
      <p style={{ fontSize: '1.25em', marginBottom: '40px', color: '#666' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula 
        eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus.
      </p>
      <button style={{
        top: '30px',
        padding: '15px 30px',
        fontSize: '1em',
        color: '#fff',
        backgroundColor: '#FFB800',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}>
        Know Our Service
      </button>
    </div>
  </section>
);

export default HeroSection;
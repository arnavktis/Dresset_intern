import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#46804a',
      padding: '20px 50px',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    },
    topSection: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: '20px'
    },
    logo: {
      display: 'flex',
      alignItems: 'center'
    },
    logoImage: {
      marginRight: '10px'
    },
    newsletter: {
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      padding: '10px',
      borderRadius: '5px 0 0 5px',
      border: 'none',
      outline: 'none'
    },
    subscribeButton: {
      padding: '10px',
      borderRadius: '0 5px 5px 0',
      border: 'none',
      backgroundColor: '#8fcf8c',
      color: '#ffffff',
      cursor: 'pointer',
      marginLeft: '-5px'
    },
    sections: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginRight: '20px'
    },
    sectionTitle: {
      color: '#f4a543',
      marginBottom: '10px'
    },
    sectionItem: {
      color: '#cccccc',
      marginBottom: '5px',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    followUs: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    socialIcons: {
      display: 'flex',
      marginTop: '10px'
    },
    icon: {
      width: '30px',
      height: '30px',
      marginRight: '10px'
    },
    bottomSection: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      borderTop: '1px solid #cccccc',
      paddingTop: '10px',
      marginTop: '20px'
    },
    copyright: {
      color: '#cccccc'
    },
    policy: {
      display: 'flex',
      color: '#cccccc'
    },
    policyItem: {
      marginLeft: '10px',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.topSection}>
        <div style={styles.logo}>
          <img src="logo.png" alt="DRESSIT" style={styles.logoImage} />
        </div>
        <div style={styles.newsletter}>
          <input type="email" placeholder="name@email.com" style={styles.input} />
          <button style={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
      <div style={styles.sections}>
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Company</h4>
          <a style={styles.sectionItem} href="#about">About Us</a>
          <a style={styles.sectionItem} href="#help">Help & Support</a>
          <a style={styles.sectionItem} href="#internship">Internship/Job</a>
        </div>
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Social</h4>
          <a style={styles.sectionItem} href="#instagram">Instagram</a>
          <a style={styles.sectionItem} href="#facebook">Facebook</a>
          <a style={styles.sectionItem} href="#linkedin">LinkedIn</a>
        </div>
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>For Merchant</h4>
          <a style={styles.sectionItem} href="#partner">Become a Partner</a>
          <a style={styles.sectionItem} href="#services">Services</a>
          <a style={styles.sectionItem} href="#merchant-help">Help & Support</a>
        </div>
        <div style={styles.followUs}>
          <h4 style={styles.sectionTitle}>Follow us</h4>
          <div style={styles.socialIcons}>
            <img src="youtube-icon.png" alt="YouTube" style={styles.icon} />
            <img src="linkedin-icon.png" alt="LinkedIn" style={styles.icon} />
            <img src="twitter-icon.png" alt="Twitter" style={styles.icon} />
          </div>
        </div>
      </div>
      <div style={styles.bottomSection}>
        <p style={styles.copyright}>© 2024 DRESSOT. All rights reserved</p>
        <div style={styles.policy}>
          <a style={styles.policyItem} href="#privacy">Privacy Policy</a>
          <a style={styles.policyItem} href="#terms">Terms and conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";

const OurWork = () => {
  const styles1 = {
    wrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      position: "absolute",
      top: "1900px",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      padding: "50px 20px",
      backgroundColor: "#E0F7FA",
      borderRadius: "15px",
      maxWidth: "800px",
      // margin: '0 auto',
      justifyContent: "center",
    },
    heading: {
      fontSize: "36px",
      color: "#000",
      marginBottom: "20px",
    },
    description: {
      fontSize: "16px",
      color: "#666",
      marginBottom: "40px",
    },
    priceContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "40px",
    },
    priceBox: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "150px",
      textAlign: "center",
    },
    price: {
      fontSize: "24px",
      color: "#000",
      marginBottom: "10px",
    },
    service: {
      fontSize: "18px",
      color: "#666",
      marginBottom: "10px",
    },
    subText: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "20px",
    },
    button: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#000",
      color: "#fff",
      borderRadius: "5px",
      textDecoration: "none",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles1.wrapper}>
      <div style={styles1.container}>
        <h1 style={styles1.heading}>OUR WORK</h1>
        <p style={styles1.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus.
        </p>
        <div style={styles1.priceContainer}>
          <div style={styles1.priceBox}>
            <div style={styles1.price}>$40</div>
            <div style={styles1.service}>DRESSINGS</div>
            <div style={styles1.subText}>See, One price. Simple.</div>
            <a href="#" style={styles1.button}>
              GET SERVICE
            </a>
          </div>
          <div style={styles1.priceBox}>
            <div style={styles1.price}>$40</div>
            <div style={styles1.service}>DRESSINGS</div>
            <div style={styles1.subText}>See, One price. Simple.</div>
            <a href="#" style={styles1.button}>
              GET SERVICE
            </a>
          </div>
          <div style={styles1.priceBox}>
            <div style={styles1.price}>$40</div>
            <div style={styles1.service}>DRESSINGS</div>
            <div style={styles1.subText}>See, One price. Simple.</div>
            <a href="#" style={styles1.button}>
              GET SERVICE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;

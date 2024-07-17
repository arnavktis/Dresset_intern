import React from "react";
import Mobile from "../Img/Mobile.png";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
></link>;

const About = () => {
  return (
    <div style={styles.locateStoresContainer}>
      <div style={styles.locateStoresHeader}>LOCATE OUR STORES</div>
      <div style={styles.locateStoresContent}>
        <div style={styles.storeItem}>
          <i className="fas fa-globe" style={styles.icon}></i>
          <div style={styles.storeText}>
            <span style={styles.storeLabel}>Country</span>
            <span style={styles.storeValue}>India</span>
          </div>
        </div>
        <div style={styles.storeItem}>
          <i className="fas fa-map-marker-alt" style={styles.icon}></i>
          <div style={styles.storeText}>
            <span style={styles.storeLabel}>State</span>
            <span style={styles.storeValue}>Haryana</span>
          </div>
        </div>
        <div style={styles.storeItem}>
          <i className="fas fa-city" style={styles.icon}></i>
          <div style={styles.storeText}>
            <span style={styles.storeLabel}>City</span>
            <span style={styles.storeValue}>Faridabad</span>
          </div>
        </div>
        <div style={styles.storeItem}>
          <i className="fas fa-tshirt" style={styles.icon}></i>
          <div style={styles.storeText}>
            <span style={styles.storeLabel}>Cloth-Type</span>
            <span style={styles.storeValue}>Kurta</span>
          </div>
        </div>
      </div>
      <div style={styles.locateStoresButton}>
        <button style={styles.searchButton}>Search</button>
      </div>
      <div style={styles.boxes}>
        <div sty></div>
        <div style={styles.boxContainer}>
          <div style={styles.boxIcon}>
            <i className="fas fa-file-alt" style={styles.boxIconStyle}></i>
          </div>
          <div style={styles.boxContent}>
            <h3 style={styles.boxTitle}>Best Guide</h3>
            <p style={styles.boxText}>
              Suspendisse ultricies nibh non cursus sagittis. Morbi dictum
              consequat ex, quis finibus magna.
            </p>
          </div>
          <div style={styles.boxButton}>
            <i className="fas fa-arrow-right" style={styles.boxButtonIcon}></i>
          </div>
        </div>
        <div style={styles.boxContainer}>
          <div style={styles.boxIcon}>
            <i className="fas fa-percent" style={styles.boxIconStyle}></i>
          </div>
          <div style={styles.boxContent}>
            <h3 style={styles.boxTitle}>More Discount</h3>
            <p style={styles.boxText}>
              Suspendisse ultricies nibh non cursus sagittis. Morbi dictum
              consequat ex, quis finibus magna.
            </p>
          </div>
          <div style={styles.boxButton}>
            <i className="fas fa-arrow-right" style={styles.boxButtonIcon}></i>
          </div>
        </div>
        <div style={styles.boxContainer}>
          <div style={styles.boxIcon}>
            <i className="fas fa-user-secret" style={styles.boxIconStyle}></i>
          </div>
          <div style={styles.boxContent}>
            <h3 style={styles.boxTitle}>Private</h3>
            <p style={styles.boxText}>
              Suspendisse ultricies nibh non cursus sagittis. Morbi dictum
              consequat ex, quis finibus magna.
            </p>
          </div>
          <div style={styles.boxButton}>
            <i className="fas fa-arrow-right" style={styles.boxButtonIcon}></i>
          </div>
        </div>
        <div style={styles.boxContainer}>
          <div style={styles.boxIcon}>
            <i className="fas fa-headset" style={styles.boxIconStyle}></i>
          </div>
          <div style={styles.boxContent}>
            <h3 style={styles.boxTitle}>Online Support</h3>
            <p style={styles.boxText}>
              Suspendisse ultricies nibh non cursus sagittis. Morbi dictum
              consequat ex, quis finibus magna.
            </p>
          </div>
          <div style={styles.boxButton}>
            <i className="fas fa-arrow-right" style={styles.boxButtonIcon}></i>
          </div>
        </div>
      </div>
      <div>
        <img
          src={Mobile}
          style={{
            display: "flex",
            // top: "1350px",
            height: "798px",
            width: "100%",
          }}
          alt="Application"
        />
      </div>
      <div style={styles1.wrapper}>
        <div style={styles1.container}>
          <h1 style={styles1.heading}>OUR WORK</h1>
          <p style={styles1.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus.
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
    </div>
  );
};

const styles1 = {
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // position: "absolute",
    top: "1390px",
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


const styles = {
  locateStoresContainer: {
    // width: "100%",
    // // display: 'flex',
    // position: "absolute",
    // top: "100vh",
    // // borderRadius: "12px",
    // padding: "20px",
    // // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    // color: "#030522",
    // flexDirection: 'column',
    // // justifyContent: 'center',
    // position: "absolute",
    // backgroundColor: '#f0f0f0',
    // height: '100vh',
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    top: "100vh",
  },
  locateStoresHeader: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  locateStoresContent: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  boxes: {
    display: "flex",
  },
  storeItem: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: "24px",
    marginRight: "10px",
  },
  storeText: {
    display: "flex",
    flexDirection: "column",
  },
  storeLabel: {
    fontSize: "14px",
    color: "#888",
  },
  storeValue: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  locateStoresButton: {
    textAlign: "center",
  },
  searchButton: {
    background: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
  },
  searchButtonHover: {
    background: "#0056b3",
  },
  featuresContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "40px",
  },
  boxContainer: {
    background: "#ffffff",
    borderRadius: "1000px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "200px",
    margin: "20px auto",
  },
  boxIcon: {
    background: "#f0f0f0",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 10px",
  },
  boxIconStyle: {
    fontSize: "24px",
    color: "#000",
  },
  boxContent: {
    marginBottom: "20px",
  },
  boxTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  boxText: {
    fontSize: "14px",
    color: "#666",
  },
  boxButton: {
    background: "#000",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    cursor: "pointer",
  },
  boxButtonIcon: {
    fontSize: "16px",
    color: "#fff",
  },
};

export default About;

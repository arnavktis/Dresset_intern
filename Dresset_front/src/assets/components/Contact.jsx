import React from "react";

const Contact = () => {
  return (
    <div>
      <div id="main">
        <div class="breadcrumbs d-flex align-items-center">
          <div
            class="container position-relative d-flex flex-column align-items-center"
            data-aos="fade"
          >
            <h2>Contact</h2>
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Contact</li>
            </ol>
          </div>
        </div>
        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row gy-4">
              <div class="col-lg-6">
                <div class="info-item  d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-map"></i>
                  <h3>Our Address</h3>
                  <p>
                    Plot No. A-28 , Dabua Pali road near 17no. Chungi ,
                    FARIDABAD-121001
                  </p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="info-item d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>jnengineers@rediffmail.com</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="info-item  d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>9811362044, 9811362040</p>
                </div>
              </div>
            </div>

            <div class="row gy-4 mt-1">
              <div class="col-lg-6 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.2086184179334!2d77.26162477560143!3d28.38276629537874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cde933758d107%3A0x9811199ede250130!2sDabua%20Pali%20Rd%2C%20Sector%2049%2C%20Faridabad%2C%20Haryana%20121005!5e0!3m2!1sen!2sin!4v1711571786410!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  border = "0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div class="col-lg-6">
                <form
                  // action="forms/contact.php"
                  method="post"
                  role="form"
                  class="php-email-form"
                >
                  <div class="row gy-4">
                    <div class="col-lg-6 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      ></input>
                    </div>
                    <div class="col-lg-6 form-group">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      ></input>
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    ></input>
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

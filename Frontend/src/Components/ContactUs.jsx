import { Mail, Phone } from "lucide-react";
import "../Styles/ContactUs.css";
import Footer from "../utility/Footer";

const ContactUs = () => {
  return (
    <div className="h-fit">
      <section className="hero-section">
        <div className="hs-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team</p>
        </div>
      </section>

      <section className="contact-container">
        {/* Contact Content */}
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="header">
              <h2>Get in Touch</h2>
              <p className="contact-description">
                Have questions about our treks? Want to customize your
                adventure? Our team is here to help you plan your perfect
                mountain experience.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div className="contact-text">
                  <h3 className="contact-heading">Email</h3>
                  <p className="contact-subtext">info@mountaintrek.com</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone className="contact-icon" />
                <div className="contact-text">
                  <h3 className="contact-heading">Phone</h3>
                  <p className="contact-subtext">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="contact-hours">
                <h3 className="contact-heading">Office Hours</h3>
                <div className="contact-time">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location embedded */}
      <section className="location">
        <h1>Our Location</h1>
        <iframe
          className="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.868036571138!2d85.3292905!3d27.705038499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a74d6ee495%3A0x7f4d91c7478c536a!2sDillibazar%20Pipal%20Bot!5e1!3m2!1sen!2snp!4v1739876099870!5m2!1sen!2snp"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;

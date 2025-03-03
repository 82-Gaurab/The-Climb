import SocialContact from "./SocialContact";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p id="title">Quick Navigation</p>
        <div className="flex justify-center gap-2 font-semibold">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/trekList" className="hover:text-gray-400">
            Treks
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact Us
          </a>
        </div>
      </div>
      <p className="font-semibold">
        &copy; 2025 The Climb. All Rights Reserved.
      </p>
      <div className="contact-platform">
        <SocialContact />
      </div>
    </footer>
  );
}

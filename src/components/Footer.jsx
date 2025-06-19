import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
  ];

  const importantLinks = [
    { name: 'Gallery', path: '/gallery' },
    { name: 'News & Events', path: '/news' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Online Forms', path: '/admissions' },
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* School Info Section */}
            <div className="footer-section" data-aos="fade-up" data-aos-delay="100">
              <div className="footer-logo">
                <div className="logo-circle">
                  <span className="logo-text">VP</span>
                </div>
                <div className="school-info">
                  <h3 className="school-name">V.D. Patel Shaikshanik Sankul</h3>
                  <p className="school-tagline">Excellence in Education, Values in Life</p>
                </div>
              </div>
              <p className="footer-description">
                Nurturing young minds with modern education while preserving cultural values. 
                Located in the heart of Mandavad, we are committed to providing quality education 
                that prepares students for a bright future.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-section" data-aos="fade-up" data-aos-delay="200">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div className="footer-section" data-aos="fade-up" data-aos-delay="300">
              <h4 className="footer-title">Important</h4>
              <ul className="footer-links">
                {importantLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section" data-aos="fade-up" data-aos-delay="400">
              <h4 className="footer-title">Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={18} />
                  <span>Mandavad, Gujarat, India</span>
                </div>
                <div className="contact-item">
                  <Phone size={18} />
                  <span>+91 98765 43210</span>
                </div>
                <div className="contact-item">
                  <Mail size={18} />
                  <span>info@vdpatelschool.edu.in</span>
                </div>
                <div className="contact-item">
                  <Clock size={18} />
                  <span>Mon - Sat: 8:00 AM - 4:00 PM</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-media">
                <h5 className="social-title">Follow Us</h5>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="social-link" aria-label="YouTube">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} V.D. Patel Shaikshanik Sankul Mandavad. All rights reserved.
            </p>
            <p className="developer-credit">
              Made with <Heart size={16} className="heart" /> by School Development Team
            </p>
          </div>
        </div>
      </div>

      <style>{`        .footer {
          background: linear-gradient(135deg, var(--dark-charcoal), #1a1a1a);
          color: white;
          margin-top: auto;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(229, 57, 53, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(30, 64, 175, 0.1) 0%, transparent 50%);
          z-index: 1;
        }

        .footer-main {
          padding: var(--spacing-2xl) 0 var(--spacing-lg) 0;
          position: relative;
          z-index: 2;
        }
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-xl);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-sm);
        }

        .logo-circle {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-red), var(--primary-red-hover));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(229, 57, 53, 0.3);
        }

        .logo-text {
          color: white;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .school-info {
          display: flex;
          flex-direction: column;
        }

        .school-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: white;
          margin: 0;
          line-height: 1.2;
        }

        .school-tagline {
          font-size: 0.9rem;
          color: var(--light-blue);
          margin: 0;
          font-style: italic;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .footer-title {
          color: var(--light-blue);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: var(--spacing-sm);
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--primary-red);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all var(--transition-fast);
          font-size: 0.95rem;
          position: relative;
          padding-left: 1rem;
        }

        .footer-link::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary-red);
          transform: translateX(-5px);
          opacity: 0;
          transition: all var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--light-blue);
          padding-left: 1.2rem;
        }

        .footer-link:hover::before {
          transform: translateX(0);
          opacity: 1;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
        }

        .contact-item svg {
          color: var(--light-blue);
          flex-shrink: 0;
        }

        .social-media {
          margin-top: var(--spacing-md);
        }

        .social-title {
          color: var(--light-blue);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: var(--spacing-sm);
        }

        .social-links {
          display: flex;
          gap: var(--spacing-sm);
        }

        .social-link {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all var(--transition-normal);
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          background: var(--primary-red);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(229, 57, 53, 0.4);
        }

        .footer-bottom {
          background: rgba(0, 0, 0, 0.3);
          padding: var(--spacing-md) 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-bottom-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          text-align: center;
        }

        .copyright,
        .developer-credit {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          margin: 0;
        }

        .developer-credit {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .heart {
          color: var(--primary-red);
          animation: heartbeat 2s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        /* Responsive Design */
        @media (min-width: 768px) {
          .footer-content {
            grid-template-columns: 2fr 1fr 1fr 1.5fr;
          }

          .footer-bottom-content {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        @media (max-width: 480px) {
          .footer-main {
            padding: var(--spacing-xl) 0 var(--spacing-md) 0;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .footer-logo {
            flex-direction: column;
            text-align: center;
          }

          .school-info {
            align-items: center;
          }

          .footer-title::after {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
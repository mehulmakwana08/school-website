import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News & Events', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo and School Name */}
          <Link to="/" className="logo-section">
            <div className="logo">
              <div className="logo-circle">
                <span className="logo-text">VP</span>
              </div>
            </div>
            <div className="school-info">
              <h1 className="school-name">V.D</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.name} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="header-cta">
            <Link to="/admissions" className="btn btn-primary">
              Admissions Open
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="mobile-nav-item">
                <Link
                  to={item.path}
                  className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="mobile-nav-item">
              <Link to="/admissions" className="btn btn-primary mobile-cta">
                Admissions Open
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style>{`        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(254, 254, 254, 0.95);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          z-index: 1000;
          transition: all var(--transition-normal);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .header-scrolled {
          background: rgba(254, 254, 254, 0.98);
          box-shadow: 
            0 2px 30px rgba(0, 0, 0, 0.1),
            0 1px 8px rgba(0, 0, 0, 0.06);
          border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          min-height: 80px;
          transition: all var(--transition-normal);
        }

        .header-scrolled .header-content {
          padding: 0.75rem 0;
          min-height: 70px;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          color: inherit;
          transition: transform var(--transition-fast);
        }

        .logo-section:hover {
          transform: translateY(-1px);
        }

        .logo-circle {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-red), var(--primary-red-hover));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 4px 15px rgba(229, 57, 53, 0.3),
            0 2px 8px rgba(229, 57, 53, 0.2);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .logo-circle::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .logo-section:hover .logo-circle::before {
          left: 100%;
        }

        .header-scrolled .logo-circle {
          width: 45px;
          height: 45px;
        }

        .logo-text {
          color: white;
          font-weight: 700;
          font-size: 1.2rem;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .school-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .school-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--dark-charcoal);
          margin: 0;
          line-height: 1.2;
          transition: all var(--transition-normal);
        }

        .header-scrolled .school-name {
          font-size: 1.4rem;
        }

        .school-location {
          font-size: 0.9rem;
          color: var(--royal-blue);
          margin: 0;
          font-weight: 500;
          transition: all var(--transition-normal);
        }

        .header-scrolled .school-location {
          font-size: 0.85rem;
        }

        .desktop-nav {
          display: none;
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          color: var(--dark-charcoal);
          font-weight: 500;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
          position: relative;
          padding: 0.5rem 0;
          text-decoration: none;
        }        .nav-link:hover,
        .nav-link.active {
          color: var(--primary-red);
          transform: translateY(-1px);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-red), var(--primary-red-hover));
          transition: all var(--transition-fast);
          transform: translateX(-50%);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .header-cta {
          display: none;
        }

        .header-cta .btn {
          padding: 0.75rem 1.5rem;
          font-size: 0.9rem;
          transition: all var(--transition-normal);
        }

        .header-cta .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(229, 57, 53, 0.3);
        }

        .mobile-menu-toggle {
          background: none;
          border: none;
          color: var(--dark-charcoal);
          cursor: pointer;
          padding: 0.5rem;
          transition: all var(--transition-fast);
          border-radius: var(--radius-md);
        }

        .mobile-menu-toggle:hover {
          color: var(--primary-red);
          background: rgba(229, 57, 53, 0.1);
          transform: translateY(-1px);
        }        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          transform: translateY(-20px);
          opacity: 0;
          visibility: hidden;
          transition: all var(--transition-normal);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .mobile-nav-open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-list {
          list-style: none;
          padding: 1rem 0;
          margin: 0;
        }

        .mobile-nav-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          transform: translateY(20px);
          opacity: 0;
          animation: slideInMobile 0.3s ease forwards;
        }

        .mobile-nav-item:nth-child(1) { animation-delay: 0.1s; }
        .mobile-nav-item:nth-child(2) { animation-delay: 0.15s; }
        .mobile-nav-item:nth-child(3) { animation-delay: 0.2s; }
        .mobile-nav-item:nth-child(4) { animation-delay: 0.25s; }
        .mobile-nav-item:nth-child(5) { animation-delay: 0.3s; }
        .mobile-nav-item:nth-child(6) { animation-delay: 0.35s; }
        .mobile-nav-item:nth-child(7) { animation-delay: 0.4s; }
        .mobile-nav-item:nth-child(8) { animation-delay: 0.45s; }

        @keyframes slideInMobile {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .mobile-nav-item:last-child {
          border-bottom: none;
          padding: 1rem;
          text-align: center;
        }

        .mobile-nav-link {
          display: block;
          padding: 1rem;
          color: var(--dark-charcoal);
          font-weight: 500;
          transition: all var(--transition-fast);
          text-decoration: none;
          position: relative;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--primary-red);
          background: rgba(229, 57, 53, 0.05);
        }

        .mobile-cta {
          margin-top: 0.5rem;
        }

        /* Desktop Styles */
        @media (min-width: 768px) {
          .desktop-nav {
            display: block;
          }

          .header-cta {
            display: block;
          }

          .mobile-menu-toggle {
            display: none;
          }

          .mobile-nav {
            display: none;
          }

          .school-name {
            font-size: 1.25rem;
          }

          .logo-circle {
            width: 60px;
            height: 60px;
          }

          .logo-text {
            font-size: 1.4rem;
          }
        }

        @media (min-width: 1024px) {
          .school-name {
            font-size: 1.4rem;
          }

          .nav-list {
            gap: 2.5rem;
          }

          .nav-link {
            font-size: 1rem;
          }
        }

        /* Extra small devices */
        @media (max-width: 480px) {
          .school-name {
            font-size: 1.1rem;
          }

          .school-location {
            font-size: 0.8rem;
          }

          .logo-circle {
            width: 45px;
            height: 45px;
          }

          .logo-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
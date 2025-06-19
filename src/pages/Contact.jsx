import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  User,
  MessageSquare,
  Calendar,
  Users,
  Navigation,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    visitDate: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        visitDate: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      details: ['V.D. Patel Shaikshanik Sankul', 'Mandavad, Gujarat 384170', 'India'],
      color: 'var(--primary-red)'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109', 'Emergency: +91 99887 76655'],
      color: 'var(--royal-blue)'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: ['info@vdpatelschool.edu.in', 'admissions@vdpatelschool.edu.in', 'principal@vdpatelschool.edu.in'],
      color: 'var(--primary-red)'
    },
    {
      icon: <Clock size={24} />,
      title: 'School Hours',
      details: ['Monday - Friday: 8:00 AM - 4:00 PM', 'Saturday: 8:00 AM - 1:00 PM', 'Sunday: Closed'],
      color: 'var(--royal-blue)'
    }
  ];

  const departments = [
    { name: 'Principal Office', ext: '101', person: 'Dr. Rajesh Kumar' },
    { name: 'Admissions Office', ext: '102', person: 'Mrs. Priya Sharma' },
    { name: 'Academic Office', ext: '103', person: 'Mr. Amit Patel' },
    { name: 'Student Affairs', ext: '104', person: 'Mrs. Meera Shah' },
    { name: 'Library', ext: '105', person: 'Mr. Suresh Joshi' },
    { name: 'Sports Department', ext: '106', person: 'Coach Ravi Singh' }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1>Contact Us</h1>
            <p>Get in touch with us for admissions, inquiries, and campus visits</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section section">
        <div className="container">
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title} 
                className="contact-card" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="contact-icon" style={{ color: info.color }}>
                  {info.icon}
                </div>
                <h3>{info.title}</h3>
                <div className="contact-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="contact-form-section section bg-light">
        <div className="container">
          <div className="form-map-layout">
            {/* Contact Form */}
            <div className="contact-form-wrapper" data-aos="fade-right">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible</p>
              </div>
              
              {isSubmitted ? (
                <div className="success-message">
                  <div className="success-icon">
                    <CheckCircle size={48} />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        <User size={18} />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        <Mail size={18} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">
                        <Phone size={18} />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="visitDate">
                        <Calendar size={18} />
                        Preferred Visit Date
                      </label>
                      <input
                        type="date"
                        id="visitDate"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">
                      <MessageSquare size={18} />
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="general">General Information</option>
                      <option value="academic">Academic Programs</option>
                      <option value="facilities">Facilities Tour</option>
                      <option value="complaint">Complaint/Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">
                      <MessageSquare size={18} />
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Please describe your inquiry in detail..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn">
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map and Location */}
            <div className="map-wrapper" data-aos="fade-left">
              <div className="map-header">
                <h3>Find Us</h3>
                <p>Visit our campus in the heart of Mandavad</p>
              </div>
              
              {/* Google Maps Embed */}
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41611245513!2d72.5!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzAwLjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                ></iframe>
              </div>
              
              <div className="directions">
                <button className="directions-btn">
                  <Navigation size={18} />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Directory */}
      <section className="department-section section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Department Directory</h2>
            <p>Connect directly with specific departments</p>
          </div>
          
          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div 
                key={dept.name} 
                className="department-card" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="dept-icon">
                  <Users size={24} />
                </div>
                <h4>{dept.name}</h4>
                <p className="dept-person">{dept.person}</p>
                <p className="dept-ext">Extension: {dept.ext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="visit-info-section section bg-beige">
        <div className="container">
          <div className="visit-content">
            <div className="visit-text" data-aos="fade-right">
              <h2>Plan Your Visit</h2>
              <p>
                We welcome prospective students and parents to visit our campus. 
                Experience our facilities, meet our faculty, and see what makes 
                V.D. Patel Shaikshanik Sankul special.
              </p>
              
              <div className="visit-highlights">
                <div className="highlight-item">
                  <Calendar size={20} />
                  <span>Schedule a personalized campus tour</span>
                </div>
                <div className="highlight-item">
                  <Users size={20} />
                  <span>Meet with our academic counselors</span>
                </div>
                <div className="highlight-item">
                  <Clock size={20} />
                  <span>Tours available Monday to Saturday</span>
                </div>
              </div>
            </div>
            
            <div className="visit-cta" data-aos="fade-left">
              <div className="cta-card">
                <h3>Ready to Visit?</h3>
                <p>Contact us to schedule your visit</p>
                <button className="cta-btn">Schedule Tour</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          padding-top: 80px;
        }

        /* Hero Section */
        .contact-hero {
          background: linear-gradient(135deg, var(--royal-blue), var(--primary-red));
          color: white;
          padding: var(--spacing-2xl) 0;
          text-align: center;
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: var(--spacing-sm);
          color: white;
        }

        .hero-content p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        /* Contact Info Section */
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-xl);
        }

        .contact-card {
          background: white;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all var(--transition-normal);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .contact-icon {
          margin-bottom: var(--spacing-md);
        }

        .contact-card h3 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-md);
        }

        .contact-details p {
          color: #666;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        /* Form and Map Layout */
        .form-map-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-2xl);
          align-items: start;
        }

        .contact-form-wrapper {
          background: white;
          padding: var(--spacing-2xl);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .form-header {
          margin-bottom: var(--spacing-xl);
        }

        .form-header h2 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
        }

        .form-header p {
          color: #666;
        }

        /* Success Message */
        .success-message {
          text-align: center;
          padding: var(--spacing-2xl);
        }

        .success-icon {
          color: #10b981;
          margin-bottom: var(--spacing-md);
        }

        .success-message h3 {
          color: #10b981;
          margin-bottom: var(--spacing-sm);
        }

        /* Form Styles */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--dark-charcoal);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: var(--spacing-sm);
          border: 2px solid #e5e5e5;
          border-radius: var(--radius-md);
          font-size: 1rem;
          transition: all var(--transition-fast);
          background: white;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--royal-blue);
          box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
        }

        .submit-btn {
          background: var(--primary-red);
          color: white;
          border: none;
          padding: var(--spacing-md) var(--spacing-xl);
          border-radius: var(--radius-md);
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all var(--transition-fast);
        }

        .submit-btn:hover {
          background: var(--primary-red-hover);
          transform: translateY(-2px);
        }

        /* Map Section */
        .map-wrapper {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .map-header {
          padding: var(--spacing-lg);
          border-bottom: 1px solid #e5e5e5;
        }

        .map-header h3 {
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
        }

        .map-header p {
          color: #666;
          margin: 0;
        }

        .map-container {
          height: 300px;
          background: #f0f0f0;
        }

        .directions {
          padding: var(--spacing-lg);
        }

        .directions-btn {
          background: var(--royal-blue);
          color: white;
          border: none;
          padding: var(--spacing-sm) var(--spacing-lg);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: background var(--transition-fast);
          width: 100%;
          justify-content: center;
        }

        .directions-btn:hover {
          background: var(--royal-blue-hover);
        }

        /* Department Section */
        .departments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
        }

        .department-card {
          background: white;
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: all var(--transition-normal);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .department-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .dept-icon {
          color: var(--primary-red);
          margin-bottom: var(--spacing-sm);
        }

        .department-card h4 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
        }

        .dept-person {
          color: var(--royal-blue);
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .dept-ext {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
        }

        /* Visit Section */
        .visit-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-2xl);
          align-items: center;
        }

        .visit-text h2 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-md);
        }

        .visit-text p {
          color: #666;
          line-height: 1.7;
          margin-bottom: var(--spacing-lg);
        }

        .visit-highlights {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          color: var(--dark-charcoal);
        }

        .highlight-item svg {
          color: var(--primary-red);
          flex-shrink: 0;
        }

        .cta-card {
          background: white;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .cta-card h3 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
        }

        .cta-card p {
          color: #666;
          margin-bottom: var(--spacing-lg);
        }

        .cta-btn {
          background: var(--primary-red);
          color: white;
          border: none;
          padding: var(--spacing-md) var(--spacing-xl);
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .cta-btn:hover {
          background: var(--primary-red-hover);
          transform: translateY(-2px);
        }

        /* Common Section Styles */
        .section-header {
          margin-bottom: var(--spacing-2xl);
        }

        .section-header h2 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
        }

        .section-header p {
          color: #666;
          font-size: 1.1rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .form-map-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }

          .visit-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form-wrapper {
            padding: var(--spacing-lg);
          }

          .departments-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .departments-grid {
            grid-template-columns: 1fr;
          }

          .contact-form-wrapper {
            padding: var(--spacing-md);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;

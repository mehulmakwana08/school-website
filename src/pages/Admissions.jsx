import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FileText, 
  Calendar, 
  Users, 
  CheckCircle, 
  AlertCircle, 
  Download,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  User,
  GraduationCap,
  CreditCard,
  Star,
  Award,
  TrendingUp
} from 'lucide-react';

const Admissions = () => {
  const [selectedGrade, setSelectedGrade] = useState('primary');

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const highlights = [
    { icon: <Star size={20} />, text: "Online Application Process" },
    { icon: <Award size={20} />, text: "Merit-Based Scholarships" },
    { icon: <TrendingUp size={20} />, text: "96% Success Rate" },
    { icon: <Users size={20} />, text: "Expert Guidance" }
  ];

  const admissionProcess = [
    {
      step: 1,
      title: 'Application Form',
      description: 'Download and fill the admission form with all required details',
      icon: <FileText size={32} />,
      status: 'current'
    },
    {
      step: 2,
      title: 'Document Submission',
      description: 'Submit all required documents along with the application form',
      icon: <CheckCircle size={32} />,
      status: 'upcoming'
    },
    {
      step: 3,
      title: 'Interaction/Test',
      description: 'Attend interaction session or entrance test (for higher grades)',
      icon: <Users size={32} />,
      status: 'upcoming'
    },
    {
      step: 4,
      title: 'Fee Payment',
      description: 'Pay admission fees and confirm enrollment',
      icon: <CreditCard size={32} />,
      status: 'upcoming'
    }
  ];

  const importantDates = [
    {
      event: 'Application Form Release',
      date: 'January 15, 2025',
      status: 'completed'
    },
    {
      event: 'Last Date for Submission',
      date: 'March 31, 2025',
      status: 'active'
    },
    {
      event: 'Entrance Test (Grades 9-12)',
      date: 'April 15, 2025',
      status: 'upcoming'
    },
    {
      event: 'Result Declaration',
      date: 'April 25, 2025',
      status: 'upcoming'
    },
    {
      event: 'Fee Payment Deadline',
      date: 'May 15, 2025',
      status: 'upcoming'
    },
    {
      event: 'Academic Session Begins',
      date: 'June 1, 2025',
      status: 'upcoming'
    }
  ];

  const gradeCategories = {
    primary: {
      title: 'Primary Education (Grades 1-5)',
      ageRequirement: '5-11 years',
      documents: [
        'Birth Certificate',
        'Previous School Transfer Certificate (if applicable)',
        'Passport Size Photographs (4)',
        'Aadhar Card Copy',
        'Parent/Guardian ID Proof',
        'Address Proof',
        'Medical Certificate'
      ],
      fees: {
        admission: '₹2,000',
        tuition: '₹15,000/year',
        activity: '₹3,000/year',
        total: '₹20,000/year'
      },
      additionalInfo: [
        'Age as on June 1st will be considered',
        'Interaction with child and parents',
        'No entrance test required',
        'Priority to local residents'
      ]
    },
    secondary: {
      title: 'Secondary Education (Grades 6-10)',
      ageRequirement: '11-16 years',
      documents: [
        'Previous School Transfer Certificate',
        'Previous Grade Mark Sheet',
        'Birth Certificate',
        'Passport Size Photographs (4)',
        'Aadhar Card Copy',
        'Parent/Guardian ID Proof',
        'Address Proof',
        'Medical Certificate',
        'Character Certificate'
      ],
      fees: {
        admission: '₹3,000',
        tuition: '₹25,000/year',
        activity: '₹5,000/year',
        laboratory: '₹2,000/year',
        total: '₹35,000/year'
      },
      additionalInfo: [
        'Entrance test for Grades 8-10',
        'Interview with student and parents',
        'Previous academic performance considered',
        'English and Mathematics proficiency required'
      ]
    },
    higher: {
      title: 'Higher Secondary (Grades 11-12)',
      ageRequirement: '16-18 years',
      documents: [
        'Grade 10 Board Certificate',
        'Grade 10 Mark Sheet',
        'Previous School Transfer Certificate',
        'Birth Certificate',
        'Passport Size Photographs (4)',
        'Aadhar Card Copy',
        'Parent/Guardian ID Proof',
        'Address Proof',
        'Medical Certificate',
        'Character Certificate'
      ],
      fees: {
        admission: '₹5,000',
        tuition: '₹35,000/year',
        activity: '₹5,000/year',
        laboratory: '₹3,000/year',
        library: '₹1,000/year',
        total: '₹49,000/year'
      },
      additionalInfo: [
        'Minimum 60% in Grade 10 for Science stream',
        'Minimum 55% in Grade 10 for Commerce stream',
        'Minimum 50% in Grade 10 for Arts stream',
        'Subject-wise entrance test',
        'Counseling session for stream selection'
      ]
    }
  };

  const notices = [
    {
      title: 'Extended Admission Deadline',
      date: 'March 15, 2025',
      content: 'Due to popular demand, admission deadline extended till March 31, 2025.',
      type: 'important'
    },
    {
      title: 'Entrance Test Schedule',
      date: 'March 10, 2025',
      content: 'Entrance test for Grades 9-12 scheduled on April 15, 2025. Admit cards available from April 10.',
      type: 'info'
    },
    {
      title: 'Fee Structure Update',
      date: 'February 28, 2025',
      content: 'Updated fee structure for academic year 2025-26 published. Check admission section for details.',
      type: 'update'
    }
  ];

  const downloadForms = [
    {
      title: 'Admission Application Form',
      description: 'Main application form for all grades',
      format: 'PDF',
      size: '1.2 MB'
    },
    {
      title: 'Fee Structure Details',
      description: 'Complete fee breakdown for all grades',
      format: 'PDF',
      size: '0.8 MB'
    },
    {
      title: 'Required Documents Checklist',
      description: 'Complete list of required documents',
      format: 'PDF',
      size: '0.5 MB'
    },
    {
      title: 'School Prospectus',
      description: 'Detailed information about school facilities and curriculum',
      format: 'PDF',
      size: '5.2 MB'
    }
  ];

  return (
    <div className="admissions-page">      {/* Hero Section */}
      <section className="admissions-hero">
        <div className="hero-background">
          <div className="hero-particles"></div>
        </div>
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <div className="hero-badge" data-aos="fade-down" data-aos-delay="200">
              <CheckCircle size={16} />
              <span>Admissions Open 2025-26</span>
            </div>
            <h1>Admissions 2025-26</h1>
            <p>Join our school family and embark on a journey of academic excellence and character development</p>
            <div className="hero-highlights" data-aos="fade-up" data-aos-delay="400">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  {highlight.icon}
                  <span>{highlight.text}</span>
                </div>
              ))}
            </div>
            <div className="hero-cta" data-aos="fade-up" data-aos-delay="600">
              <button className="btn btn-primary">
                Apply Now
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline">
                Download Brochure
                <Download size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="notices-section section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Important Announcements</h2>
            <p>Stay updated with latest admission information</p>
          </div>
          <div className="notices-grid">
            {notices.map((notice, index) => (
              <div 
                key={notice.title} 
                className={`notice-card ${notice.type}`} 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="notice-header">
                  <div className="notice-icon">
                    <AlertCircle size={24} />
                  </div>
                  <div className="notice-meta">
                    <h3>{notice.title}</h3>
                    <span className="notice-date">{notice.date}</span>
                  </div>
                </div>
                <p>{notice.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="process-section section bg-light">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Admission Process</h2>
            <p>Simple and transparent admission procedure</p>
          </div>
          <div className="process-steps">
            {admissionProcess.map((step, index) => (
              <div 
                key={step.step} 
                className={`process-step ${step.status}`} 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade-wise Information */}
      <section className="grade-info-section section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Grade-wise Admission Details</h2>
            <p>Specific requirements and fee structure for each level</p>
          </div>
          
          {/* Grade Selection Tabs */}
          <div className="grade-tabs" data-aos="fade-up" data-aos-delay="200">
            {Object.entries(gradeCategories).map(([key, grade]) => (
              <button
                key={key}
                className={`grade-tab ${selectedGrade === key ? 'active' : ''}`}
                onClick={() => setSelectedGrade(key)}
              >
                {grade.title}
              </button>
            ))}
          </div>

          {/* Grade Information Display */}
          <div className="grade-content" data-aos="fade-up" data-aos-delay="300">
            <div className="grade-details">
              <div className="grade-overview">
                <h3>{gradeCategories[selectedGrade].title}</h3>
                <div className="age-requirement">
                  <User size={20} />
                  <span>Age Requirement: {gradeCategories[selectedGrade].ageRequirement}</span>
                </div>
              </div>

              <div className="grade-sections">
                {/* Required Documents */}
                <div className="section-card">
                  <h4><FileText size={20} /> Required Documents</h4>
                  <ul className="documents-list">
                    {gradeCategories[selectedGrade].documents.map((doc) => (
                      <li key={doc}>{doc}</li>
                    ))}
                  </ul>
                </div>

                {/* Fee Structure */}
                <div className="section-card">
                  <h4><CreditCard size={20} /> Fee Structure</h4>
                  <div className="fee-breakdown">
                    {Object.entries(gradeCategories[selectedGrade].fees).map(([type, amount]) => (
                      <div key={type} className={`fee-item ${type === 'total' ? 'total' : ''}`}>
                        <span className="fee-type">{type.charAt(0).toUpperCase() + type.slice(1)} Fee:</span>
                        <span className="fee-amount">{amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="section-card">
                  <h4><AlertCircle size={20} /> Additional Information</h4>
                  <ul className="info-list">
                    {gradeCategories[selectedGrade].additionalInfo.map((info) => (
                      <li key={info}>{info}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="dates-section section bg-beige">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Important Dates</h2>
            <p>Mark your calendar for key admission milestones</p>
          </div>          <div className="dates-timeline" data-aos="fade-up" data-aos-delay="200">
            {importantDates.map((date) => (
              <div key={date.event} className={`date-item ${date.status}`}>
                <div className="date-marker"></div>
                <div className="date-content">
                  <h4>{date.event}</h4>
                  <div className="date-info">
                    <Calendar size={18} />
                    <span>{date.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Forms */}
      <section className="forms-section section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Download Forms & Documents</h2>
            <p>Access all necessary forms and information documents</p>
          </div>
          <div className="forms-grid">
            {downloadForms.map((form, index) => (
              <div 
                key={form.title} 
                className="form-card" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="form-icon">
                  <Download size={32} />
                </div>
                <div className="form-content">
                  <h4>{form.title}</h4>
                  <p>{form.description}</p>
                  <div className="form-meta">
                    <span className="format">{form.format}</span>
                    <span className="size">{form.size}</span>
                  </div>
                </div>
                <button className="form-download-btn">
                  <Download size={18} />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-section section bg-light">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Need Help with Admissions?</h2>
            <p>Our admission team is here to assist you</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-icon">
                <Phone size={32} />
              </div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
              <p>+91 98765 43211</p>
              <span>Mon - Sat: 9:00 AM - 5:00 PM</span>
            </div>
            <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-icon">
                <Mail size={32} />
              </div>
              <h4>Email</h4>
              <p>admissions@vdpatelschool.edu.in</p>
              <p>info@vdpatelschool.edu.in</p>
              <span>Response within 24 hours</span>
            </div>
            <div className="contact-card" data-aos="fade-up" data-aos-delay="300">
              <div className="contact-icon">
                <MapPin size={32} />
              </div>
              <h4>Visit Us</h4>
              <p>V.D. Patel Shaikshanik Sankul</p>
              <p>Mandavad, Gujarat</p>
              <span>Office Hours: 9:00 AM - 4:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .admissions-page {
          padding-top: 80px;
        }        /* Hero Section */
        .admissions-hero {
          position: relative;
          background: linear-gradient(135deg, var(--royal-blue), var(--primary-red));
          color: white;
          padding: var(--spacing-2xl) 0;
          text-align: center;
          overflow: hidden;
          min-height: 65vh;
          display: flex;
          align-items: center;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
          animation: float 22s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(0.8deg); }
          66% { transform: translateY(12px) rotate(-0.8deg); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: var(--spacing-md);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
          50% { box-shadow: 0 0 30px rgba(255, 255, 255, 0.2); }
        }

        .hero-content h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: var(--spacing-sm);
          color: white;
          font-weight: 700;
          line-height: 1.2;
        }

        .hero-content p {
          font-size: 1.3rem;
          margin-bottom: var(--spacing-lg);
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-highlights {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xl);
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all var(--transition-normal);
          font-size: 0.95rem;
        }

        .highlight-item:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .hero-cta {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-cta .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Notices Section */
        .notices-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-lg);
          max-width: 1000px;
          margin: 0 auto;
        }

        .notice-card {
          background: white;
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border-left: 4px solid var(--primary-red);
          transition: transform var(--transition-normal);
        }

        .notice-card:hover {
          transform: translateY(-3px);
        }

        .notice-card.important {
          border-left-color: var(--primary-red);
        }

        .notice-card.info {
          border-left-color: var(--royal-blue);
        }

        .notice-card.update {
          border-left-color: #16a34a;
        }

        .notice-header {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
        }

        .notice-icon {
          color: var(--primary-red);
          flex-shrink: 0;
        }

        .notice-meta h3 {
          color: var(--dark-charcoal);
          margin-bottom: 0.25rem;
          font-size: 1.1rem;
        }

        .notice-date {
          color: #666;
          font-size: 0.9rem;
        }

        .notice-card p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        /* Process Section */
        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-xl);
          max-width: 1200px;
          margin: 0 auto;
        }

        .process-step {
          background: white;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          position: relative;
          transition: all var(--transition-normal);
        }

        .process-step:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .step-number {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary-red);
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        .step-icon {
          color: var(--royal-blue);
          margin: var(--spacing-md) 0;
        }

        .step-content h3 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
        }

        .step-content p {
          color: #666;
          line-height: 1.6;
        }

        /* Grade Tabs */
        .grade-tabs {
          display: flex;
          justify-content: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-xl);
          flex-wrap: wrap;
        }

        .grade-tab {
          background: white;
          border: 2px solid var(--royal-blue);
          color: var(--royal-blue);
          padding: var(--spacing-sm) var(--spacing-lg);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          font-weight: 500;
        }

        .grade-tab:hover,
        .grade-tab.active {
          background: var(--royal-blue);
          color: white;
        }

        /* Grade Content */
        .grade-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .grade-overview {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }

        .grade-overview h3 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
        }

        .age-requirement {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--warm-beige);
          color: var(--dark-charcoal);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 500;
        }

        .grade-sections {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-lg);
        }

        .section-card {
          background: white;
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .section-card h4 {
          color: var(--royal-blue);
          margin-bottom: var(--spacing-md);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .documents-list,
        .info-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .documents-list li,
        .info-list li {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          color: #666;
          position: relative;
          padding-left: 1.5rem;
        }

        .documents-list li::before,
        .info-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary-red);
          font-weight: bold;
        }

        .documents-list li:last-child,
        .info-list li:last-child {
          border-bottom: none;
        }

        .fee-breakdown {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .fee-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .fee-item.total {
          border-top: 2px solid var(--primary-red);
          border-bottom: none;
          font-weight: 600;
          color: var(--primary-red);
          margin-top: 0.5rem;
        }

        .fee-type {
          color: #666;
        }

        .fee-amount {
          font-weight: 600;
          color: var(--dark-charcoal);
        }

        /* Dates Timeline */
        .dates-timeline {
          max-width: 600px;
          margin: 0 auto;
          position: relative;
        }

        .dates-timeline::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--light-blue);
        }

        .date-item {
          position: relative;
          margin-bottom: var(--spacing-xl);
          padding-left: 60px;
        }

        .date-marker {
          position: absolute;
          left: 10px;
          top: 0;
          width: 20px;
          height: 20px;
          background: var(--light-blue);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .date-item.completed .date-marker {
          background: #16a34a;
        }

        .date-item.active .date-marker {
          background: var(--primary-red);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .date-content h4 {
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
        }

        .date-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--royal-blue);
          font-weight: 500;
        }

        /* Forms Grid */
        .forms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-lg);
        }

        .form-card {
          background: white;
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all var(--transition-normal);
          border: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .form-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .form-icon {
          color: var(--primary-red);
          text-align: center;
        }

        .form-content {
          flex-grow: 1;
          text-align: center;
        }

        .form-content h4 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
        }

        .form-content p {
          color: #666;
          line-height: 1.6;
          margin-bottom: var(--spacing-sm);
        }

        .form-meta {
          display: flex;
          justify-content: center;
          gap: var(--spacing-sm);
        }

        .format,
        .size {
          background: var(--light-gray);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: #666;
        }

        .form-download-btn {
          background: var(--royal-blue);
          color: white;
          border: none;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-md);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: background var(--transition-fast);
          font-weight: 500;
        }

        .form-download-btn:hover {
          background: var(--royal-blue-hover);
        }

        /* Contact Grid */
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-lg);
        }

        .contact-card {
          background: white;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: transform var(--transition-normal);
        }

        .contact-card:hover {
          transform: translateY(-5px);
        }

        .contact-icon {
          color: var(--primary-red);
          margin-bottom: var(--spacing-md);
        }

        .contact-card h4 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
        }

        .contact-card p {
          color: #666;
          margin-bottom: 0.25rem;
        }

        .contact-card span {
          color: var(--royal-blue);
          font-size: 0.9rem;
          font-style: italic;
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
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .notices-grid {
            grid-template-columns: 1fr;
          }

          .process-steps {
            grid-template-columns: 1fr;
          }

          .grade-tabs {
            flex-direction: column;
            align-items: center;
          }

          .grade-sections {
            grid-template-columns: 1fr;
          }

          .forms-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .dates-timeline {
            padding-left: 0;
          }

          .dates-timeline::before {
            left: 15px;
          }

          .date-item {
            padding-left: 50px;
          }

          .date-marker {
            left: 5px;
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Admissions;

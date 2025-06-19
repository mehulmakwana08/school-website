import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  BookOpen,
  Lightbulb,
  Globe,
  Calendar,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const statsData = [
    { number: "25+", label: "Years of Excellence", icon: <Calendar size={24} /> },
    { number: "1200+", label: "Students", icon: <Users size={24} /> },
    { number: "96%", label: "Pass Rate", icon: <TrendingUp size={24} /> },
    { number: "50+", label: "Qualified Teachers", icon: <Award size={24} /> }
  ];
  const founder = {
    name: "Vallabhbhai Jhaverbhai Patel",
    title: "Inspiration & Founder's Vision",
    quote: "Education is the foundation of progress. Our mission is to build character along with intellect.",
    description: "Inspired by Sardar Vallabhbhai Patel's vision of unity and strength, our school was founded to provide quality education that builds both character and knowledge."
  };

  const staff = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal",
      qualification: "M.Ed, Ph.D in Education",
      experience: "20+ years",
      specialization: "Educational Leadership"
    },
    {
      name: "Mrs. Priya Sharma",
      position: "Vice Principal",
      qualification: "M.A, B.Ed",
      experience: "15+ years",
      specialization: "Curriculum Development"
    },
    {
      name: "Mr. Amit Patel",
      position: "Head of Science Department",
      qualification: "M.Sc, B.Ed",
      experience: "12+ years",
      specialization: "Physics & Mathematics"
    },
    {
      name: "Mrs. Meera Shah",
      position: "Head of Languages",
      qualification: "M.A in English, B.Ed",
      experience: "10+ years",
      specialization: "English & Hindi Literature"
    }
  ];

  const values = [
    {
      icon: <Heart size={32} />,
      title: "Compassion",
      description: "Nurturing empathy and kindness in every student"
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description: "Striving for the highest standards in everything we do"
    },
    {
      icon: <Users size={32} />,
      title: "Unity",
      description: "Building a diverse and inclusive community"
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description: "Encouraging creativity and forward thinking"
    },
    {
      icon: <BookOpen size={32} />,
      title: "Learning",
      description: "Fostering a lifelong love for knowledge"
    },
    {
      icon: <Globe size={32} />,
      title: "Global Perspective",
      description: "Preparing students for a connected world"
    }
  ];

  return (
    <div className="about-page">      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background">
          <div className="hero-particles"></div>
        </div>
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <div className="hero-badge" data-aos="fade-down" data-aos-delay="200">
              <CheckCircle size={16} />
              <span>Established 1999</span>
            </div>
            <h1>About V.D. Patel Shaikshanik Sankul</h1>
            <p>Excellence in Education, Values in Life</p>
            <div className="hero-features" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-item">
                <Award size={20} />
                <span>State Recognition</span>
              </div>
              <div className="feature-item">
                <Users size={20} />
                <span>1200+ Students</span>
              </div>
              <div className="feature-item">
                <TrendingUp size={20} />
                <span>96% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div 
                key={stat.label} 
                className="stat-card" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section section">
        <div className="container">
          <div className="history-content">
            <div className="history-text" data-aos="fade-right">
              <h2>Our Rich Heritage</h2>
              <p>
                Established in 1999, V.D. Patel Shaikshanik Sankul Mandavad was born from a vision 
                to bring quality education to rural Gujarat. Named after the Iron Man of India, 
                Sardar Vallabhbhai Patel, our institution embodies his principles of unity, 
                integrity, and unwavering determination.
              </p>
              <p>
                What started as a small school with just 50 students has grown into a thriving 
                educational institution serving over 1200 students. Our journey has been marked 
                by continuous growth, innovation, and an unwavering commitment to educational excellence.
              </p>
              <p>
                Located in the heart of Mandavad, we serve not just our immediate community but 
                also students from surrounding villages who seek quality education rooted in 
                values and modern teaching methodologies.
              </p>
            </div>
            <div className="history-timeline" data-aos="fade-left">
              <div className="timeline-item">
                <div className="timeline-year">1999</div>
                <div className="timeline-content">
                  <h4>Foundation</h4>
                  <p>School established with 50 students and 5 teachers</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2005</div>
                <div className="timeline-content">
                  <h4>Expansion</h4>
                  <p>Added secondary education and science laboratories</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2010</div>
                <div className="timeline-content">
                  <h4>Modernization</h4>
                  <p>Introduced computer labs and digital classrooms</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2015</div>
                <div className="timeline-content">
                  <h4>Recognition</h4>
                  <p>Received state-level excellence award</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-content">
                  <h4>Digital Revolution</h4>
                  <p>Implemented online learning platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision section bg-light">
        <div className="container">
          <div className="mv-content">
            <div className="mv-card" data-aos="fade-up" data-aos-delay="100">
              <div className="mv-icon">
                <Target size={48} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide holistic education that nurtures intellectual curiosity, 
                moral values, and social responsibility while preparing students to 
                excel in a rapidly changing global environment.
              </p>
            </div>
            <div className="mv-card" data-aos="fade-up" data-aos-delay="200">
              <div className="mv-icon">
                <Eye size={48} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be a premier educational institution that transforms lives through 
                innovative teaching, character building, and community engagement, 
                creating future leaders who contribute positively to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="value-card" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="founder-section section bg-beige">
        <div className="container">
          <div className="founder-content">
            <div className="founder-image" data-aos="fade-right">
              <div className="image-placeholder">
                <Users size={80} />
                <p>Sardar Vallabhbhai Patel</p>
              </div>
            </div>
            <div className="founder-text" data-aos="fade-left">
              <h2>Founder's Inspiration</h2>
              <blockquote>
                "{founder.quote}"
              </blockquote>
              <p>{founder.description}</p>
              <div className="founder-info">
                <h4>{founder.name}</h4>
                <span>{founder.title}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="staff-section section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Meet Our Leadership Team</h2>
            <p>Experienced educators dedicated to student success</p>
          </div>
          <div className="staff-grid">
            {staff.map((member, index) => (
              <div 
                key={member.name} 
                className="staff-card" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="staff-image">
                  <Users size={60} />
                </div>
                <div className="staff-info">
                  <h4>{member.name}</h4>
                  <p className="position">{member.position}</p>
                  <p className="qualification">{member.qualification}</p>
                  <p className="experience">{member.experience} Experience</p>
                  <p className="specialization">Specialization: {member.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          padding-top: 80px;
        }        /* Hero Section */
        .about-hero {
          position: relative;
          background: linear-gradient(135deg, var(--royal-blue), var(--primary-red));
          color: white;
          padding: var(--spacing-2xl) 0;
          text-align: center;
          overflow: hidden;
          min-height: 60vh;
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
            radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(10px) rotate(-1deg); }
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
          opacity: 0.9;
          margin-bottom: var(--spacing-lg);
        }

        .hero-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--spacing-lg);
          margin-top: var(--spacing-lg);
        }

        .feature-item {
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
        }

        .feature-item:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        /* Stats Section */
        .stats-section {
          background: white;
          padding: var(--spacing-2xl) 0;
          margin-top: -3rem;
          position: relative;
          z-index: 3;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
          max-width: 800px;
          margin: 0 auto;
        }

        .stat-card {
          background: linear-gradient(145deg, #ffffff, #f8f9fa);
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.1),
            0 1px 8px rgba(0, 0, 0, 0.06);
          transition: all var(--transition-normal);
          border: 1px solid rgba(0, 0, 0, 0.05);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-red), var(--royal-blue));
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.15),
            0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .stat-icon {
          color: var(--primary-red);
          margin-bottom: var(--spacing-sm);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, var(--royal-blue), var(--primary-red));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          color: #666;
          font-weight: 500;
          font-size: 1rem;
        }

        /* History Section */
        .history-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-2xl);
          align-items: start;
        }

        .history-text h2 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-md);
        }

        .history-text p {
          margin-bottom: var(--spacing-md);
          color: #666;
          line-height: 1.7;
        }

        .history-timeline {
          position: relative;
          padding-left: var(--spacing-lg);
        }

        .history-timeline::before {
          content: '';
          position: absolute;
          left: 15px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--primary-red);
        }

        .timeline-item {
          position: relative;
          margin-bottom: var(--spacing-xl);
          padding-left: var(--spacing-lg);
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -23px;
          top: 0;
          width: 16px;
          height: 16px;
          background: var(--primary-red);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .timeline-year {
          background: var(--royal-blue);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          display: inline-block;
          font-weight: 600;
          margin-bottom: var(--spacing-sm);
        }

        .timeline-content h4 {
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
        }

        .timeline-content p {
          color: #666;
          margin: 0;
        }

        /* Mission & Vision Section */
        .mv-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--spacing-xl);
        }

        .mv-card {
          background: white;
          padding: var(--spacing-2xl);
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: transform var(--transition-normal);
        }

        .mv-card:hover {
          transform: translateY(-5px);
        }

        .mv-icon {
          color: var(--primary-red);
          margin-bottom: var(--spacing-md);
        }

        .mv-card h3 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-md);
        }

        .mv-card p {
          color: #666;
          line-height: 1.7;
        }

        /* Values Section */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-lg);
        }

        .value-card {
          background: white;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all var(--transition-normal);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .value-icon {
          color: var(--primary-red);
          margin-bottom: var(--spacing-md);
        }

        .value-card h4 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
        }

        .value-card p {
          color: #666;
          line-height: 1.6;
        }

        /* Founder Section */
        .founder-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--spacing-2xl);
          align-items: center;
        }

        .founder-image {
          display: flex;
          justify-content: center;
        }

        .image-placeholder {
          width: 100%;
          max-width: 300px;
          aspect-ratio: 3/4;
          background: linear-gradient(135deg, var(--warm-beige), #d4b896);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--dark-charcoal);
          text-align: center;
          border: 3px solid rgba(229, 57, 53, 0.2);
        }

        .image-placeholder p {
          margin-top: var(--spacing-sm);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .founder-text h2 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-md);
        }

        .founder-text blockquote {
          font-size: 1.3rem;
          font-style: italic;
          color: var(--primary-red);
          margin: var(--spacing-lg) 0;
          padding-left: var(--spacing-lg);
          border-left: 4px solid var(--primary-red);
          line-height: 1.6;
        }

        .founder-text p {
          color: #666;
          line-height: 1.7;
          margin-bottom: var(--spacing-lg);
        }

        .founder-info h4 {
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
        }

        .founder-info span {
          color: var(--royal-blue);
          font-weight: 500;
        }

        /* Staff Section */
        .staff-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }

        .staff-card {
          background: white;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all var(--transition-normal);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .staff-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .staff-image {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, var(--light-blue), var(--royal-blue));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin: 0 auto var(--spacing-md);
          border: 4px solid rgba(30, 64, 175, 0.1);
        }

        .staff-info h4 {
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
        }

        .position {
          color: var(--primary-red);
          font-weight: 600;
          margin-bottom: var(--spacing-sm) !important;
        }

        .qualification {
          color: var(--royal-blue);
          font-size: 0.95rem;
          margin-bottom: 0.5rem !important;
        }

        .experience {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 0.5rem !important;
        }

        .specialization {
          color: #666;
          font-size: 0.9rem;
          font-style: italic;
          margin: 0 !important;
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
        }        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .hero-features {
            flex-direction: column;
            align-items: center;
            gap: var(--spacing-md);
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-md);
          }

          .history-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }

          .mv-content {
            grid-template-columns: 1fr;
          }

          .founder-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-md);
          }

          .staff-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-features {
            gap: var(--spacing-sm);
          }

          .feature-item {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: var(--spacing-lg);
          }

          .stat-number {
            font-size: 2rem;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .mv-card,
          .staff-card,
          .value-card {
            padding: var(--spacing-lg);
          }

          .timeline-item {
            margin-bottom: var(--spacing-lg);
          }
        }
      `}</style>
    </div>
  );
};

export default About;

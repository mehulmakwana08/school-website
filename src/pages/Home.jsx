import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  GraduationCap, 
  Trophy, 
  Clock,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  ChevronDown,
  BookOpen,
  Award,
  Heart,
  Globe
} from 'lucide-react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({
    students: 0,
    teachers: 0,
    years: 0,
    achievements: 0
  });

  // Animated counter effect
  useEffect(() => {
    const finalStats = {
      students: 1200,
      teachers: 45,
      years: 25,
      achievements: 150
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        students: Math.floor(finalStats.students * progress),
        teachers: Math.floor(finalStats.teachers * progress),
        years: Math.floor(finalStats.years * progress),
        achievements: Math.floor(finalStats.achievements * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Parent of Grade 10 Student",
      content: "The school has provided an excellent learning environment for my daughter. The teachers are dedicated and the facilities are top-notch.",
      rating: 5
    },
    {
      id: 2,
      name: "Rajesh Patel",
      role: "Alumni, Class of 2020",
      content: "V.D. Patel School shaped my character and academic foundation. I'm grateful for the values and knowledge I gained here.",
      rating: 5
    },
    {
      id: 3,
      name: "Meera Shah",
      role: "Parent of Grade 7 Student",
      content: "The school's focus on both academics and extracurricular activities has helped my son develop into a well-rounded individual.",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <div className="home-page">
      {/* Enhanced Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <div className="hero-badge" data-aos="fade-down" data-aos-delay="200">
              <Award size={16} />
              <span>25+ Years of Excellence</span>
            </div>
            <h1 className="hero-title">
              Shaping Tomorrow's 
              <span className="highlight"> Leaders</span>
            </h1>
            <p className="hero-subtitle">
              Excellence in Education, Values in Life - Nurturing young minds with modern 
              education while preserving our rich cultural heritage in the heart of rural Gujarat.
            </p>
            <div className="hero-features" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-item">
                <BookOpen size={18} />
                <span>Modern Curriculum</span>
              </div>
              <div className="feature-item">
                <Heart size={18} />
                <span>Cultural Values</span>
              </div>
              <div className="feature-item">
                <Globe size={18} />
                <span>Global Standards</span>
              </div>
            </div>            <div className="hero-cta" data-aos="fade-up" data-aos-delay="600">
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator" data-aos="fade-up" data-aos-delay="1000">
          <div className="scroll-animation">
            <ChevronDown size={24} />
          </div>
          <span>Discover More</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid" data-aos="fade-up">
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={32} />
              </div>
              <div className="stat-number">{stats.students}+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <GraduationCap size={32} />
              </div>
              <div className="stat-number">{stats.teachers}+</div>
              <div className="stat-label">Teachers</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Clock size={32} />
              </div>
              <div className="stat-number">{stats.years}+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Trophy size={32} />
              </div>
              <div className="stat-number">{stats.achievements}+</div>
              <div className="stat-label">Achievements</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview section bg-light">
        <div className="container">
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <h2>About V.D. Patel Shaikshanik Sankul</h2>
              <p>
                Established with a vision to provide quality education in rural areas, 
                V.D. Patel Shaikshanik Sankul Mandavad has been a beacon of learning 
                for over two decades. We believe in nurturing not just academic excellence 
                but also character development and cultural values.
              </p>
              <p>
                Our dedicated faculty and modern infrastructure create an environment 
                where students can explore their potential and prepare for a bright future.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="about-image" data-aos="fade-left">
              <div className="image-placeholder">
                <GraduationCap size={80} />
                <p>School Building</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Why Choose V.D. Patel School?</h2>
            <p>Discover what makes our school special</p>
          </div>
          <div className="features-grid">
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon">
                <GraduationCap size={40} />
              </div>
              <h3>Quality Education</h3>
              <p>Modern curriculum designed to meet global standards while maintaining local relevance.</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon">
                <Users size={40} />
              </div>
              <h3>Experienced Faculty</h3>
              <p>Dedicated teachers with years of experience in nurturing young minds.</p>
            </div>
            <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon">
                <Trophy size={40} />
              </div>
              <h3>Holistic Development</h3>
              <p>Focus on academics, sports, arts, and character building for overall growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section bg-beige">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>What Our Community Says</h2>
            <p>Hear from our students, parents, and alumni</p>
          </div>
          <div className="testimonials-container" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-card">
              <div className="quote-icon">
                <Quote size={30} />
              </div>
              <div className="testimonial-content">
                <p>"{testimonials[currentTestimonial].content}"</p>
                <div className="testimonial-rating">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <div className="testimonial-author">
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <span>{testimonials[currentTestimonial].role}</span>
                </div>
              </div>
            </div>
            <div className="testimonial-controls">
              <button onClick={prevTestimonial} className="testimonial-btn">
                <ChevronLeft size={20} />
              </button>
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
              <button onClick={nextTestimonial} className="testimonial-btn">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content text-center" data-aos="fade-up">
            <h2>Ready to Join Our School Family?</h2>
            <p>
              Take the first step towards your child's bright future. 
              Admissions are open for the academic year 2025-26.
            </p>
            <div className="cta-buttons">
              <Link to="/admissions" className="btn btn-primary">
                Apply Now
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Visit Campus
              </Link>
            </div>
          </div>
        </div>
      </section>      <style>{`
        .home-page {
          padding-top: 80px;
        }

        /* Enhanced Hero Section */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-primary);
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .hero-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .particle:nth-child(1) {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .particle:nth-child(2) {
          width: 120px;
          height: 120px;
          top: 60%;
          left: 80%;
          animation-delay: 2s;
        }

        .particle:nth-child(3) {
          width: 60px;
          height: 60px;
          top: 80%;
          left: 20%;
          animation-delay: 4s;
        }

        .particle:nth-child(4) {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 70%;
          animation-delay: 1s;
        }

        .particle:nth-child(5) {
          width: 40px;
          height: 40px;
          top: 70%;
          left: 60%;
          animation-delay: 3s;
        }

        .particle:nth-child(6) {
          width: 90px;
          height: 90px;
          top: 40%;
          left: 5%;
          animation-delay: 5s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-40px) rotate(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-20px) rotate(270deg);
            opacity: 1;
          }
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          color: white;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 var(--spacing-md);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.15);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-full);
          margin-bottom: var(--spacing-lg);
          font-weight: 500;
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
          }
          to {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
          }
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: var(--spacing-lg);
          line-height: 1.1;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .highlight {
          background: linear-gradient(45deg, var(--warm-beige), #f4d03f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.2);
          }
        }

        .hero-subtitle {
          font-size: 1.4rem;
          margin-bottom: var(--spacing-xl);
          opacity: 0.95;
          line-height: 1.6;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .hero-features {
          display: flex;
          justify-content: center;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
          flex-wrap: wrap;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-full);
          font-weight: 500;
          transition: all var(--transition-normal);
        }

        .feature-item:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .hero-cta {
          display: flex;
          gap: var(--spacing-lg);
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: var(--spacing-xl);
        }

        .hero-cta .btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          transition: all var(--transition-normal);
        }

        .hero-cta .btn-primary {
          background: rgba(229, 57, 53, 0.9);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(229, 57, 53, 0.3);
        }

        .hero-cta .btn-primary:hover {
          background: rgba(229, 57, 53, 1);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(229, 57, 53, 0.4);
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          opacity: 0.8;
          z-index: 3;
        }

        .scroll-animation {
          margin-bottom: 0.5rem;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .hero-scroll-indicator span {
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
          border-radius: 2px;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-xl);
          opacity: 0.95;
          line-height: 1.6;
        }

        .hero-cta {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-cta .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          opacity: 0.8;
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: white;
          margin-bottom: 0.5rem;
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        /* Stats Section */
        .stats-section {
          background: white;
          margin-top: -80px;
          position: relative;
          z-index: 3;
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }

        .stat-card {
          text-align: center;
          padding: var(--spacing-lg);
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: transform var(--transition-normal);
        }

        .stat-card:hover {
          transform: translateY(-5px);
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
        }

        .stat-label {
          color: var(--royal-blue);
          font-weight: 500;
          font-size: 1.1rem;
        }

        /* About Preview Section */
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-2xl);
          align-items: center;
        }

        .about-text h2 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-md);
        }

        .about-text p {
          margin-bottom: var(--spacing-md);
          color: #666;
          line-height: 1.7;
        }

        .about-image {
          display: flex;
          justify-content: center;
        }

        .image-placeholder {
          width: 100%;
          max-width: 400px;
          aspect-ratio: 4/3;
          background: linear-gradient(135deg, var(--light-blue), var(--royal-blue));
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .image-placeholder p {
          margin-top: var(--spacing-sm);
          font-weight: 500;
        }

        /* Features Section */
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }

        .feature-card {
          text-align: center;
          padding: var(--spacing-xl);
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all var(--transition-normal);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
          color: var(--primary-red);
          margin-bottom: var(--spacing-md);
        }

        .feature-card h3 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
        }

        .feature-card p {
          color: #666;
          line-height: 1.6;
        }

        /* Testimonials Section */
        .testimonials-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .testimonial-card {
          background: white;
          padding: var(--spacing-2xl);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          position: relative;
        }

        .quote-icon {
          color: var(--primary-red);
          margin-bottom: var(--spacing-md);
        }

        .testimonial-content p {
          font-size: 1.2rem;
          line-height: 1.6;
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-md);
          font-style: italic;
        }

        .testimonial-rating {
          color: #fbbf24;
          margin-bottom: var(--spacing-md);
          display: flex;
          justify-content: center;
          gap: 0.25rem;
        }

        .testimonial-author h4 {
          color: var(--dark-charcoal);
          margin-bottom: 0.25rem;
        }

        .testimonial-author span {
          color: var(--royal-blue);
          font-size: 0.9rem;
        }

        .testimonial-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-md);
          margin-top: var(--spacing-lg);
        }

        .testimonial-btn {
          background: var(--primary-red);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .testimonial-btn:hover {
          background: var(--primary-red-hover);
          transform: scale(1.1);
        }

        .testimonial-dots {
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .dot.active {
          background: var(--primary-red);
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, var(--dark-charcoal), #1a1a1a);
          color: white;
        }

        .cta-content h2 {
          color: white;
          margin-bottom: var(--spacing-md);
        }

        .cta-content p {
          font-size: 1.2rem;
          margin-bottom: var(--spacing-xl);
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-buttons .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
            text-align: center;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-md);
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .testimonial-card {
            padding: var(--spacing-lg);
          }

          .hero-cta,
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
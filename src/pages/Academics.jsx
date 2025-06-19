import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  BookOpen, 
  Microscope, 
  Calculator, 
  Globe, 
  Palette, 
  Music,
  Trophy,
  Users,
  Computer,
  FlaskConical,
  Library,
  Monitor,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Star,
  Award,
  Target
} from 'lucide-react';

const Academics = () => {
  const [expandedCurriculum, setExpandedCurriculum] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const achievements = [
    { icon: <Trophy size={20} />, text: "GSEB Excellence Award" },
    { icon: <Star size={20} />, text: "96% Board Pass Rate" },
    { icon: <Award size={20} />, text: "State Level Recognition" },
    { icon: <Target size={20} />, text: "100% College Placement" }
  ];

  const curriculumLevels = [
    {
      id: 'primary',
      title: 'Primary Education (Grades 1-5)',
      description: 'Foundation years focusing on basic literacy, numeracy, and life skills',
      subjects: [
        'Gujarati Language',
        'Hindi Language', 
        'English Language',
        'Mathematics',
        'Environmental Studies',
        'Art & Craft',
        'Physical Education',
        'Moral Education'
      ],
      highlights: [
        'Play-based learning approach',
        'Individual attention to each child',
        'Activity-based curriculum',
        'Regular parent-teacher interaction'
      ]
    },
    {
      id: 'secondary',
      title: 'Secondary Education (Grades 6-10)',
      description: 'Building strong academic foundation with diverse subject exposure',
      subjects: [
        'Gujarati Literature',
        'Hindi Literature',
        'English Literature',
        'Mathematics',
        'Science (Physics, Chemistry, Biology)',
        'Social Studies',
        'Computer Science',
        'Art Education',
        'Physical Education'
      ],
      highlights: [
        'GSEB curriculum aligned',
        'Practical laboratory sessions',
        'Project-based learning',
        'Career guidance programs',
        'Competitive exam preparation'
      ]
    },
    {
      id: 'higher',
      title: 'Higher Secondary (Grades 11-12)',
      description: 'Specialized streams preparation for higher education and careers',
      subjects: [
        'Science Stream: PCM/PCB',
        'Commerce Stream: Accounts, Economics, Business Studies',
        'Arts Stream: History, Geography, Psychology',
        'Gujarati/Hindi/English Literature',
        'Mathematics/Statistics',
        'Computer Applications'
      ],
      highlights: [
        'Stream-wise specialized teaching',
        'University entrance exam coaching',
        'Career counseling',
        'Industry exposure programs',
        'Research project opportunities'
      ]
    }
  ];

  const subjects = [
    {
      icon: <Calculator size={40} />,
      name: 'Mathematics',
      description: 'Building logical thinking and problem-solving skills',
      color: 'var(--primary-red)'
    },
    {
      icon: <Microscope size={40} />,
      name: 'Science',
      description: 'Exploring the wonders of Physics, Chemistry, and Biology',
      color: 'var(--royal-blue)'
    },
    {
      icon: <Globe size={40} />,
      name: 'Social Studies',
      description: 'Understanding society, history, and geography',
      color: 'var(--warm-beige)'
    },
    {
      icon: <BookOpen size={40} />,
      name: 'Languages',
      description: 'Mastering Gujarati, Hindi, and English communication',
      color: '#16a34a'
    },
    {
      icon: <Computer size={40} />,
      name: 'Computer Science',
      description: 'Digital literacy and programming fundamentals',
      color: '#7c3aed'
    },
    {
      icon: <Palette size={40} />,
      name: 'Arts & Craft',
      description: 'Nurturing creativity and artistic expression',
      color: '#e11d48'
    }
  ];

  const methodology = [
    {
      icon: <Users size={32} />,
      title: 'Interactive Learning',
      description: 'Student-centered approach with group discussions and collaborative projects'
    },
    {
      icon: <Monitor size={32} />,
      title: 'Digital Integration',
      description: 'Smart classrooms with multimedia content and online resources'
    },
    {
      icon: <FlaskConical size={32} />,
      title: 'Practical Application',
      description: 'Hands-on experiments and real-world problem solving'
    },
    {
      icon: <Trophy size={32} />,
      title: 'Assessment & Growth',
      description: 'Continuous evaluation with focus on individual progress'
    }
  ];

  const facilities = [
    {
      icon: <FlaskConical size={48} />,
      title: 'Science Laboratories',
      description: 'Well-equipped Physics, Chemistry, and Biology labs with modern instruments and safety measures.',
      features: ['Advanced microscopes', 'Chemical analysis equipment', 'Digital measurement tools', 'Safety protocols']
    },
    {
      icon: <Library size={48} />,
      title: 'Library & Reading Room',
      description: 'Extensive collection of books, journals, and digital resources for comprehensive learning.',
      features: ['10,000+ books collection', 'Digital library access', 'Silent reading zones', 'Research assistance']
    },
    {
      icon: <Monitor size={48} />,
      title: 'Smart Classrooms',
      description: 'Technology-enabled classrooms with interactive boards and multimedia learning systems.',
      features: ['Interactive whiteboards', 'Audio-visual systems', 'High-speed internet', 'Digital content library']
    },
    {
      icon: <Computer size={48} />,
      title: 'Computer Lab',
      description: 'Modern computer laboratory with latest software and programming tools.',
      features: ['40+ computers', 'Latest software', 'Programming environments', 'Internet connectivity']
    }
  ];

  const toggleCurriculum = (id) => {
    setExpandedCurriculum(expandedCurriculum === id ? null : id);
  };

  return (
    <div className="academics-page">      {/* Hero Section */}
      <section className="academics-hero">
        <div className="hero-background">
          <div className="hero-particles"></div>
        </div>
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <div className="hero-badge" data-aos="fade-down" data-aos-delay="200">
              <CheckCircle size={16} />
              <span>GSEB Affiliated</span>
            </div>
            <h1>Academic Excellence</h1>
            <p>Comprehensive curriculum designed to nurture intellectual growth and character development</p>
            <div className="hero-achievements" data-aos="fade-up" data-aos-delay="400">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  {achievement.icon}
                  <span>{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="curriculum-section section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Our Curriculum</h2>
            <p>Structured learning path from foundation to specialization</p>
          </div>
          <div className="curriculum-levels">
            {curriculumLevels.map((level, index) => (
              <div 
                key={level.id} 
                className="curriculum-card" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="curriculum-header" onClick={() => toggleCurriculum(level.id)}>
                  <div className="curriculum-info">
                    <h3>{level.title}</h3>
                    <p>{level.description}</p>
                  </div>
                  <button className="expand-btn">
                    {expandedCurriculum === level.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </button>
                </div>
                <div className={`curriculum-details ${expandedCurriculum === level.id ? 'expanded' : ''}`}>
                  <div className="curriculum-content">
                    <div className="subjects-section">
                      <h4>Subjects Offered</h4>
                      <ul className="subjects-list">
                        {level.subjects.map((subject) => (
                          <li key={subject}>{subject}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="highlights-section">
                      <h4>Key Highlights</h4>
                      <ul className="highlights-list">
                        {level.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Overview */}
      <section className="subjects-section section bg-light">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Subject Areas</h2>
            <p>Comprehensive education across diverse disciplines</p>
          </div>
          <div className="subjects-grid">
            {subjects.map((subject, index) => (
              <div 
                key={subject.name} 
                className="subject-card" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="subject-icon" style={{ color: subject.color }}>
                  {subject.icon}
                </div>
                <h3>{subject.name}</h3>
                <p>{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="methodology-section section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Teaching Methodology</h2>
            <p>Modern pedagogical approaches for effective learning</p>
          </div>
          <div className="methodology-grid">
            {methodology.map((method, index) => (
              <div 
                key={method.title} 
                className="method-card" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="method-icon">
                  {method.icon}
                </div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section section bg-beige">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Academic Facilities</h2>
            <p>State-of-the-art infrastructure supporting quality education</p>
          </div>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div 
                key={facility.title} 
                className="facility-card" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="facility-icon">
                  {facility.icon}
                </div>
                <div className="facility-content">
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                  <ul className="facility-features">
                    {facility.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`        .academics-page {
          padding-top: 80px;
        }

        /* Hero Section */
        .academics-hero {
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
            radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
          animation: float 25s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(0.5deg); }
          66% { transform: translateY(10px) rotate(-0.5deg); }
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
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-achievements {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--spacing-md);
          margin-top: var(--spacing-lg);
        }

        .achievement-item {
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

        .achievement-item:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        /* Curriculum Section */
        .curriculum-levels {
          max-width: 900px;
          margin: 0 auto;
        }

        .curriculum-card {
          background: white;
          border-radius: var(--radius-lg);
          margin-bottom: var(--spacing-lg);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: all var(--transition-normal);
        }

        .curriculum-card:hover {
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .curriculum-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-lg);
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .curriculum-header:hover {
          background: rgba(0, 0, 0, 0.02);
        }

        .curriculum-info h3 {
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }

        .curriculum-info p {
          color: #666;
          margin: 0;
        }

        .expand-btn {
          background: none;
          border: none;
          color: var(--primary-red);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .expand-btn:hover {
          background: rgba(229, 57, 53, 0.1);
        }

        .curriculum-details {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }

        .curriculum-details.expanded {
          max-height: 500px;
        }

        .curriculum-content {
          padding: 0 var(--spacing-lg) var(--spacing-lg);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          margin-top: var(--spacing-lg);
          padding-top: var(--spacing-lg);
        }

        .subjects-section h4,
        .highlights-section h4 {
          color: var(--royal-blue);
          margin-bottom: var(--spacing-sm);
          font-size: 1.1rem;
        }

        .subjects-list,
        .highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .subjects-list li,
        .highlights-list li {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          color: #666;
          position: relative;
          padding-left: 1.5rem;
        }

        .subjects-list li::before,
        .highlights-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary-red);
          font-weight: bold;
        }

        .subjects-list li:last-child,
        .highlights-list li:last-child {
          border-bottom: none;
        }

        /* Subjects Grid */
        .subjects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }

        .subject-card {
          background: white;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all var(--transition-normal);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .subject-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .subject-icon {
          margin-bottom: var(--spacing-md);
        }

        .subject-card h3 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
        }

        .subject-card p {
          color: #666;
          line-height: 1.6;
        }

        /* Methodology Grid */
        .methodology-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-xl);
        }

        .method-card {
          background: white;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all var(--transition-normal);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .method-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .method-icon {
          color: var(--primary-red);
          margin-bottom: var(--spacing-md);
        }

        .method-card h3 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
        }

        .method-card p {
          color: #666;
          line-height: 1.6;
        }

        /* Facilities Grid */
        .facilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: var(--spacing-xl);
        }

        .facility-card {
          background: white;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          display: flex;
          gap: var(--spacing-lg);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all var(--transition-normal);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .facility-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .facility-icon {
          color: var(--royal-blue);
          flex-shrink: 0;
        }

        .facility-content h3 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
        }

        .facility-content p {
          color: #666;
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
        }

        .facility-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .facility-features li {
          padding: 0.3rem 0;
          color: #666;
          position: relative;
          padding-left: 1.2rem;
          font-size: 0.9rem;
        }

        .facility-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-red);
          font-weight: bold;
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

          .hero-achievements {
            flex-direction: column;
            align-items: center;
            gap: var(--spacing-sm);
          }

          .achievement-item {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .curriculum-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .subjects-grid {
            grid-template-columns: 1fr;
          }

          .methodology-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-lg);
          }

          .facilities-grid {
            grid-template-columns: 1fr;
          }

          .facility-card {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .methodology-grid {
            grid-template-columns: 1fr;
          }

          .curriculum-card,
          .subject-card,
          .method-card,
          .facility-card {
            padding: var(--spacing-lg);
          }

          .curriculum-header {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--spacing-sm);
          }

          .expand-btn {
            align-self: flex-end;
          }
        }
      `}</style>
    </div>
  );
};

export default Academics;

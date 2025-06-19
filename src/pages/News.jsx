import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Calendar, 
  Clock, 
  Tag, 
  ArrowRight, 
  Download,
  MapPin,
  Users,
  Trophy,
  BookOpen,
  Megaphone,
  Bell,
  CheckCircle,
  Star,
  TrendingUp,
  Award
} from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const highlights = [
    { icon: <Star size={20} />, text: "Latest Updates" },
    { icon: <Trophy size={20} />, text: "Student Achievements" },
    { icon: <TrendingUp size={20} />, text: "School Events" },
    { icon: <Award size={20} />, text: "Awards & Recognition" }
  ];

  const categories = [
    { id: 'all', name: 'All News', icon: <Megaphone size={20} /> },
    { id: 'events', name: 'Events', icon: <Calendar size={20} /> },
    { id: 'achievements', name: 'Achievements', icon: <Trophy size={20} /> },
    { id: 'academics', name: 'Academic News', icon: <BookOpen size={20} /> },
    { id: 'announcements', name: 'Announcements', icon: <Bell size={20} /> },
    { id: 'admissions', name: 'Admissions', icon: <Users size={20} /> }
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Annual Science Fair 2025 - Call for Participation',
      excerpt: 'Calling all young scientists! Register for our Annual Science Fair and showcase your innovative projects.',
      content: `We are excited to announce the Annual Science Fair 2025, scheduled for March 15-16, 2025. This year's theme is "Science for Sustainable Future." Students from grades 6-12 are invited to participate and present their innovative science projects.

Key highlights:
• Theme: Science for Sustainable Future
• Categories: Physics, Chemistry, Biology, Environmental Science, and Technology
• Prize money worth ₹50,000
• Special recognition for innovative solutions
• Expert judges from renowned institutions

Registration is open until February 28, 2025. Don't miss this opportunity to showcase your scientific talents!`,
      category: 'events',
      date: '2025-01-15',
      author: 'Science Department',
      featured: true,
      image: 'https://via.placeholder.com/600x300/1e40af/ffffff?text=Science+Fair+2025',
      tags: ['Science Fair', 'Competition', 'Innovation']
    },
    {
      id: 2,
      title: 'Outstanding Results in Board Examinations 2024',
      excerpt: 'Our students have achieved remarkable success in the GSEB board examinations with 96% pass rate.',
      content: `We are proud to announce the outstanding performance of our students in the Gujarat Secondary and Higher Secondary Education Board (GSEB) examinations 2024.

Results Summary:
• Overall pass rate: 96%
• Students scoring above 90%: 45%
• State rank holders: 3 students
• Perfect scores in Mathematics: 12 students
• Perfect scores in Science: 8 students

Special congratulations to our state toppers:
- Priya Sharma (Grade 10) - State Rank 2 in Science
- Rahul Patel (Grade 12) - State Rank 5 in Commerce
- Neha Shah (Grade 12) - State Rank 8 in Arts

We are grateful to our dedicated teachers and supportive parents for this achievement.`,
      category: 'achievements',
      date: '2024-05-15',
      author: 'Academic Department',
      featured: true,
      image: 'https://via.placeholder.com/600x300/16a34a/ffffff?text=Board+Results+2024',
      tags: ['Board Results', 'Achievement', 'Excellence']
    },
    {
      id: 3,
      title: 'New Computer Laboratory Inauguration',
      excerpt: 'State-of-the-art computer laboratory with 40 high-performance computers inaugurated by District Collector.',
      content: `We are delighted to announce the inauguration of our new state-of-the-art computer laboratory, which was ceremonially opened by the District Collector, Mrs. Anjali Sharma, on January 10, 2025.

Facility Features:
• 40 high-performance computers with latest processors
• High-speed fiber internet connectivity
• Interactive smart board for demonstrations
• Air-conditioned environment
• Advanced software for programming and design
• Dedicated server for student projects

This new facility will enhance our students' digital literacy and prepare them for the technology-driven future. The laboratory is equipped with modern programming environments including Python, Java, and web development tools.

The District Collector praised our commitment to providing quality education and encouraged students to make the best use of these facilities.`,
      category: 'announcements',
      date: '2025-01-10',
      author: 'Infrastructure Team',
      featured: false,
      image: 'https://via.placeholder.com/600x300/7c3aed/ffffff?text=Computer+Lab',
      tags: ['Infrastructure', 'Technology', 'Education']
    },
    {
      id: 4,
      title: 'Inter-School Basketball Championship Winners',
      excerpt: 'Our basketball team brings home the trophy from the District Inter-School Basketball Championship.',
      content: `Congratulations to our school basketball team for their outstanding performance in the District Inter-School Basketball Championship held at Sports Complex, Mandavad from December 15-18, 2024.

Championship Highlights:
• Won all 6 matches in the tournament
• Defeated defending champions in the final
• Team captain Arjun Patel named "Player of the Tournament"
• Perfect team coordination and sportsmanship

Team Members:
- Arjun Patel (Captain) - Grade 11
- Rohan Shah - Grade 12
- Kiran Mehta - Grade 10
- Vivek Sharma - Grade 11
- Jay Patel - Grade 12
- Aditya Desai - Grade 10

Coach Mr. Rajesh Kumar's dedication and the team's hard work throughout the year led to this remarkable achievement. The team will now represent the district in the state-level championship.`,
      category: 'achievements',
      date: '2024-12-20',
      author: 'Sports Department',
      featured: false,
      image: 'https://via.placeholder.com/600x300/f59e0b/ffffff?text=Basketball+Champions',
      tags: ['Sports', 'Basketball', 'Championship', 'Victory']
    },
    {
      id: 5,
      title: 'Admission Process for Academic Year 2025-26',
      excerpt: 'Online and offline admission applications are now open for all grades. Limited seats available.',
      content: `Admissions are now open for the academic year 2025-26. We invite applications from students seeking quality education in a nurturing environment.

Important Information:
• Application deadline: March 31, 2025
• Entrance test for grades 9-12: April 15, 2025
• Document verification: April 20-25, 2025
• Fee payment deadline: May 15, 2025
• Academic session begins: June 1, 2025

Available Streams (Grades 11-12):
• Science (PCM/PCB)
• Commerce (with Computer Applications)
• Arts (with Psychology/Sociology)

Scholarship Programs:
• Merit-based scholarships for top performers
• Financial assistance for economically weaker sections
• Sports scholarships for outstanding athletes

For detailed information, visit our admission office or download the prospectus from our website.`,
      category: 'admissions',
      date: '2025-01-05',
      author: 'Admission Committee',
      featured: false,
      image: 'https://via.placeholder.com/600x300/e53935/ffffff?text=Admissions+Open',
      tags: ['Admissions', '2025-26', 'Application', 'Education']
    },
    {
      id: 6,
      title: 'Teacher Training Workshop on Digital Pedagogy',
      excerpt: 'Faculty members participated in a comprehensive workshop on modern teaching methodologies and digital tools.',
      content: `Our teaching faculty recently completed a comprehensive three-day workshop on Digital Pedagogy and Modern Teaching Methodologies conducted by educational experts from Ahmedabad University.

Workshop Highlights:
• Interactive teaching techniques
• Digital classroom management
• Student engagement strategies
• Assessment and evaluation methods
• Technology integration in curriculum
• Special needs education approaches

The workshop was attended by 35 faculty members and covered various aspects of modern education including:
- Blended learning approaches
- Multimedia content creation
- Online assessment tools
- Student-centered learning
- Project-based learning methodologies

This training will help our teachers deliver more effective and engaging lessons, ultimately benefiting our students' learning experience.`,
      category: 'academics',
      date: '2024-11-25',
      author: 'Faculty Development',
      featured: false,
      image: 'https://via.placeholder.com/600x300/8b5cf6/ffffff?text=Teacher+Training',
      tags: ['Teacher Training', 'Digital Education', 'Professional Development']
    }
  ];

  const upcomingEvents = [
    {
      title: 'Annual Sports Day',
      date: '2025-02-15',
      location: 'School Playground',
      time: '9:00 AM - 4:00 PM'
    },
    {
      title: 'Parent-Teacher Meeting',
      date: '2025-02-22',
      location: 'School Auditorium',
      time: '10:00 AM - 1:00 PM'
    },
    {
      title: 'Science Exhibition',
      date: '2025-03-15',
      location: 'Main Building',
      time: '10:00 AM - 5:00 PM'
    },
    {
      title: 'Cultural Program',
      date: '2025-04-20',
      location: 'School Auditorium',
      time: '6:00 PM - 9:00 PM'
    }
  ];

  const notices = [
    {
      title: 'Fee Payment Reminder',
      content: 'Quarter 4 fees due by January 31, 2025. Late fees applicable after due date.',
      date: '2025-01-15',
      urgent: true
    },
    {
      title: 'Winter Vacation Schedule',
      content: 'School will remain closed from December 24, 2024 to January 2, 2025.',
      date: '2024-12-20',
      urgent: false
    },
    {
      title: 'Mock Exam Timetable',
      content: 'Mock examinations for grades 10 and 12 from February 1-15, 2025.',
      date: '2025-01-10',
      urgent: false
    }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.filter(item => item.featured);
  const [selectedNews, setSelectedNews] = useState(null);

  const openNewsDetail = (news) => {
    setSelectedNews(news);
  };

  const closeNewsDetail = () => {
    setSelectedNews(null);
  };

  return (
    <div className="news-page">      {/* Hero Section */}
      <section className="news-hero">
        <div className="hero-background">
          <div className="hero-particles"></div>
        </div>
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <div className="hero-badge" data-aos="fade-down" data-aos-delay="200">
              <CheckCircle size={16} />
              <span>Latest Updates</span>
            </div>
            <h1>News & Events</h1>
            <p>Stay updated with the latest happenings at V.D. Patel Shaikshanik Sankul</p>
            <div className="hero-highlights" data-aos="fade-up" data-aos-delay="400">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  {highlight.icon}
                  <span>{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="featured-section section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Featured News</h2>
            <p>Latest highlights from our school</p>
          </div>
          <div className="featured-grid">
            {featuredNews.map((news, index) => (
              <div 
                key={news.id} 
                className="featured-card" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
                onClick={() => openNewsDetail(news)}
              >
                <div className="featured-image">
                  <img src={news.image} alt={news.title} />
                  <div className="featured-category">
                    <Tag size={16} />
                    <span>{news.category}</span>
                  </div>
                </div>
                <div className="featured-content">
                  <h3>{news.title}</h3>
                  <p>{news.excerpt}</p>
                  <div className="featured-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{new Date(news.date).toLocaleDateString('en-IN')}</span>
                    </div>
                    <div className="meta-item">
                      <Users size={16} />
                      <span>{news.author}</span>
                    </div>
                  </div>
                  <button className="read-more-btn">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter and News List */}
      <section className="news-section section bg-light">
        <div className="container">
          <div className="news-layout">
            {/* Main Content */}
            <div className="news-main">
              {/* Category Filter */}
              <div className="category-filter" data-aos="fade-up">
                <h3>Filter by Category</h3>
                <div className="filter-buttons">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.icon}
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* News List */}
              <div className="news-list">
                {filteredNews.map((news, index) => (
                  <div 
                    key={news.id} 
                    className="news-card" 
                    data-aos="fade-up" 
                    data-aos-delay={50 * (index + 1)}
                    onClick={() => openNewsDetail(news)}
                  >
                    <div className="news-image">
                      <img src={news.image} alt={news.title} />
                    </div>
                    <div className="news-content">
                      <div className="news-meta">
                        <span className="news-category">{news.category}</span>
                        <div className="news-date">
                          <Calendar size={14} />
                          <span>{new Date(news.date).toLocaleDateString('en-IN')}</span>
                        </div>
                      </div>
                      <h3>{news.title}</h3>
                      <p>{news.excerpt}</p>
                      <div className="news-tags">
                        {news.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                      <button className="read-more-link">
                        Read Full Article <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="news-sidebar">
              {/* Upcoming Events */}
              <div className="sidebar-widget" data-aos="fade-up">
                <h3>Upcoming Events</h3>
                <div className="events-list">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="event-item">
                      <div className="event-date">
                        <Calendar size={16} />
                        <span>{new Date(event.date).toLocaleDateString('en-IN')}</span>
                      </div>
                      <h4>{event.title}</h4>
                      <div className="event-details">
                        <div className="event-detail">
                          <MapPin size={14} />
                          <span>{event.location}</span>
                        </div>
                        <div className="event-detail">
                          <Clock size={14} />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Notices */}
              <div className="sidebar-widget" data-aos="fade-up" data-aos-delay="200">
                <h3>Important Notices</h3>
                <div className="notices-list">
                  {notices.map((notice, index) => (
                    <div key={index} className={`notice-item ${notice.urgent ? 'urgent' : ''}`}>
                      <div className="notice-header">
                        <h4>{notice.title}</h4>
                        {notice.urgent && <span className="urgent-badge">Urgent</span>}
                      </div>
                      <p>{notice.content}</p>
                      <div className="notice-date">
                        <Calendar size={12} />
                        <span>{new Date(notice.date).toLocaleDateString('en-IN')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Section */}
              <div className="sidebar-widget" data-aos="fade-up" data-aos-delay="300">
                <h3>Downloads</h3>
                <div className="downloads-list">
                  <a href="#" className="download-item">
                    <Download size={16} />
                    <span>School Calendar 2025</span>
                  </a>
                  <a href="#" className="download-item">
                    <Download size={16} />
                    <span>Fee Structure</span>
                  </a>
                  <a href="#" className="download-item">
                    <Download size={16} />
                    <span>Admission Forms</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Detail Modal */}
      {selectedNews && (
        <div className="news-modal-overlay" onClick={closeNewsDetail}>
          <div className="news-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeNewsDetail}>
              ×
            </button>
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedNews.image} alt={selectedNews.title} />
              </div>
              <div className="modal-body">
                <div className="modal-meta">
                  <span className="modal-category">{selectedNews.category}</span>
                  <div className="modal-date">
                    <Calendar size={16} />
                    <span>{new Date(selectedNews.date).toLocaleDateString('en-IN')}</span>
                  </div>
                  <div className="modal-author">
                    <Users size={16} />
                    <span>{selectedNews.author}</span>
                  </div>
                </div>
                <h1>{selectedNews.title}</h1>
                <div className="modal-content-text">
                  {selectedNews.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="modal-tags">
                  {selectedNews.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .news-page {
          padding-top: 80px;
        }        /* Hero Section */
        .news-hero {
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
            radial-gradient(circle at 35% 65%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 65% 35%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
          animation: float 24s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(15px) rotate(-1deg); }
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

        .hero-highlights {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--spacing-md);
          margin-top: var(--spacing-lg);
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

        /* Featured Section */
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: var(--spacing-xl);
        }

        .featured-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all var(--transition-normal);
          cursor: pointer;
        }

        .featured-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .featured-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .featured-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .featured-card:hover .featured-image img {
          transform: scale(1.05);
        }

        .featured-category {
          position: absolute;
          top: var(--spacing-md);
          left: var(--spacing-md);
          background: var(--primary-red);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .featured-content {
          padding: var(--spacing-lg);
        }

        .featured-content h3 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
          font-size: 1.3rem;
          line-height: 1.3;
        }

        .featured-content p {
          color: #666;
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
        }

        .featured-meta {
          display: flex;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--royal-blue);
          font-size: 0.9rem;
        }

        .read-more-btn {
          background: var(--royal-blue);
          color: white;
          border: none;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-md);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: background var(--transition-fast);
          font-weight: 500;
        }

        .read-more-btn:hover {
          background: var(--royal-blue-hover);
        }

        /* News Section Layout */
        .news-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-2xl);
        }

        /* Category Filter */
        .category-filter {
          margin-bottom: var(--spacing-xl);
        }

        .category-filter h3 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-md);
        }

        .filter-buttons {
          display: flex;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
        }

        .filter-btn {
          background: white;
          border: 2px solid transparent;
          color: var(--dark-charcoal);
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .filter-btn:hover {
          border-color: var(--primary-red);
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: var(--primary-red);
          color: white;
          border-color: var(--primary-red);
        }

        /* News List */
        .news-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .news-card {
          background: white;
          border-radius: var(--radius-lg);
          display: flex;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all var(--transition-normal);
          cursor: pointer;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .news-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .news-image {
          width: 200px;
          height: 150px;
          flex-shrink: 0;
          overflow: hidden;
        }

        .news-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .news-card:hover .news-image img {
          transform: scale(1.05);
        }

        .news-content {
          padding: var(--spacing-md);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
        }

        .news-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-sm);
        }

        .news-category {
          background: var(--warm-beige);
          color: var(--dark-charcoal);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        .news-date {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: #666;
          font-size: 0.8rem;
        }

        .news-content h3 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
          font-size: 1.1rem;
          line-height: 1.3;
        }

        .news-content p {
          color: #666;
          line-height: 1.5;
          margin-bottom: var(--spacing-sm);
          font-size: 0.95rem;
        }

        .news-tags {
          display: flex;
          gap: 0.5rem;
          margin-bottom: var(--spacing-sm);
          flex-wrap: wrap;
        }

        .tag {
          background: var(--light-blue);
          color: var(--royal-blue);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 500;
        }

        .read-more-link {
          background: none;
          border: none;
          color: var(--primary-red);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-weight: 500;
          font-size: 0.9rem;
          transition: color var(--transition-fast);
          align-self: flex-start;
        }

        .read-more-link:hover {
          color: var(--primary-red-hover);
        }

        /* Sidebar */
        .sidebar-widget {
          background: white;
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          margin-bottom: var(--spacing-lg);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .sidebar-widget h3 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-md);
          font-size: 1.2rem;
          border-bottom: 2px solid var(--primary-red);
          padding-bottom: 0.5rem;
        }

        /* Events List */
        .events-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .event-item {
          padding: var(--spacing-sm) 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .event-item:last-child {
          border-bottom: none;
        }

        .event-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-red);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .event-item h4 {
          color: var(--dark-charcoal);
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .event-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .event-detail {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #666;
          font-size: 0.8rem;
        }

        /* Notices List */
        .notices-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .notice-item {
          padding: var(--spacing-sm);
          border-left: 3px solid var(--royal-blue);
          background: rgba(30, 64, 175, 0.05);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        .notice-item.urgent {
          border-left-color: var(--primary-red);
          background: rgba(229, 57, 53, 0.05);
        }

        .notice-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .notice-item h4 {
          color: var(--dark-charcoal);
          font-size: 0.95rem;
          margin: 0;
        }

        .urgent-badge {
          background: var(--primary-red);
          color: white;
          padding: 0.1rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.7rem;
          font-weight: 500;
        }

        .notice-item p {
          color: #666;
          font-size: 0.85rem;
          line-height: 1.4;
          margin-bottom: 0.5rem;
        }

        .notice-date {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: #666;
          font-size: 0.75rem;
        }

        /* Downloads List */
        .downloads-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .download-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--royal-blue);
          text-decoration: none;
          padding: var(--spacing-sm);
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
          border: 1px solid rgba(30, 64, 175, 0.2);
        }

        .download-item:hover {
          background: rgba(30, 64, 175, 0.05);
          color: var(--royal-blue-hover);
        }

        /* News Modal */
        .news-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-lg);
          animation: fadeIn 0.3s ease-out;
        }

        .news-modal {
          background: white;
          border-radius: var(--radius-lg);
          max-width: 800px;
          max-height: 90vh;
          width: 100%;
          overflow-y: auto;
          position: relative;
          animation: slideIn 0.3s ease-out;
        }

        .modal-close {
          position: absolute;
          top: var(--spacing-md);
          right: var(--spacing-md);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          font-size: 1.5rem;
          transition: background var(--transition-fast);
        }

        .modal-close:hover {
          background: rgba(0, 0, 0, 0.9);
        }

        .modal-image {
          height: 300px;
          overflow: hidden;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-body {
          padding: var(--spacing-xl);
        }

        .modal-meta {
          display: flex;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
          flex-wrap: wrap;
        }

        .modal-category {
          background: var(--primary-red);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .modal-date,
        .modal-author {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--royal-blue);
          font-size: 0.9rem;
        }

        .modal-body h1 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-lg);
          line-height: 1.3;
        }

        .modal-content-text {
          color: #666;
          line-height: 1.7;
          margin-bottom: var(--spacing-lg);
        }

        .modal-content-text p {
          margin-bottom: var(--spacing-md);
        }

        .modal-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
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
          .news-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .featured-grid {
            grid-template-columns: 1fr;
          }

          .filter-buttons {
            justify-content: center;
          }

          .news-card {
            flex-direction: column;
          }

          .news-image {
            width: 100%;
            height: 200px;
          }

          .modal-body {
            padding: var(--spacing-md);
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .filter-btn span {
            display: none;
          }

          .featured-content,
          .news-content {
            padding: var(--spacing-md);
          }

          .news-modal {
            margin: var(--spacing-sm);
            max-height: 95vh;
          }

          .modal-image {
            height: 200px;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default News;

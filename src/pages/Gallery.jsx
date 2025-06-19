import React, { useState, useEffect } from 'react';
import { 
  Image, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar,
  Users,
  Trophy,
  BookOpen,
  Music,
  Palette,
  Building,
  Camera,
  Download,
  Share2,
  Heart,
  Eye,
  Filter,
  Search
} from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [filteredImages, setFilteredImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Photos', icon: <Image size={20} />, count: 0 },
    { id: 'events', name: 'School Events', icon: <Calendar size={20} />, count: 0 },
    { id: 'academics', name: 'Academic Activities', icon: <BookOpen size={20} />, count: 0 },
    { id: 'sports', name: 'Sports & Games', icon: <Trophy size={20} />, count: 0 },
    { id: 'cultural', name: 'Cultural Programs', icon: <Music size={20} />, count: 0 },
    { id: 'infrastructure', name: 'Infrastructure', icon: <Building size={20} />, count: 0 },
    { id: 'arts', name: 'Arts & Crafts', icon: <Palette size={20} />, count: 0 }
  ];

  const galleryImages = [
    {
      id: 1,
      title: 'Annual Day Celebration 2024',
      category: 'events',
      description: 'Students performing cultural dance during annual day celebration',
      date: '2024-02-15',
      thumbnail: 'https://via.placeholder.com/400x300/e53935/ffffff?text=Annual+Day',
      fullSize: 'https://via.placeholder.com/1200x800/e53935/ffffff?text=Annual+Day+Performance'
    },
    {
      id: 2,
      title: 'Science Laboratory',
      category: 'infrastructure',
      description: 'Well-equipped chemistry laboratory with modern instruments',
      date: '2024-01-20',
      thumbnail: 'https://via.placeholder.com/400x300/1e40af/ffffff?text=Science+Lab',
      fullSize: 'https://via.placeholder.com/1200x800/1e40af/ffffff?text=Chemistry+Laboratory'
    },
    {
      id: 3,
      title: 'Inter-School Sports Meet',
      category: 'sports',
      description: 'Students participating in athletic events',
      date: '2024-03-10',
      thumbnail: 'https://via.placeholder.com/400x300/16a34a/ffffff?text=Sports+Meet',
      fullSize: 'https://via.placeholder.com/1200x800/16a34a/ffffff?text=Athletic+Events'
    },
    {
      id: 4,
      title: 'Art Exhibition',
      category: 'arts',
      description: 'Student artwork displayed during art exhibition',
      date: '2024-01-25',
      thumbnail: 'https://via.placeholder.com/400x300/e11d48/ffffff?text=Art+Exhibition',
      fullSize: 'https://via.placeholder.com/1200x800/e11d48/ffffff?text=Student+Artwork'
    },
    {
      id: 5,
      title: 'Mathematics Olympiad',
      category: 'academics',
      description: 'Students solving problems during mathematics olympiad',
      date: '2024-02-05',
      thumbnail: 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=Math+Olympiad',
      fullSize: 'https://via.placeholder.com/1200x800/7c3aed/ffffff?text=Mathematics+Competition'
    },
    {
      id: 6,
      title: 'Music Concert',
      category: 'cultural',
      description: 'School choir performing at the annual music concert',
      date: '2024-03-20',
      thumbnail: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=Music+Concert',
      fullSize: 'https://via.placeholder.com/1200x800/ea580c/ffffff?text=Choir+Performance'
    },
    {
      id: 7,
      title: 'Computer Laboratory',
      category: 'infrastructure',
      description: 'Students learning programming in computer lab',
      date: '2024-01-15',
      thumbnail: 'https://via.placeholder.com/400x300/0891b2/ffffff?text=Computer+Lab',
      fullSize: 'https://via.placeholder.com/1200x800/0891b2/ffffff?text=Programming+Class'
    },
    {
      id: 8,
      title: 'Republic Day Celebration',
      category: 'events',
      description: 'Flag hoisting ceremony on Republic Day',
      date: '2024-01-26',
      thumbnail: 'https://via.placeholder.com/400x300/dc2626/ffffff?text=Republic+Day',
      fullSize: 'https://via.placeholder.com/1200x800/dc2626/ffffff?text=Flag+Ceremony'
    },
    {
      id: 9,
      title: 'Basketball Tournament',
      category: 'sports',
      description: 'Inter-house basketball championship match',
      date: '2024-02-28',
      thumbnail: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Basketball',
      fullSize: 'https://via.placeholder.com/1200x800/f59e0b/ffffff?text=Basketball+Match'
    },
    {
      id: 10,
      title: 'Science Fair',
      category: 'academics',
      description: 'Students presenting innovative science projects',
      date: '2024-03-15',
      thumbnail: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Science+Fair',
      fullSize: 'https://via.placeholder.com/1200x800/10b981/ffffff?text=Science+Projects'
    },
    {
      id: 11,
      title: 'Dance Performance',
      category: 'cultural',
      description: 'Traditional Gujarati folk dance performance',
      date: '2024-02-20',
      thumbnail: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Folk+Dance',
      fullSize: 'https://via.placeholder.com/1200x800/8b5cf6/ffffff?text=Traditional+Dance'
    },
    {
      id: 12,
      title: 'Library Reading Session',
      category: 'academics',
      description: 'Students enjoying reading time in the library',
      date: '2024-01-30',
      thumbnail: 'https://via.placeholder.com/400x300/6366f1/ffffff?text=Library',
      fullSize: 'https://via.placeholder.com/1200x800/6366f1/ffffff?text=Reading+Session'
    }  ];
  // Filter images based on category and search term
  useEffect(() => {
    let filtered = selectedCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);
    
    if (searchTerm) {
      filtered = filtered.filter(img => 
        img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredImages(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, searchTerm]);

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };
  const closeLightbox = React.useCallback(() => {
    setLightboxImage(null);
    setLightboxIndex(0);
  }, []);

  const nextImage = React.useCallback(() => {
    const nextIndex = (lightboxIndex + 1) % filteredImages.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(filteredImages[nextIndex]);
  }, [lightboxIndex, filteredImages]);

  const prevImage = React.useCallback(() => {
    const prevIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(prevIndex);
    setLightboxImage(filteredImages[prevIndex]);
  }, [lightboxIndex, filteredImages]);

  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    if (lightboxImage) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxImage, closeLightbox, nextImage, prevImage]);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1>School Gallery</h1>
            <p>Capturing memories and celebrating achievements from our vibrant school life</p>
          </div>
        </div>
      </section>      {/* Enhanced Filter Section */}
      <section className="filter-section section">
        <div className="container">
          {/* Search Bar */}
          <div className="search-controls" data-aos="fade-up">
            <div className="search-bar">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search photos by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="gallery-stats">
              <span>{filteredImages.length} photos found</span>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="filter-tabs" data-aos="fade-up" data-aos-delay="200">
            {categories.map((category) => {
              const categoryCount = category.id === 'all' 
                ? galleryImages.length 
                : galleryImages.filter(img => img.category === category.id).length;
              
              return (
                <button
                  key={category.id}
                  className={`filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="tab-count">({categoryCount})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section section">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-item" 
                data-aos="fade-up" 
                data-aos-delay={50 * (index % 8)}
                onClick={() => openLightbox(image, index)}
              >
                <div className="image-container">
                  <img 
                    src={image.thumbnail} 
                    alt={image.title}
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <div className="image-info">
                      <h3>{image.title}</h3>
                      <p>{image.description}</p>
                      <div className="image-meta">
                        <Calendar size={16} />
                        <span>{new Date(image.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                    </div>
                    <div className="view-button">
                      <Image size={24} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="no-images" data-aos="fade-up">
              <Image size={64} />
              <h3>No images found</h3>
              <p>No images available for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={24} />
            </button>
            
            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              <ChevronLeft size={32} />
            </button>
            
            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              <ChevronRight size={32} />
            </button>

            <div className="lightbox-content">
              <img 
                src={lightboxImage.fullSize} 
                alt={lightboxImage.title}
                className="lightbox-image"
              />
              <div className="lightbox-info">
                <h2>{lightboxImage.title}</h2>
                <p>{lightboxImage.description}</p>
                <div className="lightbox-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{new Date(lightboxImage.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="meta-item">
                    <span>{lightboxIndex + 1} of {filteredImages.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}      <style jsx>{`
        .gallery-page {
          padding-top: 80px;
        }

        /* Enhanced Hero Section */
        .gallery-hero {
          background: var(--gradient-primary);
          color: white;
          padding: var(--spacing-2xl) 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .gallery-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="%23ffffff08" points="0,1000 1000,700 1000,1000"/></svg>');
          background-size: cover;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: var(--spacing-sm);
          color: white;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          font-weight: 700;
        }

        .hero-content p {
          font-size: 1.4rem;
          opacity: 0.95;
          max-width: 600px;
          margin: 0 auto;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        /* Enhanced Search Controls */
        .search-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-xl);
          flex-wrap: wrap;
          gap: var(--spacing-md);
        }

        .search-bar {
          position: relative;
          flex: 1;
          max-width: 400px;
        }

        .search-bar svg {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
          z-index: 2;
        }

        .search-bar input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 2px solid #e5e5e5;
          border-radius: var(--radius-full);
          font-size: 1rem;
          transition: all var(--transition-normal);
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .search-bar input:focus {
          outline: none;
          border-color: var(--royal-blue);
          box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1), 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .gallery-stats {
          color: var(--dark-charcoal);
          font-weight: 500;
          background: var(--warm-beige);
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-full);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        }

        /* Filter Section */
        .filter-section {
          background: var(--light-gray);
          padding: var(--spacing-lg) 0;
        }        /* Enhanced Filter Tabs */
        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
        }

        .filter-tab {
          background: white;
          border: 2px solid rgba(0, 0, 0, 0.1);
          color: var(--dark-charcoal);
          padding: 1rem 1.5rem;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all var(--transition-normal);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
        }

        .filter-tab::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(229, 57, 53, 0.1), transparent);
          transition: left 0.5s;
        }

        .filter-tab:hover::before {
          left: 100%;
        }

        .filter-tab:hover {
          border-color: var(--primary-red);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(229, 57, 53, 0.2);
        }

        .filter-tab.active {
          background: var(--gradient-primary);
          color: white;
          border-color: transparent;
          box-shadow: 0 8px 25px rgba(229, 57, 53, 0.3);
        }

        .tab-count {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .filter-tab.active .tab-count {
          background: rgba(255, 255, 255, 0.3);
        }

        .filter-tab.active {
          background: var(--primary-red);
          color: white;
          border-color: var(--primary-red);
        }        /* Enhanced Gallery Grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: var(--spacing-xl);
          margin-top: var(--spacing-xl);
        }

        .gallery-item {
          cursor: pointer;
          border-radius: var(--radius-xl);
          overflow: hidden;
          transition: all var(--transition-normal);
          position: relative;
        }

        .gallery-item:hover {
          transform: translateY(-8px);
        }

        .image-container {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          border-radius: var(--radius-xl);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          transition: all var(--transition-normal);
        }

        .gallery-item:hover .image-container {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .gallery-item:hover .image-container img {
          transform: scale(1.08);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            transparent 40%,
            rgba(0, 0, 0, 0.7) 100%
          );
          opacity: 0;
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: var(--spacing-lg);
        }

        .gallery-item:hover .image-overlay {
          opacity: 1;
        }

        .image-info {
          align-self: flex-end;
          width: 100%;
        }

        .image-info h3 {
          color: white;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .image-info p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .image-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.85rem;
        }

        .view-button {
          align-self: flex-start;
          background: rgba(255, 255, 255, 0.2);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: var(--radius-full);
          padding: 0.75rem;
          color: white;
          transition: all var(--transition-fast);
        }

        .view-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: var(--spacing-md);
          opacity: 0;
          transition: opacity var(--transition-normal);
        }

        .gallery-item:hover .image-overlay {
          opacity: 1;
        }

        .image-info {
          align-self: flex-end;
          color: white;
        }

        .image-info h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: white;
        }

        .image-info p {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          opacity: 0.9;
        }

        .image-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .view-button {
          align-self: flex-start;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all var(--transition-fast);
        }

        .gallery-item:hover .view-button {
          background: var(--primary-red);
          transform: scale(1.1);
        }

        /* No Images State */
        .no-images {
          text-align: center;
          padding: var(--spacing-2xl) 0;
          color: #666;
        }

        .no-images svg {
          margin-bottom: var(--spacing-md);
          opacity: 0.5;
        }

        .no-images h3 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-sm);
        }

        /* Lightbox */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-lg);
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-container {
          position: relative;
          max-width: 95vw;
          max-height: 95vh;
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: scale(0.8);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }

        .lightbox-close {
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
          transition: background var(--transition-fast);
        }

        .lightbox-close:hover {
          background: rgba(0, 0, 0, 0.9);
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all var(--transition-fast);
        }

        .lightbox-nav:hover {
          background: rgba(0, 0, 0, 0.9);
          transform: translateY(-50%) scale(1.1);
        }

        .lightbox-prev {
          left: var(--spacing-md);
        }

        .lightbox-next {
          right: var(--spacing-md);
        }

        .lightbox-content {
          display: flex;
          height: 100%;
        }

        .lightbox-image {
          flex: 2;
          width: 100%;
          height: 70vh;
          object-fit: contain;
          background: #f0f0f0;
        }

        .lightbox-info {
          flex: 1;
          padding: var(--spacing-xl);
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 300px;
          max-width: 400px;
          background: white;
        }

        .lightbox-info h2 {
          color: var(--dark-charcoal);
          margin-bottom: var(--spacing-md);
          font-size: 1.5rem;
        }

        .lightbox-info p {
          color: #666;
          line-height: 1.6;
          margin-bottom: var(--spacing-lg);
        }

        .lightbox-meta {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--royal-blue);
          font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .filter-tabs {
            flex-direction: column;
            align-items: center;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .lightbox-container {
            flex-direction: column;
            max-width: 95vw;
            max-height: 95vh;
          }

          .lightbox-content {
            flex-direction: column;
          }

          .lightbox-image {
            height: 50vh;
          }

          .lightbox-info {
            min-width: unset;
            max-width: unset;
            padding: var(--spacing-md);
          }

          .lightbox-nav {
            width: 40px;
            height: 40px;
          }

          .lightbox-prev {
            left: var(--spacing-sm);
          }

          .lightbox-next {
            right: var(--spacing-sm);
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .filter-tab {
            padding: var(--spacing-sm);
            font-size: 0.9rem;
          }

          .filter-tab span {
            display: none;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .lightbox-overlay {
            padding: var(--spacing-sm);
          }

          .lightbox-image {
            height: 40vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;

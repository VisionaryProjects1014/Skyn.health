import React from 'react';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import blogImage1 from '../assets/blog-image-1.jpg';
import blogImage2 from '../assets/blog-image-2.jpg';
import blogImage3 from '../assets/blog-image-3.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Blog = () => {
  useScrollAnimation();
  
  const allArticles = [
    {
      id: 1,
      title: "The Future of AI in Dermatology",
      excerpt: "Exploring how artificial intelligence is revolutionizing skin health diagnosis and making dermatological care more accessible worldwide.",
      content: "Artificial intelligence is transforming the landscape of dermatology in unprecedented ways. At Skyn.health, we're pioneering the next generation of AI-driven skin health analysis that makes professional-grade dermatological insights accessible to everyone, anywhere in the world.",
      image: blogImage1,
      date: "March 15, 2024",
      author: "Dr. Sarah Chen",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Building Trust in Medical AI",
      excerpt: "How Skyn.health ensures transparency, accuracy, and ethical standards in AI-powered skin health analysis.",
      content: "Trust is the cornerstone of healthcare technology. Our commitment to transparency, rigorous validation, and ethical AI development ensures that healthcare providers and patients can rely on our diagnostic insights with confidence.",
      image: blogImage2,
      date: "March 10, 2024",
      author: "Prabhav Sanga",
      readTime: "7 min read",
      featured: true
    },
    {
      id: 3,
      title: "Computer Vision Meets Healthcare",
      excerpt: "The technical innovation behind Skyn.health's multimodal AI approach to skin condition analysis and diagnosis.",
      content: "Our cutting-edge computer vision technology combines advanced deep learning models with clinical expertise to deliver accurate, reliable skin health assessments that rival dermatologist-level analysis.",
      image: blogImage3,
      date: "March 5, 2024",
      author: "Jaskaran Singh",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 4,
      title: "Democratizing Dermatological Care",
      excerpt: "Breaking down barriers to skin health with accessible AI technology that brings expertise to underserved communities.",
      content: "Healthcare equity drives our mission. By making advanced dermatological analysis available through simple smartphone technology, we're breaking down geographical and economic barriers to quality skin care.",
      image: blogImage1,
      date: "February 28, 2024",
      author: "Dr. Sarah Chen",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 5,
      title: "Privacy-First Healthcare Innovation",
      excerpt: "How we protect patient data while advancing the frontiers of medical AI research and development.",
      content: "Privacy isn't an afterthought—it's built into the foundation of our technology. Learn how we ensure patient data protection while advancing the capabilities of medical AI.",
      image: blogImage2,
      date: "February 20, 2024",
      author: "Prabhav Sanga",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 6,
      title: "The Science Behind Skin Analysis",
      excerpt: "Deep dive into the algorithms and methodologies that power Skyn.health's diagnostic capabilities.",
      content: "Understanding the complex science behind our AI models, from neural network architectures to training methodologies that ensure clinical-grade accuracy.",
      image: blogImage3,
      date: "February 15, 2024",
      author: "Jaskaran Singh",
      readTime: "8 min read",
      featured: false
    }
  ];

  const featuredArticles = allArticles.filter(article => article.featured);
  const recentArticles = allArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-on-scroll">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <h1 className="hero-title text-foreground mb-6">
              Insights & Innovation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the latest developments in AI-powered dermatology, research insights, 
              and stories from our mission to democratize skin health care.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 fade-in-on-scroll">
            <h2 className="section-title text-foreground mb-4">Featured Articles</h2>
            <p className="text-muted-foreground">Our most impactful insights and breakthrough discoveries</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <article key={article.id} className="premium-card overflow-hidden group scale-in-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="blog-title text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{article.author}</span>
                    </div>
                    <button className="text-primary hover:text-accent transition-colors duration-200 font-medium">
                      Read Article
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 fade-in-on-scroll">
            <h2 className="section-title text-foreground mb-4">Recent Articles</h2>
            <p className="text-muted-foreground">Stay updated with our latest research and insights</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <article key={article.id} className="premium-card overflow-hidden group scale-in-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{article.author}</span>
                    <button className="text-primary hover:text-accent transition-colors duration-200 text-sm font-medium">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
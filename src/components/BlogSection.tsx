import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import blogImage1 from '../assets/blog-image-1.jpg';
import blogImage2 from '../assets/blog-image-2.jpg';
import blogImage3 from '../assets/blog-image-3.jpg';

const BlogSection = () => {
  const articles = [
    {
      title: "The Future of AI in Dermatology",
      excerpt: "Exploring how artificial intelligence is revolutionizing skin health diagnosis and making dermatological care more accessible worldwide.",
      image: blogImage1,
      date: "March 15, 2024",
      author: "Dr. Sarah Chen",
      readTime: "5 min read"
    },
    {
      title: "Building Trust in Medical AI",
      excerpt: "How Strata ensures transparency, accuracy, and ethical standards in AI-powered skin health analysis.",
      image: blogImage2,
      date: "March 10, 2024",
      author: "Prabhav Sanga",
      readTime: "7 min read"
    },
    {
      title: "Computer Vision Meets Healthcare",
      excerpt: "The technical innovation behind Strata's multimodal AI approach to skin condition analysis and diagnosis.",
      image: blogImage3,
      date: "March 5, 2024",
      author: "Jaskaran Singh",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From Lab to Life: How Strata Is Redefining Skin Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, research, and stories from our journey to democratize 
            dermatological care through AI innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="floating-card overflow-hidden group">
              {/* Featured Image */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {article.readTime}
                  </span>
                  <button className="flex items-center space-x-1 text-primary hover:text-accent transition-colors duration-200 group">
                    <span className="font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary text-lg px-8 py-3">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
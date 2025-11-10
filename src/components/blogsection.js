import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";

const blogsection = () => {
  const featuredPosts = blogPosts.slice(0, 5);

  const getSubtitle = (post) => {
    if (post.preview) {
      const trimmed = post.preview.trim();
      if (trimmed.length <= 120) {
        return trimmed;
      }
      return `${trimmed.slice(0, 117)}...`;
    }

    const parts = [post.categoryLabel || post.category, post.readingTime];
    return parts.filter(Boolean).join(" • ") || "Read more";
  };

  return (
    <>
    <div className="blog-post-section">
      <div className="blog-post-header">
        <h2>Our Blog</h2>
      </div>
     <div className="blog-post-div">
      <div className="blog-post-items-div">
        {featuredPosts.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            className="blog-post-item"
            key={post.slug}
          >
            <img
              src={post.heroImage}
              alt={post.title}
              className="blog-post-image"
            />
            <div className="blog-post-caption">
              <p className="blog-post-heading">{post.title}</p>
              {/* <p className="blog-post-text">{getSubtitle(post)}</p> */}
            </div>
          </Link>
        ))}
      </div>
     </div>
    </div>

    <style jsx>{`
      .blog-post-section {
        width: 100%;
        padding: 80px 20px 100px;
        color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
      }

      .blog-post-header {
        width: 100%;
        max-width: 1440px;
      }

      .blog-post-header h2 {
        font-size: clamp(32px, 6vw, 70px);
        font-weight: bold;
        color: #000;
        margin: 0;
        text-transform: uppercase;
        text-align: left;
      }

      .blog-post-div {
        width: 100%;
        max-width: 1440px;
        overflow-x: auto;
        padding-bottom: 16px;
        scrollbar-color: #000 #f0f0f0;
        scrollbar-width: thin;
      }

      .blog-post-div::-webkit-scrollbar {
        height: 8px;
      }

      .blog-post-div::-webkit-scrollbar-thumb {
        background-color: #000;
        border-radius: 20px;
      }

      .blog-post-div::-webkit-scrollbar-track {
        background-color: #f0f0f0;
        border-radius: 20px;
      }

      .blog-post-items-div {
        display: flex;
        gap: 28px;
        width: max-content;
      }

      .blog-post-item {
        display: flex;
        flex-direction: column;
        width: clamp(220px, 60vw, 320px);
        border-radius: 20px;
        flex: 0 0 auto;
      }

      .blog-post-image {
        width: 100%;
        border-radius: 20px;
        border: 2px solid #000;
        box-shadow: 5px 5px 0px 0px #000;
        height: 250px;
      }

      .blog-post-caption {
        padding: 16px 0;
      }

      .blog-post-heading {
        margin-bottom: 4px;
        font-size: 20px;
        font-weight: bold;
        color: #000;
        text-transform: uppercase;
      }

      .blog-post-text {
        font-size: 16px;
        font-weight: 500;
        color: #949494;
        text-transform: uppercase;
      }

      @media (max-width: 768px) {
        .blog-post-section {
          padding: 60px 16px 80px;
          gap: 24px;
        }

        .blog-post-header h2 {
          text-align: center;
        
        }

        .blog-post-caption {
          text-align: center;
          
        }
        .blog-post-heading {
          font-size: 16px;
        }

        .blog-post-div {
          padding: 0 0 8px;
        }
        .blog-post-image {
        width: 100%;
        border-radius: 20px;
        border: 2px solid #000;
        box-shadow: 5px 5px 0px 0px #000;
        height: 200px;
      }
      }

      @media (min-width: 1024px) {
        .blog-post-section {
          gap: 48px;
        }

        .blog-post-items-div {
          gap: 40px;
        }

        .blog-post-item {
          width: clamp(320px, 22vw, 420px);
        }
        
      }

      @media (min-width: 1440px) {
        .blog-post-header,
        .blog-post-div {
          max-width: 1680px;
        }
      }
    `}</style>
    </>
  );
};

export default blogsection;

import React from "react";
import blogimg1 from "../assets/blogimg1.png";
import blogimg2 from "../assets/blogimg2.png";
import blogimg3 from "../assets/blogimg3.png";
import blogimg4 from "../assets/blogimg4.png";
import blogimg5 from "../assets/blogimg5.png";

const blogsection = () => {
  return (
    <>
    <div className="blog-post-section">
      <div className="blog-post-header">
        <h2>Our Blog</h2>
      </div>
     <div className="blog-post-div">
     
      <div className="blog-post-items-div">
        
        <div className="blog-post-item">
          <img src={blogimg1} alt="Blog 1" className="blog-post-image" />
          <div className="blog-post-caption">
            <p className="blog-post-heading">Lorem Ipsum</p>
            <p className="blog-post-text">Lorem Ipsum</p>
          </div>
          
        </div>
        
        <div className="blog-post-item">
          <img src={blogimg2} alt="Blog 2" className="blog-post-image" />
          <div className="blog-post-caption">
            <p className="blog-post-heading">Lorem Ipsum</p>
            <p className="blog-post-text">Lorem Ipsum</p>
          </div>

        </div>
        
        <div className="blog-post-item">
          <img src={blogimg3} alt="Blog 3" className="blog-post-image" />
          <div className="blog-post-caption">
            <p className="blog-post-heading">Lorem Ipsum</p>
            <p className="blog-post-text">Lorem Ipsum</p>
          </div>
        </div>
        
        <div className="blog-post-item">
          <img src={blogimg4} alt="Blog 4" className="blog-post-image" />
          <div className="blog-post-caption">
            <p className="blog-post-heading">Lorem Ipsum</p>
            <p className="blog-post-text">Lorem Ipsum</p>
          </div>
        </div>
        
        <div className="blog-post-item">
          <img src={blogimg5} alt="Blog 5" className="blog-post-image" />
          <div className="blog-post-caption">
            <p className="blog-post-heading">Lorem Ipsum</p>
            <p className="blog-post-text">Lorem Ipsum</p>
          </div>
        </div>

        <div className="blog-post-item">
          <img src={blogimg5} alt="Blog 5" className="blog-post-image" />
          <div className="blog-post-caption">
            <p className="blog-post-heading">Lorem Ipsum</p>
            <p className="blog-post-text">Lorem Ipsum</p>
          </div>
        </div>
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
        max-width: 1200px;
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
        max-width: 1200px;
        overflow-x: auto;
        padding-bottom: 12px;
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
        gap: 24px;
        width: max-content;
      }

      .blog-post-item {
        display: flex;
        flex-direction: column;
        width: clamp(240px, 28vw, 320px);
        border-radius: 20px;
        flex: 0 0 auto;
      }

      .blog-post-image {
        width: 100%;
        border-radius: 20px;
        border: 2px solid #000;
        box-shadow: 5px 5px 0px 0px #000;
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

        .blog-post-div {
          padding: 0 0 8px;
        }
      }
    `}</style>
    </>
  );
};

export default blogsection;

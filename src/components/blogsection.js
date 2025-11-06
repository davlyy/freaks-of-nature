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
  padding: 100px 100px;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0px;
  overflow-x: hidden;
  
}

.blog-post-div {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: auto;
  scrollbar-color: black #f0f0f0; 
  scrollbar-width: thin;
  margin-left: 300px;
  margin-right: 300px;
}
.blog-post-div::-webkit-scrollbar {
  height: 10px; 
}

.blog-post-div::-webkit-scrollbar-thumb {
  background-color: black; 
  border-radius: 20px; 
}

.blog-post-div::-webkit-scrollbar-track {
  background-color: #f0f0f0; 
  border-radius: 20px; 
}

.blog-post-div::-webkit-scrollbar-button {
  display: none; 
}

.blog-post-div::-webkit-scrollbar-thumb:hover {
  background-color: #444; 
}

@supports (-ms-overflow-style: none) {
  .blog-post-div {
    -ms-overflow-style: scrollbar; 
  }
}
.blog-post-header {
   width: 1620px;
  }
.blog-post-header h2 {
  font-size: 70px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
  text-transform: uppercase;
  
}

.blog-post-items-div {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
  
}

.blog-post-item {
  width: 351px; 
}


.blog-post-image {
  width: 100%;
  border-radius: 20px;
    border: 2px solid #000;
    box-shadow: 5px 5px 0px 0px #000;
}

.blog-post-caption {
  padding: 20px 20px;
}

.blog-post-heading{
  margin-bottom: 0px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
}
  .blog-post-text {
  font-size: 20px;
  font-weight: 500;
  color: #949494;
  text-transform: uppercase;
}

@media (max-width: 1500px) {
  .blog-post-header {
    width: 80%;
}
}

  @media (max-width: 1080px) {
    .blog-post-div {
      width: 100%;
      padding-left: 0px;
      margin-left: 178px;
    }

    .blog-post-section {
      padding: 0px 0px 100px;
    }
  }

  @media (max-width: 468px) {

    .blog-post-div {
      padding-left: 40px;
      margin-left: 0px;
    }

    .blog-post-header h2 {
      font-size: 32px;
    }
      .blog-post-item {
  flex: 0 0 auto;
  width: 251px;
}
  }

    `}</style>
    </>
  );
};

export default blogsection;

import React from "react";
import {Link} from "react-router-dom";
import icon from "../assets/arrow.svg";
import blogimg1 from "../assets/featuredimg.png";
import blogimg2 from "../assets/categoryimg1.png";
import blogimg3 from "../assets/categoryimg2.png";
import Blogsection from '../components/blogsection.js';



function Blog() {
    return <>
        <div className="blog-section">
            <div className="blog-container">
                <div className="blog-header">
                    <h1>Featured Posts</h1>
                    <button >More <img src={icon} alt="Freaks of Nature" className="img-fluid arrow" /></button>
                </div>

                <div className="featured-items-container">
                    <Link className="featured-item" to="/blogpost">
                        <img src={blogimg1} alt="Blog 1" className="blog-image" />
                        <div className="blog-box">
                            <div className="blog-div">
                                <p className="blog-title">Post Title</p>
                                <p className="blog-category">Categories</p>
                            </div>
                            <div className="blog-div1">
                                <p className="blog-author">Author</p>
                                <p className="blog-time">a min ago</p>
                            </div>
                            <div className="blog-text">
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                            </div>
                        </div>
                    </Link>

                    <Link className="featured-item" to="/blogpost">
                        <img src={blogimg1} alt="Blog 1" className="blog-image" />
                        <div className="blog-box">
                            <div className="blog-div">
                                <p className="blog-title">Post Title</p>
                                <p className="blog-category">Categories</p>
                            </div>
                            <div className="blog-div1">
                                <p className="blog-author">Author</p>
                                <p className="blog-time">a min ago</p>
                            </div>
                            <div className="blog-text">
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="blog-container">
                <div className="blog-header">
                    <h1>Category</h1>
                    <button >More <img src={icon} alt="Freaks of Nature" className="img-fluid arrow" /></button>
                </div>

                <div className="category-items-container">
                    <Link className="category-item" to="/blogpost"> 
                        <img src={blogimg2} alt="Blog 1" className="blog-image" />
                        <div className="blog-box">
                            <div className="blog-div">
                                <p className="blog-title">Post Title</p>
                                <p className="blog-category">Categories</p>
                            </div>
                            <div className="blog-div1">
                                <p className="blog-author">Author</p>
                                <p className="blog-time">a min ago</p>
                            </div>
                            <div className="blog-text">
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                            </div>
                        </div>
                    </Link>

                    <div className="category-item1-responsive">
                    <Link className="category-item" to="/blogpost"> 
                        <img src={blogimg2} alt="Blog 1" className="blog-image" />
                        <div className="blog-box">
                            <div className="blog-div">
                                <p className="blog-title">Post Title</p>
                                <p className="blog-category">Categories</p>
                            </div>
                            <div className="blog-div1">
                                <p className="blog-author">Author</p>
                                <p className="blog-time">a min ago</p>
                            </div>
                            <div className="blog-text">
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="category-item" to="/blogpost"> 
                        <img src={blogimg2} alt="Blog 1" className="blog-image" />
                        <div className="blog-box">
                            <div className="blog-div">
                                <p className="blog-title">Post Title</p>
                                <p className="blog-category">Categories</p>
                            </div>
                            <div className="blog-div1">
                                <p className="blog-author">Author</p>
                                <p className="blog-time">a min ago</p>
                            </div>
                            <div className="blog-text">
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                            </div>
                        </div>
                    </Link>
                    </div>

                    <div className="category-item2">
                        <Link className="category-box" to="/blogpost">
                          <img src={blogimg3} alt="Blog 1" className="blog-image" />
                          <div className="blog-box1">
                             <div className="blog-div">
                                 <p className="blog-title">Post Title</p>
                                 <p className="blog-category">Categories</p>
                             </div>
                             <div className="blog-div1">
                                 <p className="blog-author">Author</p>
                                 <p className="blog-time">a min ago</p>
                             </div>
                             <div className="blog-text">
                                 <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                             </div>
                          </div>
                        </Link>

                        <Link className="category-box" to="/blogpost">
                          <img src={blogimg3} alt="Blog 1" className="blog-image" />
                          <div className="blog-box1">
                             <div className="blog-div">
                                 <p className="blog-title">Post Title</p>
                                 <p className="blog-category">Categories</p>
                             </div>
                             <div className="blog-div1">
                                 <p className="blog-author">Author</p>
                                 <p className="blog-time">a min ago</p>
                             </div>
                             <div className="blog-text">
                                 <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                             </div>
                          </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div> 

        <Blogsection />


        <style jsx>{`
            .blog-section {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .blog-container {
            width: 1620px;
            display: flex;
            flex-direction: column;
            gap: 26px;
            padding: 150px 0px;
        }
        .blog-header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .blog-header h1 {
            font-size: 48px;
            font-weight: bold;
            color: #000;
            text-transform: uppercase;
        }
        .blog-header button {
            font-size: 36px;
            text-transform: uppercase;
            padding: 10px 20px;
            background-color: #FFBF00;
            color: #000;
            border: 1px solid #000;
            border-radius: 17px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: bold;
            width: 269px;
            height: 85px;
            box-shadow: 10px 10px 0px 0px #000;
        }
        .featured-items-container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
        }
        .featured-item {
            width: 790px;
            height: 702px;
            display: flex;
            flex-direction: column;
            background-color: #FFF;
            box-shadow: 10px 10px 0px 0px #000;
            border: 2px solid #000;
            border-radius: 30px;
            text-decoration: none;
        }
            .blog-box {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding:40px 30px;
                gap: 10px;
            }
            .blog-div {
                display: flex;
                justify-content: space-between;
                gap: 20px;
            }
            .blog-div1 {
                display: flex;
                gap: 15px;
                margin-bottom: 10px;
                
            }
            .blog-title {
                font-size: 24px;
                font-weight: bold;
                color: #000;
                 margin-bottom: 0px;
            }
            .blog-category {
                font-size: 18px;
                color: #ED196F;
                 margin-bottom: 0px;
            }
            .blog-author {
                font-size: 14px;
                color: #ED196F;
                 margin-bottom: 0px;
            }
            .blog-time {
                font-size: 14px;
                color: #00000085;
                 margin-bottom: 0px;
            }
            .blog-text {
                font-size: 20px;
                color: #000000cc;
                width: 622px;
            }

        .category-items-container {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
        .category-item {
            width: 953px;
            height: 840px;
            display: flex;
            flex-direction: column;
            background-color: #FFF;
            box-shadow: 10px 10px 0px 0px #000;
            border: 2px solid #000;
            border-radius: 30px;
            text-decoration: none;
        }
        .category-item2 {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }   
        .category-box {
            width: 648px;
            height: 410px;
            display: flex;
            flex-direction: column;
            background-color: #FFF;
            box-shadow: 10px 10px 0px 0px #000;
            border: 2px solid #000;
            border-radius: 30px;
            text-decoration: none;
        }

        .blog-box1 {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding:30px 30px;
                gap: 5px;
            }
          .blog-box1 .blog-div {
                display: flex;
                justify-content: space-between;
                gap: 0px;
            }
           .blog-box1 .blog-div1 {
                display: flex;
                gap: 10px;
                margin-bottom: 0px;
                
            }
          .blog-box1 .blog-title {
                font-size: 20px;
                font-weight: bold;
                color: #000;
                 margin-bottom: 0px;
            }
           
           .blog-box1 .blog-text {
                font-size: 18px;
                color: #000000cc;
                width: 520px;
            }

            .category-item1-responsive{
              display: none;
            }


            @media (max-width: 1500px) {

                .blog-container {
                    width: 100%;
                    padding: 100px 50px;
                    
                }
                .featured-item {
                   width: 660px;
                   height: 630px;
                }
                .blog-text {
                    width: 520px;
                }
                .blog-box1 .blog-text {
                    width: 510px;
                }
                .category-item {
                  width: 760px;
                  height: 740px;
                }
                .category-box {
                   width: 552px;
                   height: 360px;
                }
                   .blog-box1 {
                       padding:20px 20px;
                   }


            }


            @media (max-width: 1024px) {

              .featured-items-container {
                 flex-direction: column;
                }
               .featured-item {
                  width: 100%;
                   height: auto;
                }
                   .category-items-container {
                       flex-direction: column;
                       gap: 20px;
                    }
                    .category-item2 {
                        gap: 20px;
                    }   
                    .category-item {
                       width: 100%;
                       height: auto;
                    }
                    .category-box {
                       display: none;
                    }
                    
              

                  .category-item1-responsive{
                  display: flex;
                  flex-direction: column;
                  gap: 20px;
                }       
            }       
        
            @media (max-width: 500px) {
                
            .blog-container {
                padding: 30px 20px;
                gap: 10px;
            }

            .blog-header {
                align-items: flex-start;
            }
            .blog-header h1{
                font-size: 24px;
                line-height: 24px;
                width: 139px;
            }

            .blog-header button {
                font-size: 16px;
                font-weight: bold;
                width: 127px;
                height: 45px;
                box-shadow: 5px 5px 0px 0px #000;
                border: 2px solid #000;
            }
                .category-items-container {
                margin-top: 10px;
                }
            .featured-item {
              border-radius: 15px;
               box-shadow: 5px 5px 0px 0px #000;
            }

            .category-item {
                border-radius: 15px;
                box-shadow: 5px 5px 0px 0px #000;
            }
             
            .category-box {
                border-radius: 15px;
            }

            .arrow {
                width: 20px;
                height: 20px;
            }
    
           .blog-box {
             padding: 20px 20px;
           }

           .blog-title {
                font-size: 18px;
           }
                
           .blog-category  {
                font-size: 12px;
           }
           .blog-author .blog-date{
               font-size: 12px;
           }

           .blog-date{
               font-size: 12px;
           }

           .blog-text {
               font-size: 12px;
               width: 97%;
           }


        `}</style>
    </>;
}

export default Blog;
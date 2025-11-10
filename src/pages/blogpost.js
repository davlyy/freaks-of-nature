import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import share from "../assets/share.svg";
import Blogsection from "../components/blogsection";
import Comment from "../components/comment";
import { blogPostsBySlug } from "../data/blogPosts";

const Blogpost = () => {
  const { slug } = useParams();
  const post = blogPostsBySlug[slug];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <div className="blogpost-section">
        <div className="blogpost-div">
          <div className="blogpost-post-container">
            <div className="post-div1">
              <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Link to="/" className="breadcrumb-link">
                  Home
                </Link>
                <span> / </span>
                <Link to="/blog" className="breadcrumb-link">
                  Blog
                </Link>
                <span className="current-page"> / {post.title}</span>
              </p>
            </div>
            <div className="post-div2">
              <h1>{post.title}</h1>
            </div>
            <div className="post-div3">
              <p>{post.author}</p>
              <div className="vl" />
              <p>{post.category}</p>
              <div className="vl" />
              <span style={{ color: "#00000080" }}>{post.publishedDate}</span>
              {post.readingTime ? (
                <>
                  <div className="vl" />
                  <span style={{ color: "#00000080" }}>{post.readingTime}</span>
                </>
              ) : null}
            </div>
            <div className="post-div4">
              <div className="post-content">
                <div className="post-image ">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="post-image img-fluid"
                  />
                </div>
                <div className="post-text">
                  {post.introduction?.map((paragraph) => (
                    <p key={`${post.slug}-intro-${paragraph.length}`}>
                      {paragraph}
                    </p>
                  ))}

                  {post.sections.map((section) => (
                    <div key={section.id} className="post-section">
                      <h2 id={section.id}>{section.title}</h2>
                      {section.body?.map((paragraph, index) => (
                        <p key={`${section.id}-body-${index}`}>{paragraph}</p>
                      ))}
                      {section.list ? (
                        <ul className="section-list">
                          {section.list.map((item) => (
                            <li key={`${section.id}-${item.title}`}>
                              <strong>{item.title}:</strong> {item.description}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {section.footer?.map((paragraph, index) => (
                        <p key={`${section.id}-footer-${index}`}>{paragraph}</p>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="post-tags-div">
                  <div className="post-tags">
                    {post.tags?.map((tag) => (
                      <p key={tag}>{tag}</p>
                    ))}
                  </div>
                  {/* <div className="post-tags">
                                    <button>
                                        <img src={share} alt="share" className="share-icon" />
                                    </button>
                                  </div> */}
                </div>
              </div>

              <div className="vl1" />

              <div className="blogpost-sidebar">
                <div className="blogpost-sidebar-div">
                  <h3>Table of Contents</h3>
                  <ul style={{ marginTop: "30px" }}>
                    {post.sections.map((section) => (
                      <li key={`toc-${section.id}`}>
                        <a href={`#${section.id}`} className="toc-link">
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Blogsection />

      {/* <Comment/> */}

      <style jsx>{`
                .blogpost-section {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .blogpost-div {
                    width: 1620px;
                    padding: 100px 0 0;
                }
                .blogpost-post-container {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .post-div1,
                .post-div1 a {
                    display: flex;
                    opacity: 0.5;
                    font-size: 18px;
                    color: #ED196F;
                    font-weight: 500;
                    
                }
                .post-div1 a {
                    text-decoration: none;
                }
                .post-div1 .current-page {
                    color: black;
                    font-weight: bold;
                }
                .current-page {
                    color: black;
                    font-weight: bold;
                }
                .post-div2 h1 {
                    font-size: 48px;
                    font-weight: bold;
                    color: #000;
                    margin: 0;
                }
                .post-div3 {
                    display: flex;
                    align-items: center;
                    gap: 0px;
                    font-size: 18px;
                    color: #ED196F;
                }
                .post-div3 p {
                    margin: 0;
                }
                .vl {
                    border-left: 1px solid #000;
                    height: 20px;
                    margin: 0 10px;
                }
                
                .post-div4 {
                    margin: 30px 0;
                    display: flex;
                    justify-content: space-between;
                }
                
                .post-content {
                    width: 1105px;
                }
                    .vl1 {
                        border-left: 1px solid #D6D6D6;
                    height: 250px;
                    margin: 0 10px;
                    }
                .post-text p{
                    font-size: 20px;
                    font-weight: normal;
                    color: #000;
                    line-height: 24px;
                    margin: 70px 0 0 20px;
                }    
                .post-text p:first-of-type {
                    margin-top: 40px;
                }
                .post-section p {
                    margin: 20px 0 0 20px;
                }
                .post-section h2 {
                    font-size: 32px;
                    font-weight: bold;
                    color: #000;
                    margin: 70px 0 0 20px;
                    line-height: 38px;
                }
                .post-section .section-list {
                    margin: 30px 0 0 40px;
                    padding: 0;
                    list-style-type: disc;
                    color: #000;
                    font-size: 20px;
                    line-height: 28px;
                }
                .post-section .section-list li {
                    margin-bottom: 12px;
                }
                .post-section .section-list strong {
                    color: #ED196F;
                }
                
                .blogpost-sidebar-div h3 {
                    font-size: 32px;
                    font-weight: bold;
                    color: #000;
                }
                .blogpost-sidebar-div ul {
                    margin: 0;
                    padding: 0;
                    list-style-type: none;
                }
                .blogpost-sidebar-div li,
                .blogpost-sidebar-div a {
                    margin: 14px 0;
                    font-size: 18px;
                    font-weight: normal;
                    color: #ED196F;
                }
                .toc-link {
                    text-decoration: none;
                    color: inherit;
                }
                .toc-link:hover {
                    text-decoration: underline;
                }

                .post-tags-div {
                    margin: 100px 0 0;
                    padding: 40px 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-top: 2px solid #D6D6D6;
                }

                .post-tags {
                    display: flex;
                    gap: 16px;
                }
                    .post-tags p {
                        font-size: 20px;
                        font-weight: normal;
                        color: #00000080;
                        padding: 5px 18px;
                        border-radius: 50px;
                        background-color:#C4C4C480;
                        margin: 0;
                    }

                .post-tags button {
                    border: none;
                    background-color: transparent;
                }

                @media (max-width: 1500px) {
                   .blogpost-div {
                      width: 100%;
                      padding: 100px 50px 0;
                    }

                   .post-content {
                      width: 930px;
                    }

                    .post-text p {
                        margin: 50px 0 0;
                    }
                }

                @media (max-width: 1024px) {
                   .post-content {
                      width: 564px;
                    }
                }
                 @media (max-width: 900px) {
                   .post-content {
                      width: 100%;
                    }

                    .vl1{
                        display: none;
                    }

                    .blogpost-sidebar {
                        display: none;
                    }
                } 
                    
                  @media (max-width: 600px) {
                    .post-div1{
                       display: none;
                    }
                    .post-div3{
                        margin-top: 20px;
                        text-align: center;
                    }
                       .blogpost-div {
                          width: 100%;
                          padding: 50px 20px 0;
                        }
                       .post-div2 h1 {
                          font-size: 40px;
                        }
                        .post-div3 {
                            font-size: 16px;
                        }
                        .post-div4 {
                            flex-direction: column;
                        }

                        .post-content {
                            width: 100%;
                        }
                        .post-text p:first-of-type{
                            margin-top: 10px;
                        }
                        .post-text p {
                            margin: 30px 0 0;
                            font-size: 16px;
                            line-height: 16px;
                        }
                        .post-text h2{
                            font-size: 24px;
                            text-align: left;
                            margin: 30px 0 0 0;
                        }

                        .post-tags-div {
                            margin: 50px 0 0;
                            padding: 20px 0;
                        }
                        .post-tags {
                            gap: 16px;
                        }
                            .post-tags p {
                                font-size: 12px;
                                padding: 5px 12px;
                            }

                        }
                    }
                
            `}</style>
    </>
  );
};

export default Blogpost;

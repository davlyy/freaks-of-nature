import React  from "react";
import Postimg from "../assets/postimage.png";
import share from "../assets/share.svg";
import Blogsection from "../components/blogsection";
import Comment from "../components/comment";

const Blogpost = () => {
    
    return (
        <>
           <div className="blogpost-section">
             <div className="blogpost-div">
                 <div className="blogpost-post-container">
                     <div className="post-div1">
                         <p>Home <span style={{color:"black"}}>/ Post Titile</span> </p>
                     </div>
                     <div className="post-div2">
                         <h1>Post Title</h1>
                     </div>
                     <div className="post-div3">
                         <p>Author</p>
                         < vl className="vl"/>
                         <p>Category</p>
                         < vl className="vl"/>
                         <span style={{color:"#00000080"}}>Published Date</span>
                     </div>
                     <div className="post-div4">
                          <div className="post-content">
                             <div className="post-image ">
                                 <img src={Postimg} alt="Post" className="post-image img-fluid" />
                             </div>
                             <div className="post-text">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. 
                                     Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. 
                                     Vestibulum et neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. 
                                     Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. 
                                     Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                     Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend.
                                 </p>

                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. 
                                     Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. 
                                     Vestibulum et neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. 
                                     Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. 
                                     Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                     Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend.
                                 </p>

                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. 
                                     Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. 
                                     Vestibulum et neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. 
                                     Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. 
                                     Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                     Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend.
                                 </p>
                             </div>

                             <div className="post-tags-div">
                                  <div className="post-tags">
                                      <p>#DESIGN</p>
                                      <p>#WEB</p>
                                      <p>#UXUI</p>
                                  </div>
                                  <div className="post-tags">
                                    <button>
                                        <img src={share} alt="share" className="share-icon" />
                                    </button>
                                  </div>
                             </div>
                          </div>

                          <vl className="vl1"/>

                          <div className="blogpost-sidebar">
                             <div className="blogpost-sidebar-div">
                                  <h3>Table of Contents</h3>
                                  <ul style={{marginTop:"30px"}}>
                                      <li>lorem ipsum</li>
                                      <li>lorem ipsum
                                          <ul>
                                              <li style={{marginLeft:"20px"}}>lorem ipsum
                                                  <ul>
                                                      <li style={{marginLeft:"20px"}}>lorem ipsum</li>
                                                  </ul>
                                              </li>
                                          </ul>
                                      </li>
                                      <li>lorem ipsum</li>
                                  </ul>  
                             </div>
                          </div>
                     </div>
                 </div>

                 
             </div>
           </div>

           <Blogsection/>

           <Comment/>
                       


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
                .post-div1 {
                    display: flex;
                    opacity: 0.5;
                    font-size: 18px;
                    color: #ED196F;
                    font-weight: 500;
                    
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
                .blogpost-sidebar-div li {
                    margin: 14px 0;
                    font-size: 18px;
                    font-weight: normal;
                    color: #ED196F;
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

                        .post-text p {
                            margin: 30px 0 0;
                            font-size: 12px;
                            line-height: 16px;
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
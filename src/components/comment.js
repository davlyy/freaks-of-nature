import React , { useState } from "react";
import profile from "../assets/profile.svg";


const Comment = () => {
    const [comments, setComments] = useState([]); // State to store comments
    const [newComment, setNewComment] = useState(""); // State to store input value

    const handleAddComment = () => {
        if (newComment.trim() === "") return; // Prevent empty comments
        setComments([...comments, { id: Date.now(), text: newComment, time: Date.now() }]); // Add comment with timestamp
        setNewComment(""); // Clear the input field
    };

    const calculateTimeAgo = (timestamp) => {
        const seconds = Math.floor((Date.now() - timestamp) / 1000);

        if (seconds < 60) return seconds === 1 ? "a sec ago" : `${seconds} sec ago`;
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return minutes === 1 ? "a min ago" : `${minutes} min ago`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return hours === 1 ? "an hour ago" : `${hours} hour ago`;
        const days = Math.floor(hours / 24);
        return days === 1 ? "a day ago" : `${days} days ago`;
    };
    return (
        <>
        <div className="comments-section">
            <div className="comments-div">
                <h2>Comments</h2>
                <div className="write-comments">
                    <div className="write-comments-div">
                        <input
                            type="text"
                            placeholder="Your Comment"
                            className="write-comments-input"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)} 
                        />
                    </div>
                    <button className="comment-btn" onClick={handleAddComment}>
                        Share
                    </button>
                </div>

                <div className="comments-box">
                    {comments.map((comment) => (
                        <div className="comments-box-div" key={comment.id}>
                            <div className="comments-box-image">
                                <img src={profile} alt="profile" className="comments-box-image" />
                            </div>
                            <div className="comments-box-content">
                                <p>{comment.text}</p>
                                <div className="comments-box-user">
                                 <p>user</p>
                                 <p style={{color:"#00000080"}}>{calculateTimeAgo(comment.time)}</p>
                             </div>
                            </div>
                           
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <style jsx>{`
        
        .comments-section {
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         margin: 20px 0;
         padding: 70px 0 100px;;
        }

        .comments-div {
         width: 1620px;
        }

        .comments-div h2 {
         font-size: 48px;
         font-weight: bold;
         color: #000;
         text-transform: uppercase;
        }

        .write-comments {
          width: 1105px;
          height: 130px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 2px solid #000;
          box-shadow: 10px 10px 0px 0px #000;
          border-radius: 10px;
          margin-top: 60px;
          padding: 20px;
        }

        .write-comments-div input {
          width: 100%;
          border: none;
         }

        .comment-btn {
          position: relative;
          left: 90%;
          width: 100px;
          height: 50px;
          background-color: #FFBF00;
          border-radius: 10px;
          text-transform: uppercase;
          font-size: 16px;
          font-weight: bold;
          border: 2px solid #000;
          box-shadow: 5px 5px 0px 0px #000;
        }
          
        .comments-box {
          margin-top: 50px;
          width: 1105px;
        }

        .comments-box-div {
          display: flex;
          gap: 20px;
          align-items: center;
          margin-bottom: 30px;
          padding: 20px;
          border: 2px solid #000;
          box-shadow: 10px 10px 0px 0px #000;
          border-radius: 30px;
          background-color: #F5F5F5;
        }
        .comments-box-content {
          width: 630px;
        }  
        .comments-box-content p {
          font-size: 18px;
          font-weight: normal;
          color: #000000cc;
          margin-bottom: 0px;
        }

        .comments-box-user{
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
        }

        @media (max-width: 1500px) {
          .comments-div {
           width: 100%;
           padding: 0 50px;
          }
        } 
          
        @media (max-width: 1024px) {
          .write-comments {
           width: 100%;
          }

          .comments-box {
           width: 100%;
          }

          .comment-btn {
            left: 89%;
          }
        } 

        @media (max-width: 900px) {
          
          .comment-btn {
            left: 84%;
          }
        }
          
        @media (max-width: 500px) {
          .comments-div {
           padding: 0 20px;
          }

          .comments-div h2 {
            font-size: 32px;
          }

          .write-comments {
            margin-top: 20px;
            padding: 14px 14px 0;
            border-radius: 15px;
            box-shadow: 5px 5px 0px 0px #000;
          }

          .comment-btn {
            left: 74%;
            box-shadow: 2px 2px 0px 0px #000;
            border-radius: 10px;
          }

          .comments-box {
            margin-top: 40px;
          }

          .comments-box-div {
            padding: 10px;
            border-radius: 15px;
            box-shadow: 5px 5px 0px 0px #000;
            gap: 10px;
            align-items: flex-start;
            margin-bottom: 20px;
          }

          .comments-box-image {
            width: 54px;
            height: 54px;
          }

          .comments-box-div p {
            font-size: 12px;
           
          }

          .comments-box-content {
            width: 100%;
          }
        }
        `} </style>
        </>
    );
};

export default Comment;
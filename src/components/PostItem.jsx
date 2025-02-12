import React from "react";

const PostItem = (props) => {
    return(
        <div className="post">
            <div className="postContent">
                <strong>{props.post.id} {props.post.title}</strong>
                <div>1+1=11</div>
            </div>
            <div className="postBTNS">
                <button>{props.post.body}</button>
            </div>
        </div>
    )
}

export default PostItem;
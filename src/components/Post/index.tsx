import React from "react";
import { IPost } from '../../types';
import "./Post.css";

/**
 *
 * Post Component
 * - [number] id: post id num
 * - [string] avatar: post avatar image url
 * - [string] caption: post caption
 * - [string] handle: author of post 
 * - [string] image: post image url 
 * - [number] likes: total number of likes
 * 
*/
const Post = ({ 
	id, 
	avatar, 
	caption, 
	handle, 
	image, 
	likes 
}: IPost ) => {
	return (
		<div id={`post-${id}`} className="post">
			<div className="post__profileInfo profileInfo">
				<img className="profileInfo__avatar" src={avatar} alt="user-avatar" />
				<span className="profileInfo__handle">{handle}</span>
			</div>
			<img className="post__image" src={image} alt={`${handle} post`} />
			<div className="post__captionWrapper"><p className="post__caption">{caption}</p></div>
		</div>
	)
}

export default Post;
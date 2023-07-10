import React from "react";
import { IPost } from '../../types';
import Post from '../Post';
import "./Feed.css";

/**
 *
 * Feed Component 
 * - [IPost[]] posts: array of post objects
 * 
*/
const Feed = ({ posts }: { posts: IPost[] }) => (
	<div className="feed">
		{posts.map((post: IPost) => {
			const { id, avatar, caption, handle, image, likes } = post;

			return (
				<Post
					key={id} 
					id={id}
					avatar={avatar}
					caption={caption}
					handle={handle}
					image={image}
					likes={likes}
				/>
			)
		})}
	</div>
);

export default Feed;
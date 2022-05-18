import React, { useEffect, useState } from "react";
import { sClient } from "../sanityclient.js";
import PostElement from "./PostElement";

const Posts = () => {
	const [posts, setPosts] = useState(null);
	
	useEffect(() => {
		const query = `*[_type == "post"]{
					_id,
					title,
					author-> {
						name,
						image
					},
					description,
					mainImage,
					slug
				}`;

		sClient.fetch(query)
			.then((data) => setPosts(data))
			.catch(console.error);
	}, []);

	if(!posts){
		return(
			<span className="text-red-500 flex items-center justify-center mt-6">
				{ !posts ? "No Posts Available" : null }
			</span>
		);	
	}

	return(
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-3 md:p-5 gap-2 md:gap-5">
			{posts.map( (post) => (
				<PostElement key={post._id} post={post} />
				))}
		</div>
	);
}

export default Posts;
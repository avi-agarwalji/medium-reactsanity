import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { urlFor, sClient } from "../sanityclient.js";
import PortableText from "react-portable-text";
import PostComment from "./PostComment";

function DetailedPost() {
	const [detailedPost, setDetailedPost] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		const query = `*[_type == "post" && slug.current=="${slug}"][0]{
			_id,
			_createdAt,
			title,
			author-> {
				name,
				image
			},
			'comments': *[
				_type == "comment" &&
				post._ref == ^._id
			],
			description,
			mainImage,
			slug,
			body
		}`;

		sClient.fetch(query)
		.then((data) => setDetailedPost(data))
		.catch(console.error);
	}, [slug]);

	if(!detailedPost){
			return null;		
		}

	return(
		<div>
			<img
				className="w-full h-40 object-cover" 
				src={urlFor(detailedPost.mainImage).url()} 
				alt="" 
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 mb-10">
				<article className="max-w-2xl mx-auto p-4">
					<h1 className="text-3xl font-semibold mt-10 mb-3">{detailedPost.title}</h1>
					<h2 className="text-xl font-light text-gray-500 mb-2">
						{detailedPost.description}
					</h2>
					<div className="flex items-center space-x-2">
						<img 
							className="h-12 w-14 rounded-full"
							src={urlFor(detailedPost.author.image).url()} 
							alt="" 
						/>
						<p className="font-extralight text-sm">
							Posted by{" "}
							<span className="text-red-600">
								{detailedPost.author.name}
							</span>
							{" "}
							Published at {new Date(detailedPost._createdAt).toLocaleString()}
						</p>
					</div>
					<div className="mt-10 text-gray-700 text-sm text-justify">
						<PortableText 
							dataset={process.env.REACT_APP_SANITY_DATASET || "production"}
							projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
							content={detailedPost.body}
						/>
					</div>
				</article>

				{/* Comment section */}
				<PostComment id={detailedPost._id} comments={detailedPost.comments} />
			</div>
		</div>
	);
}

export default DetailedPost;
import { Link } from "react-router-dom";
import { urlFor } from "../sanityclient.js";

const PostElemet = ({ post }) => {
	return(
		<Link to={`/post/${post.slug.current}`}>
			<div className="group border rounded-lg overflow-hidden h-[21rem]">
				<div className="flex justify-center py-1">
					<img className="w-4/5 center h-52 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()} alt=""/>
				</div>
				<div className="border-t flex justify-between p-1 md:p-5">
					<div>
						<p className="font-semibold p-1">{post.title}</p>
						<p className="text-sm p-1">
							{post.description} by <span className="font-semibold"> {post.author.name} </span>
						</p>
					</div>
					<img className="w-18 h-16 rounded-full" src={urlFor(post.author.image).url()} alt=""/>	
				</div>
			</div>
		</Link>
	);
}

export default PostElemet;
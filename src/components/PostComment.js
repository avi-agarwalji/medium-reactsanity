import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { sClient } from "../sanityclient.js";

function PostComment({ id, comments }) {
	const {
		register,
		handleSubmit,
		formState: { errors }

	} = useForm();
	const [ submitComment, setSubmitComment ] = useState(false);

	const onSubmit: SubmitHandler<FormInput> = (data) => {
		const { id, name, email, comment } = data;
		try {
			sClient.create({
				_type: "comment",
				post: {
					_type: "reference",
					_ref: id,
				},
				name,
				email,
				comment
			}); 
			setSubmitComment(true);
		} catch (error) {
			console.log(error);
			setSubmitComment(false);
		}
	};
	if(submitComment){
		return(
			<div className="flex items-center max-w-2xl max-h-24 sm:mx-auto mx-1 my-10 p-6 bg-green-200 rounded-lg shadow">
				<p className="text-lg text-green-800 font-semibold">
					Your comment is submitted successfully. Thanks for visiting.
				</p>
			</div>
			);
	}
	return(
		<div className="mt-10">
			{/* Comments Section */}
			<div className="max-w-xl mb-10 mx-1 sm:mx-auto p-4 space-y-2 shadow shadow-yellow-500 rounded-lg">
				<h2 className="text-2xl text-yellow-800 font-semibold">Comments:</h2>
				<hr className="p-1 my-1 border-yellow-400"/>
				{comments.map((comment) => (
					<div key={comment._id}>
						<p>
							<span className="text-semibold text-yellow-700">{comment.name} :</span>
							<span className="text-sm"> {comment.comment}</span>
						</p>
					</div>
				))}	
			</div>

			{/* Comment Form */}
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-xl mx-1 sm:mx-auto mb-10 p-5 shadow shadow-yellow-500 rounded-lg">
				<h3 className="text-sm text-yellow-600">Enjoyed this article?</h3>
				<h3 className="text-yellow-800 pt-2 mb-6">Leave a comment below . .</h3>
				<input 
					{...register("id")}
					type="hidden"
					name="id"
					value={id}
				/>
				<label className="mb-4">
					<span className="text-lg text-gray-600 px-2 py-3">Name</span>
					<input 
						{...register("name", { required: true })}
						className="shadow shadow-yellow-300 border border-rounded py-2 px-3 mx-2 w-full mt-1 focus:ring ring-yellow-400 focus:outline-none"
						type="text"
						placeholder="Your Name" 
					/>
				</label>
				<label className="mb-4">
					<span className="text-lg text-gray-600 px-2 py-3">Email</span>
					<input 
						{...register("email", { required: true })}
						className="shadow shadow-yellow-300 border border-rounded py-2 px-3 mx-2 w-full mt-1 focus:ring ring-yellow-400 focus:outline-none"
						type="email"
						placeholder="Your Email" />
				</label>
				<label className="mb-4">
					<span className="text-lg text-gray-600 px-2 py-3">Comment</span>
					<textarea 
						{...register("comment", { required: true })}
						className="shadow shadow-yellow-300 border border-rounded py-2 px-3 mx-2 w-full mt-1 focus:ring ring-yellow-400 focus:outline-none"
						placeholder="Comment"
						rows={10} 
					/>
				</label>

				{/* Form Errors */}
				<div className="flex flex-col p-5 text-xs sm:text-sm">
					{errors.name && (
						<span className="text-red-500">
							* Name Field is required
						</span>
					)}
					{errors.email && (
						<span className="text-red-500">
							* Email Field is required
						</span>
					)}
					{errors.comment && (
						<span className="text-red-500">
							* Comment Field is required
						</span>
					)}
				</div>

				<input 
					type="submit" 
					className="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
				/>
			</form>
		</div>
	);
}

export default PostComment;
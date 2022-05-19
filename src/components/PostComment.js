import { useForm, SubmitHandler } from "react-hook-form";

function PostComment({ id }) {
	const {
		register,
		handleSubmit,
		formState: { errors }

	} = useForm();

	const onSubmit: SubmitHandler<FormInput> = async(data) => {
		console.log(data)
	}
	return(

		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-2xl mx-auto mb-10 p-5">
			<h3 className="text-xs text-yellow-500">Enjoyed this article?</h3>
			<h3 className="text-sm pt-2 mb-6">Leave a comment below . .</h3>
			
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
					className="shadow border border-rounded py-2 px-3 mx-2 w-full mt-1 focus:ring ring-yellow-400 focus:outline-none"
					type="text"
					placeholder="Your Name" 
				/>
			</label>
			<label className="mb-4">
				<span className="text-lg text-gray-600 px-2 py-3">Email</span>
				<input 
					{...register("email", { required: true })}
					className="shadow border border-rounded py-2 px-3 mx-2 w-full mt-1 focus:ring ring-yellow-400 focus:outline-none"
					type="email"
					placeholder="Your Email" />
			</label>
			<label className="mb-4">
				<span className="text-lg text-gray-600 px-2 py-3">Comment</span>
				<textarea 
					{...register("comment", { required: true })}
					className="shadow border border-rounded py-2 px-3 mx-2 w-full mt-1 focus:ring ring-yellow-400 focus:outline-none"
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
	);
}

export default PostComment;
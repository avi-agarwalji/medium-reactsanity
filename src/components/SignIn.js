const SignIn = () => {
	return (
        <div className="max-w-3xl mx-auto border-y border-yellow-500 pb-10">
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-4xl text-yellow-900 font-display font-semibold lg:text-left xl:text-5xl
                xl:text-bold">
                	Sign In
                </h2>
                <div className="mt-12">
                    <form>
                        <div>
                            <label className="text-sm font-bold text-gray-700 tracking-wide">
                            	Email Address
                            </label>
                            <input 
                            	className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500" 
                            	type="text" 
                            	placeholder="blog@example.com" 
                            />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Password
                                </div>
                                <div>
                                    <button 
                                        disabled={true}
                                        className="text-xs font-display font-semibold text-yellow-600 hover:text-yellow-800 cursor-pointer">
                                        Forgot Password?
                                    </button>
                                </div>
                            </div>
                            <input 
                            	className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500" 
                            	type="text" 
                            	placeholder="Enter your password" 
                            />
                        </div>
                        <div className="mt-10">
                            <button 
                            className="font-bold bg-yellow-400 text-gray-100 px-4 py-3 w-full rounded-full tracking-wide  
                            focus:outline-none focus:shadow-outline hover:bg-yellow-300 hover:text-yellow-900 hover:border-2 hover:border-yellow-400 shadow-md">
                                Log In
                            </button>
                        </div>
                    </form>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Don't have an account ? 
                        <button className="cursor-pointer text-yellow-600 hover:text-yellow-800">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default SignIn;
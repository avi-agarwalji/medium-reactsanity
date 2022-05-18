import banner from '../banner.png';

function HomeBanner() {
	return(
		<div className="bg-yellow-400 border-y border-black">
			<div className="flex justify-between items-center py-16 md:py-10 max-w-7xl mx-auto">
				<div className="p-4 space-y-6">
					<h1 className="text-[4.5rem] md:text-8xl font-serif">Stay curious.</h1>
					<h2 className="text-xl md:text-2xl max-w-sm font-serif">
						Discover stories, thinking, and expertise from writers on any topic.
					</h2>
					<h3 className="text-xl text-white w-fit font-medium bg-black rounded-[18px] px-8 py-1 cursor-pointer">
						Start reading
					</h3>
				</div>
				<div className="">
					<img src={banner} alt="banner" className="hidden md:inline-block px-4 h-80 object-contain lg:h-96 opacity-95" />
				</div>
			</div>	
		</div>	
	);
}

export default HomeBanner;
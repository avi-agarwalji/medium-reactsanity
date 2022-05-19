import { Link } from "react-router-dom";
import logo from '../logo.svg';

function Header() {
	return(
		<header className="flex justify-between p-1 py-4 sm:p-5 max-w-7xl mx-auto items-center">
			{/* Logo */}
			<Link to="/">
				<img src={logo} alt="logo" className="w-24 sm:w-40 object-contain cursor-pointer" />				
			</Link>
			{/* Nav Items */}
			<div className="flex items-center space-x-1 md:space-x-6">
				{/* Big scrren nav items */}
				<div className="hidden md:flex items-center space-x-6 font-semibold">
					<h3>Our Story</h3>
					<h3>Membership</h3>
					<h3>Write</h3>
				</div>
				{/* Nav items on both small and big screens */}
				<Link to="signin">
						<h3 className="text-sm pr-2 sm:text-lg text-green-400 cursor-pointer hover:text-green-200">Sign In</h3>
					</Link>
				<h3 className="text-sm md:text-lg text-green-400 border border-green-400 rounded-[18px] px-2 py-1 cursor-pointer hover:bg-green-400 hover:text-white">
					Get Started
				</h3>
			</div>
		</header>
	);
}

export default Header;
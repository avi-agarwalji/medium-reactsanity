import { Link } from "react-router-dom";
import logo from '../logo.svg';

function Header() {
	return(
		<div className="bg-yellow-400">
			<header className="flex justify-between p-5 max-w-7xl mx-auto items-center">
				{/* Logo */}
				<Link to="/">
					<img src={logo} alt="logo" className="w-28 md:w-40 object-contain cursor-pointer" />				
				</Link>
				{/* Nav Items */}
				<div className="flex items-center space-x-3 md:space-x-6">
					{/* Big scrren nav items */}
					<div className="hidden md:flex items-center space-x-6 font-semibold">
						<h3>Our Story</h3>
						<h3>Membership</h3>
						<h3>Write</h3>
						<Link to="signin">
							<h3>Sign In</h3>
						</Link>
					</div>
					{/* Nav items on both small and big screens */}
					<h3 className="text-sm md:text-lg text-white w-fit font-medium bg-black rounded-[18px] px-3 py-1 cursor-pointer">
						Get Started
					</h3>
				</div>
			</header>
		</div>
	);
}

export default Header;
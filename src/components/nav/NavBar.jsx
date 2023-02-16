import { useRef } from "react";
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>Arteiro</h3>
			<nav ref={navRef}>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/galeria">Galeria</Link>
					</li>
					<li>
						<Link to="/">contato</Link>
					</li>
				</ul>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
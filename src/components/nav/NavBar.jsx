import { useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { FaAlignRight, FaTimes} from "react-icons/fa";
import "./NavBar.css";

function Navbar({black}) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};


	return (
		<header className={black ? 'black' : ''}>
			<h3>Arteiro</h3>
			<nav ref={navRef} >
				<ul className="nav-ul">
					<li>
						<Link to="/" onClick={showNavbar}>HOME</Link>
					</li>
					<li>
						<Link to="/galeria" onClick={showNavbar}>GALERIA</Link>
					</li>
					<li>
						<Link to="/agenda" onClick={showNavbar}>AGENDA</Link>
					</li>
					<li>
						<Link to="/blog" onClick={showNavbar}>BLOG</Link>
					</li>
				</ul>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaAlignRight />
			</button>
		</header>
	);
}

export default Navbar;

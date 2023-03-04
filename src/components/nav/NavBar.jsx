import { useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { FaAlignRight, FaTimes} from "react-icons/fa";
import "./NavBar.css";

function Navbar({black}) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	function direcionaCtt () {
		window.location.href='#contato'
	}

	return (
		<header className={black ? 'black' : ''}>
			<h3>Arteiro</h3>
			<nav ref={navRef} >
				<ul>
					<li>
						<Link to="/" onClick={showNavbar}>Home</Link>
					</li>
					<li>
						<Link to="/galeria" onClick={showNavbar}>Galeria</Link>
					</li>
					<li>
						<Link to="/">Agenda</Link>
					</li>
					<li>
						<Link to="/blog" onClick={showNavbar}>Blog</Link>
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

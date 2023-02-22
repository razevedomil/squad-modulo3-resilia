import { useRef } from "react";
import { Link } from 'react-router-dom'
import { FaAlignRight, FaTimes} from "react-icons/fa";
import "./NavBar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3 className="logo">Arteiro</h3>
			<nav ref={navRef} >
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/galeria">Galeria</Link>
					</li>
					<li>
						<Link to="/">Sobre nós</Link>
					</li>
					<li>
						<Link to="/">Contato</Link>
					</li>
					<li>
						<Link to="/">Blog</Link>
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
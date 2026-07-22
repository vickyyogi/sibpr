import logoBiruCerah from "../../assets/Logo_biru_cerah.png";
import { Link, useLocation } from "react-router-dom";

function Header(){
    const location = useLocation();

    return (
        <header className="header-top">
            <div className="logo-left">
                <img src={logoBiruCerah} alt="Logo Biru Cerah" />
                <div className="text-logo">
                    <h2>BPR Adiartha Reksacitra</h2>
                    <span>JL. Raya Mondoroko no.114 Pagentan - Singosari</span>
                </div>
            </div>
            <nav>
                <ul className="menu-top">
                    <li className="menu-items"><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
                    <li className="menu-items"><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
                    <li className="menu-items"><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
                    <li className="menu-items"><Link to="/simulasikredit" className={location.pathname === "/simulasikredit" ? "active" : ""}>Simulasi Kredit</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
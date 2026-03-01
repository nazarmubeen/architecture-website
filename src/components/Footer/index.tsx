import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">1828 Design Avenue</h3>
                        <p className="footer-description">
                            Creating innovative architectural and interior design solutions — from residences and apartments to commercial complexes, institutional and hospitality spaces.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Contact</h4>
                        <ul className="footer-contact">
                            <li>
                                <strong>Ar. Mohd. Aquib Khaliq</strong><br />
                                <a href="tel:9569107568">+91 95691 07568</a>
                            </li>
                            <li>
                                <strong>Ar. Prerna Maurya</strong><br />
                                <a href="tel:8853990396">+91 88539 90396</a>
                            </li>
                            <li>
                                <a href="mailto:davenue1828@gmail.com">davenue1828@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Our Work</h4>
                        <ul className="footer-links">
                            <li>Residence</li>
                            <li>Apartments</li>
                            <li>Commercial Complexes</li>
                            <li>Institutional</li>
                            <li>Hospitality</li>
                            <li>Residential & Office Interiors</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} 1828 Design Avenue. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

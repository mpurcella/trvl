import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

let Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-email-subscribe">
                <h4 className="footer-email-subscribe-heading">
                    Join the Adventure Newsletter to receive our best vacation deals!
                </h4>
                <p className="footer-email-subscribe-text">
                    You can unsubscribe at any time.
                </p>
                <form>
                    <input type="email" className='footer-email-input' placeholder='Email Address'/>
                    <Button buttonStyle='btn-outline'>Subscribe</Button>
                </form>
            </div>
            <div className="footer-links">
                <div className="footer-links-container">
                    <h2 className='footer-links-heading'>About Us</h2>
                    <ul className="footer-links-list">
                        <li className='footer-links-item'>
                            <Link 
                                to='/sign-up'
                                className='footer-links-link'
                            >
                            How it Works
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link 
                                to='#'
                                className='footer-links-link'
                            >
                            Testimonials
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link 
                                to='#'
                                className='footer-links-link'
                            >
                            Careers
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link 
                                to='#'
                                className='footer-links-link'
                            >
                            Investors
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link 
                                to='#'
                                className='footer-links-link'
                            >
                            Terms of Service
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-links-container">
                    <h2 className='footer-links-heading'>Contact Us</h2>
                    <ul className="footer-links-list">
                        <li className='footer-links-item'>
                            <Link 
                                to='#'
                                className='footer-links-link'
                            >
                            Contact
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link 
                                to='#'
                                className='footer-links-link'
                            >
                            Support
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link 
                                to='#'
                                className='footer-links-link'
                            >
                            Destinations
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link 
                                to='#'
                                className='footer-links-link'
                            >
                            Sponsorships
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-links-container">
                    <h2 className='footer-links-heading'>Videos</h2>
                    <ul className="footer-links-list">
                        <li className='footer-links-item'>
                            <Link 
                                to='/sign-up'
                                className='footer-links-link'
                            >
                            Submit Video
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link 
                                to='#'
                                className='footer-links-link'
                            >
                            Ambassadors
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link 
                                to='#'
                                className='footer-links-link'
                            >
                            Agency
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link 
                                to='#'
                                className='footer-links-link'
                            >
                            Influencers
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-links-container">
                    <h2 className='footer-links-heading'>Social Media</h2>
                    <ul className="footer-links-list">
                        <li className='footer-links-item'>
                            <Link 
                                to='/sign-up'
                                className='footer-links-link'
                            >
                            Facebook
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link 
                                to='#'
                                className='footer-links-link'
                            >
                            Instagram
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link 
                                to='#'
                                className='footer-links-link'
                            >
                            Twitter
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link 
                                to='#'
                                className='footer-links-link'
                            >
                            Snapchat
                            </Link>
                        </li>
                        <li className='footer-links-item'>
                            <Link 
                                to='#'
                                className='footer-links-link'
                            >
                            TikTok
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright-social">
                <div className="copyright">
                    <div className="copyright-container">
                        <div className="copyright-logo">
                            <Link
                                to='/'
                                className='copyright-logo-text'
                            >
                                TRVL
                            </Link>
                            <Link
                                to='/'
                                className='copyright-logo-icon'
                            >
                                <i className="fab fa-typo3"></i>
                            </Link>
                        </div>
                        <div className="copyright-info">
                            <h3 className="copyright-info-text">
                                © 2021 TRVL
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="social-links">
                    <div className="social-links-container">
                        <ul className="social-links-list">
                            <li className="social-list-item">
                                <Link
                                    to='#'
                                    className='social-list-link'
                                    target='_blank'
                                    aria-label='Facebook'
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li className="social-list-item">
                                <Link
                                    to='#'
                                    className='social-list-link'
                                    target='_blank'
                                    aria-label='Instagram'
                                >
                                    <i className="fab fa-instagram"></i>
                                </Link>
                            </li>
                            <li className="social-list-item">
                                <Link
                                    to='#'
                                    className='social-list-link'
                                    target='_blank'
                                    aria-label='Twitter'
                                >
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </li>
                            <li className="social-list-item">
                                <Link
                                    to='#'
                                    className='social-list-link'
                                    target='_blank'
                                    aria-label='Snapchat'
                                >
                                    <i className="fab fa-snapchat-ghost"></i>
                                </Link>
                            </li>
                            <li className="social-list-item">
                                <Link
                                    to='#'
                                    className='social-list-link'
                                    target='_blank'
                                    aria-label='TikTok'
                                >
                                    <i className="fab fa-tiktok"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
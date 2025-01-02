import React from 'react';
export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    {/* About Section */}
                    <div className="col-md-4 mb-3">
                        <h5>About Us</h5>
                        <p>
                            We are dedicated to providing the best car rental experience with a wide
                            variety of vehicles and 24/7 support.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
                            <li><a href="#service" className="text-light text-decoration-none">Service</a></li>
                            <li><a href="#about" className="text-light text-decoration-none">About Us</a></li>
                            <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
                        </ul>
                    </div>
                    {/* Contact Section */}
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p><i className="bi bi-geo-alt-fill"></i> 123 Car Rental Street, City, Country</p>
                        <p><i className="bi bi-envelope-fill"></i> support@carrental.com</p>
                        <p><i className="bi bi-telephone-fill"></i> +1 234 567 890</p>
                        <div className="social-links">
                            <a
                                href="https://www.linkedin.com/in/sachin-tiwari-javafullstack/"
                                className="social-icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin-in"></i> LinkedIn
                            </a>
                            <a
                                href="https://github.com/Sachint122"
                                className="social-icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="text-light" />
                <div>
                    <h4 style={{ color: '#08ffe6' }}>Subscribe to our newsletter</h4>
                    <p style={{ textAlign: 'center', fontSize: '24px', color: '#08ffe6'}}> Monthly digest of what's new and exciting from us.</p>
                </div>
                <div className="newsletter-form mt-3">
                    <form className="d-flex justify-content-center">
                        <input
                            type="email"
                            className="form-control me-2"
                            placeholder="Enter your email"
                            style={{ maxWidth: '300px' }}
                        />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>
                <div className="text-center">
                    <p className="mb-0">&copy; 2024 Car Rental. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

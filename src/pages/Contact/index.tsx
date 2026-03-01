import React from 'react';
import ContactForm from '../../components/ContactForm';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-description">
                        Let's discuss your project and bring your architectural vision to life.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="contact-content grid grid-2">
                        <div className="contact-info">
                            <h2>Get in Touch</h2>
                            <p>
                                We'd love to hear about your project. Reach out to us and let's create something amazing together.
                            </p>

                            <div className="contact-details">
                                <div className="contact-detail">
                                    <h3>👤 Ar. Mohd. Aquib Khaliq</h3>
                                    <p><a href="tel:9569107568">+91 95691 07568</a></p>
                                </div>
                                <div className="contact-detail">
                                    <h3>👤 Ar. Prerna Maurya</h3>
                                    <p><a href="tel:8853990396">+91 88539 90396</a></p>
                                </div>
                                <div className="contact-detail">
                                    <h3>📧 Email</h3>
                                    <p><a href="mailto:davenue1828@gmail.com">davenue1828@gmail.com</a></p>
                                </div>
                                <div className="contact-detail">
                                    <h3>🕐 Hours</h3>
                                    <p>Monday – Saturday: 9:00 AM – 7:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

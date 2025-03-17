import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/contact.css";

function Contact() {
    return (
        <div className="contact" id="contact">
            <h2 className="contact-title">Contact</h2>
            <div className="contact-info">
                <p><FaUser size={20} aria-label="User Icon" /> <strong>Employee ID:</strong>ZSTTK367/24</p>
                <p>
                    <FaEnvelope size={20} aria-label="Email Icon" /> <strong>Email:</strong>
                    <a href="mailto:your@email.com" className="contact-link">mathavan.s@zohocorp.com</a>
                </p>
                <p>
                    <FaPhone size={20} style={{ transform: "rotate(90deg)" }} aria-label="Phone Icon" />
                    <strong>Phone Number:</strong> 7708411240
                </p>
                <p><FaMapMarkerAlt size={20} aria-label="Location Icon" /> <strong>Address:</strong> 13/113-2, Lakshmipatti, Avudayanoor, Tenkasi-627808</p>
            </div>
        </div>
    );
}

export default Contact;
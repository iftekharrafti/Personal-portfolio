import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact <span>Me</span></h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <p>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                        <button className="btn contact-btn">Contact Me</button>
                    </div>
                    <div className="col-md-6">
                        <h3>Email</h3>
                        <p>iftekharrafti7040@gmail.com</p>
                        <h3>Facebook</h3>
                        <p>iftekharrafti7040@gmail.com</p>
                        <h3>Linkedin</h3>
                        <p>iftekharrafti7040@gmail.com</p>
                        <h3>Address</h3>
                        <p>Rameshworpur,Kabirhat,Noakhali</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
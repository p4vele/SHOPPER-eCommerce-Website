import React from 'react';
import './Modal.css'; 

const Modal = ({ isOpen, content, onClose }) => {
  if (!isOpen) return null;

  const handleContent = () =>{
    if (content === 'Company'){
        return (
            <div>
                <h2 className='header'>About Our Company</h2>
                <h5 className='header'>
                    This is NOT a real company!
                </h5 >
                <p>
                    Our platform simulates a real-world online shopping experience, providing a dynamic and engaging interface for exploring and purchasing products.
                </p>
                <p>
                    Though not a live business, it offers a fully functional e-commerce flow, from product browsing to checkout, serving as a virtual marketplace designed to highlight the technical and design capabilities of its creator.
                </p>
                <p>
                    The website reflects the importance of accessible, user-friendly designs, scalability, and seamless interaction—core principles in building today's digital experiences.
                </p>
            </div>
        );
    }
    if (content === 'About'){
        return (
            <div>
                <h2 className='header'>About</h2>
                <p> Welcome to our e-commerce platform,</p>
                <p> a showcase project designed by a passionate 4th-year Software Engineering student.</p>
                 <p> This website is part of a portfolio, demonstrating skills in modern web development.</p>
            </div>
        );
    }
    if (content === 'Contact'){
        return (
            <div>
                <h2 className='header'>Contact</h2>
                <p> Feel free to contact me </p>
                <div className='contactlinks'>
                    <ul> <a href="mailto:kormilchikpavel@gmail.com">Email</a></ul>
                    <ul><a href="https://www.linkedin.com/in/pavel-kormilchik/">Linkdin</a></ul>
                    <ul><a href="https://github.com/p4vele">GitHub</a></ul>
                </div>

            </div>
        );
    }
  }
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <div>{handleContent()}</div>
      </div>
    </div>
  );
};

export default Modal;

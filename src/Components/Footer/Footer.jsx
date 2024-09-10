import React ,{useState} from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal/Modal'

const Footer = () => {

  const navigate= useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleItemClick = (item) => {
    setModalContent(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li onClick={() => handleItemClick('Company')}>Company</li>
            <li onClick={() => { navigate('/mens');window.scrollTo(0, 0);}}>Products</li>
            <li onClick={() => handleItemClick('About')}>About</li>
            <li onClick={() => handleItemClick('Contact')}>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintrest_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>


        <Modal isOpen={isModalOpen} content={modalContent} onClose={closeModal} />

    </div>
  )
}

export default Footer
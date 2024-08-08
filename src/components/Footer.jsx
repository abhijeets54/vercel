import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer id="footer" className="bg-gray-800 text-white p-4 text-center text-xl ">
      <p>&copy; 2024 Initiators of Change. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="tel:8752901502" className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} />
          <span>+918752901502<br />
          +919876920114</span>
        </a>
        <a href="mailto:info@initiatorsofchange.com" className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>info@initiatorsofchange.com</span>
        </a>
        <a href="https://www.instagram.com/initiatorsofchange_" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faInstagram} />
          <span>initiatorsofchange_</span>
        </a>
        <a href="https://maps.app.goo.gl/HDDPfLAz2N9GWdWT7?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Flower Enclave Main Market, near Flower Road, Chownk, Ludhiana, Punjab 141013</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

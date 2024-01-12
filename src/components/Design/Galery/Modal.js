import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles.js'; 
import { CloseButton, FondoDiv } from './styles.js';


export const Modal_element = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div className="modal-overlay">
        <FondoDiv className="modal">
          <CloseButton onClick={onClose}>
            X
          </CloseButton>
          {children}
        </FondoDiv>
      </div>
    )
  );
};




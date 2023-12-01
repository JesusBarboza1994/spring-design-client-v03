import React, { useState } from 'react';
import './styles.js'; 
import { CloseButton, FondoDiv } from './styles.js';

export const Modal = ({ isOpen, onClose, children }) => {
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


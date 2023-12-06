import React, { useState } from 'react';
import { CloseButton, FondoDiv, Wrapper } from './styles';

export const Modal = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <Wrapper className="modal-overlay">
        <FondoDiv className="modal">
          <CloseButton onClick={onClose}>
            X
          </CloseButton>
          {children}
        </FondoDiv>
      </Wrapper>
    )
  );
};


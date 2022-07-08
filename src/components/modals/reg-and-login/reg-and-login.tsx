import React from 'react';
import RegAndLoginForm from '../../forms/reg-and-login/reg-and-login-form';
import Modal from '../../ui/modal/modal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const RegAndLoginModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} center>
      <RegAndLoginForm />
    </Modal>
  );
};

export default RegAndLoginModal;

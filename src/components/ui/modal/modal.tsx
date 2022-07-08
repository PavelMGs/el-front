import React from 'react';
import ReactResponsiveModal from 'react-responsive-modal';
import cn from 'classnames';
import 'react-responsive-modal/styles.css';
import s from './modal.module.scss';

type Props = {
  isOpen: boolean;
  center?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  classNameContent?: string;
  classNameTitle?: string;
  classNameModal?: string;
  closeOnOverlayClick?: boolean;
  fullWidth?: boolean;
  withoutCloseButton?: boolean;
  title?: React.ReactNode;
};

const Modal: React.FC<Props> = ({
  isOpen,
  center = false,
  onClose,
  children,
  classNameContent,
  classNameTitle,
  classNameModal,
  closeOnOverlayClick = true,
  fullWidth = false,
  withoutCloseButton = false,
  title,
}) => {
  const animationEnd = React.useCallback(() => {
    if (!isOpen) {
      document.documentElement.classList.remove('is-modal-opened');
      document.documentElement.classList.remove('is-active-padding-fix');
    }
  }, [isOpen]);

  return (
    <ReactResponsiveModal
      classNames={{
        closeIcon: s.closeIcon,
        closeButton: withoutCloseButton ? 'd-none' : s.closeButton,
        modal: cn(s.modal, classNameModal, { 'w-100': fullWidth }),
      }}
      open={isOpen}
      onClose={onClose}
      center={center}
      animationDuration={200}
      blockScroll={false}
      onAnimationEnd={animationEnd}
      closeOnOverlayClick={closeOnOverlayClick}
    >
      <div className={cn('c-card p-20 pt-32', classNameContent)}>
        {title && <h2 className={cn(s.title, classNameTitle)}>{title}</h2>}
        {children}
      </div>
    </ReactResponsiveModal>
  );
};

export default React.memo(Modal);

import styled from "styled-components";
import ReactModal from "react-modal";
import { useState, useEffect } from "react";
const ModalBox = styled.div``;

const AlertModal = ({ isOpened, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOpen = () => {
      setIsOpen(true);
    };
  }, [isOpened]);

  return (
    <ModalBox>
      <ReactModal isOpen={isOpen}>
        <span>{text}</span>
        <button onClick={handleClickClose}>닫기</button>
      </ReactModal>
    </ModalBox>
  );
};
export default AlertModal;

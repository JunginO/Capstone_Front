import React, { useState } from "react";
import ReactModal from "react-modal";

const Modal = (props) => {
  const { isOpen, onCancel } = props;
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const handleClose = () => {
    onCancel();
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCancel}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)",
        },
        content: {
          width: "340px",
          height: "400px",
          position: "absolute",
          top: "40%",
          left: " 50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid #eee",
          borderRadius: "15px",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          outline: "none",
          padding: "20px",
          textAlign: "center",
        },
      }}
    >
      <input
        type="text"
        defaultValue={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
      />
      <input
        type="text"
        defaultValue={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
      />
      <div>
        <button onClick={handleClose}>저장</button>
      </div>
    </ReactModal>
  );
};
export default Modal;

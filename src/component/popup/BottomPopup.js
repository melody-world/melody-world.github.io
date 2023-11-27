import React, { useRef, useEffect } from "react";

export default function BottomPopup({ content }) {
  const modalStyle = {
    position: "fixed",
    zIndex: "999",
    bottom: "20px",
    left: "50%",
    width: "maxContent",
    transform: "translateX(-50%)",
    background: "rgba(0, 0, 0, 0.8)",
    color: "#fff",
    padding: "14px 24px",
    transition: "bottom 0.8s ease-in-out",
    borderRadius: "12px",
  };

  const modalRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      modalRef.current.style.bottom = "-100px";
    }, 3000);
  }, []);

  return (
    <div id="modalPopup" style={modalStyle} ref={modalRef}>
      <p>{content}</p>
    </div>
  );
}

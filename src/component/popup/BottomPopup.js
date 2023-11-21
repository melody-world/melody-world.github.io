import React, { useRef, useEffect } from "react";

export default function BottomPopup({ content }) {
  const modalStyle = {
    position: "fixed",
    zIndex: "999",
    bottom: "-100%",
    left: "0",
    width: "100%",
    background: "rgba(0, 0, 0, 0.8)",
    color: "#fff",
    padding: "16px",
    textAlign: "center",
    transition: "bottom 0.8s ease",
  };

  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.style.bottom = "0";

      const resetTimeoutId = setTimeout(() => {
        modalRef.current.style.bottom = "-100px";
      }, 3000);

      return () => {
        clearTimeout(resetTimeoutId);
      };
    }
  }, []);

  return (
    <div id="modalPopup" style={modalStyle} ref={modalRef}>
      <p>{content}</p>
    </div>
  );
}

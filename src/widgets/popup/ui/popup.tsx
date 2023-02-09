import { createPortal } from "react-dom";

const Popup = ({ textHeader, children, open, onClose, offset }: any) => {
  const onOverlayClick = (e: any) => {
    if (e.target.className === "wrapper") {
      onClose(false);
    }
  };

  // const showComponent = ({ isOpen, offset }: any) => {
  //   const isOpenClass = isOpen ? "menu-open" : "";

  //   const style = offset
  //     ? {
  //         top: offset.top + offset.height,
  //         left: offset.left,
  //       }
  //     : {};
  //   return (
  //     <div
  //       id="wrapper"
  //       style={style}
  //       className="absolute top-4 left-4 bg-red-600"
  //       onClick={onOverlayClick}
  //     >
  //       POPUP
  //     </div>
  //   );
  // };

  return (
    open &&
    createPortal(
      <div
        id="wrapper"
        // style={style}
        className="absolute top-4 left-4 bg-red-600"
        onClick={onOverlayClick}
      >
        POPUP
      </div>,
      document.querySelector("#popup") || document.body
    )
  );
};

export default Popup;

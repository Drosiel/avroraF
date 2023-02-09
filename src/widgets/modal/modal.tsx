import { createPortal } from "react-dom";

const Modal = ({ textHeader, children, open, onClose }: any) => {
  const onOverlayClick = (e: any) => {
    if (e.target.className === "wrapper") {
      onClose(false);
    }
  };

  return (
    open &&
    createPortal(
      <div
        id="wrapper"
        className="fixed flex inset-0 bg-white bg-opacity-25 backdrop-blur-sm p-32 justify-center"
        onClick={onOverlayClick}
      >
        <div className="min-w-[500px] flex flex-col">
          <button
            className="text-white text-xl place-self-end"
            onClick={() => onClose(false)}
          >
            X
          </button>

          <div className="bg-[#202025] p-4 rounded">
            <div className="text-center mb-2 font-medium text-xl">
              {textHeader}
            </div>

            <div>{children}</div>
          </div>
        </div>
      </div>,
      document.body
    )
  );
};

export default Modal;

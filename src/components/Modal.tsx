// NPM packages
import { createPortal } from "react-dom";

// Project file
import { useModal } from "state/ModalProvider";
import "styles/components/Modal.sass";

export default function Modal() {
  // Global state
  const { modal, setModal, PORTAL_ID } = useModal();

  // Properties
  const portalContainer = document.getElementById(PORTAL_ID);
  const errorMessage = "Can't find the HTML tag for the modal";

  // Safeguards
  if (portalContainer === null) throw new Error(errorMessage);
  if (modal === null) return null;
  if (modal === undefined) return null;

  return createPortal(
    <div id="modal">
      <div className="background" onClick={() => setModal(null)}></div>
      <div className="content">{modal}</div>
    </div>,
    portalContainer
  );
}

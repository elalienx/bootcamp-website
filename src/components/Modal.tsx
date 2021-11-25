// NPM packages
import { createPortal } from "react-dom";




export default function Modal({ state }) {
  // Safeguards
  if (modal === null) return null;
  if (modal === undefined) return null;

  return createPortal(
    <div data-testid="modal" id="modal">
      <div
        data-testid="background"
        className="background"
        onClick={() => setModal(null)}
      ></div>
      <div className="content">{modal}</div>
    </div>,
    document.getElementById("portal")
  );
}

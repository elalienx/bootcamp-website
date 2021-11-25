// NPM packages
import { createContext, useContext, useState } from "react";

// Properties
const ModalContext = createContext(null);

export function ModalProvider({ children, initialState }) {
  // Local state
  const [modal, setModal] = useState(initialState);

  // Property
  const PORTAL_ID = "portal";

  // Components
  const ErrorMessage = <p>There aren't any children inside the provider</p>;

  // Safeguards
  if (children === null) return ErrorMessage;
  if (children === undefined) return ErrorMessage;

  return (
    <ModalContext.Provider value={{ modal, setModal, PORTAL_ID }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  const errorMessage = "useModal() must be used inside a Context API provider.";
  const fixMessage = "Wrap your components inside <ModalProvider> to fix it.";

  if (!context) throw new Error(errorMessage + fixMessage);

  return context;
}

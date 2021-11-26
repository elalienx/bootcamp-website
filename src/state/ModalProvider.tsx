// NPM packages
import { createContext, ReactElement, useContext, useState } from "react";

// Interfaces
interface iProps {
  children: JSX.Element;
  initialState: JSX.Element | null;
}
interface iContext {
  modal: JSX.Element | null;
  setModal: Function;
  PORTAL_ID: string;
}

// Properties
const initialState = {
  modal: null,
  setModal: () => {},
  PORTAL_ID: "",
};
const ModalContext = createContext<iContext>(initialState);

export function ModalProvider({ children, initialState }: iProps) {
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

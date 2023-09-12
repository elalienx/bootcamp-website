// Node modules
import { createContext, useContext, useState } from "react";

// Interfaces
interface iProps {
  children: JSX.Element;
  initialState: JSX.Element | null;
}
interface iContext {
  modal: JSX.Element | null;
  setModal: Function;
}

// Properties
const initialState = {
  modal: null,
  setModal: () => {},
};
const ModalContext = createContext<iContext>(initialState);

export function ModalProvider({ children, initialState }: iProps) {
  // Local state
  const [modal, setModal] = useState(initialState);

  // Components
  const ErrorMessage = <p>There aren't any children inside the provider</p>;

  // Safeguards
  if (children === null) return ErrorMessage;
  if (children === undefined) return ErrorMessage;

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
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

import { createContext, useState } from "react";

// Criando o contexto
export const MenuContext = createContext();

// Componente que fornece o contexto
export const MenuContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  function openMenu() {
    setIsOpen(true);
  }

  return (
    <MenuContext.Provider value={{ isOpen, closeMenu, openMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

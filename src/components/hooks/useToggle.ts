import { useState } from "react";

export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};
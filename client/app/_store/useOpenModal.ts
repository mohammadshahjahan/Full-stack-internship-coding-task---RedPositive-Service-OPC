import { create } from "zustand";

interface OpenModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useOpenModal = create<OpenModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useOpenModal;
